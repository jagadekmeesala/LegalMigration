import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { MainComponent } from '../main/main.component';
import { MenuService } from 'src/app/shared/services/menu_service/app.menu.service';

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  host: {
    '[class.active-menuitem]': 'active',
    '[class.layout-root-menuitem]': 'root',
  },
  animations: [
    trigger('children', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          'z-index': 100,
        })
      ),
      state(
        'hidden',
        style({
          height: '0px',
          'z-index': '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class MenuitemComponent implements OnInit, OnDestroy {
  @Input() item: any;

  @Input()
  index!: number;

  @Input()
  root!: boolean;

  @Input()
  visible!: boolean;

  @Input()
  parentKey!: string;

  animating!: boolean;

  active = false;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key!: string;

  constructor(
    public appMain: MainComponent,
    public router: Router,
    private cd: ChangeDetectorRef,
    private menuService: MenuService
  ) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(
      (key) => {
        // deactivate current active menu
        if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
          this.active = false;
        }
      }
    );

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params) => {
        if (this.appMain.isHorizontal()) {
          this.active = false;
        } else {
          if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
          } else {
            this.active = false;
          }
        }
      });
  }

  ngOnInit() {
    if (!this.appMain.isHorizontal() && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }

    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);
  }

  updateActiveStateFromRoute() {
    this.active = this.router.isActive(
      this.item.routerLink[0],
      !this.item.items && !this.item.preventExact
    );
  }

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // navigate with hover in horizontal mode
    if (this.root) {
      this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key);

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
      this.animating = true;
    } else {
      // activate item
      this.active = true;

      // hide overlay menus
      this.appMain.overlayMenuActive = false;
      this.appMain.staticMenuMobileActive = false;
      this.appMain.menuHoverActive = !this.appMain.menuHoverActive;

      // reset horizontal menu
      if (this.appMain.isHorizontal() || this.appMain.isSlim()) {
        this.menuService.reset();
      }
    }
  }

  onMouseEnter() {
    // activate item on hover
    if (
      this.root &&
      this.appMain.menuHoverActive &&
      (this.appMain.isHorizontal() || this.appMain.isSlim()) &&
      this.appMain.isDesktop()
    ) {
      this.menuService.onMenuStateChange(this.key);
      this.active = true;
    }
  }

  onAnimationDone() {
    this.animating = false;
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
