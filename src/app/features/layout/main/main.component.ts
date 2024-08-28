import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from '../../../app.component';
import { MenuService } from 'src/app/shared/services/menu_service/app.menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  rotateMenuButton: boolean = false;

  topbarMenuActive: boolean = false;

  overlayMenuActive: boolean = false;

  staticMenuDesktopInactive: boolean = false;

  staticMenuMobileActive: boolean = false;

  menuClick: boolean = false;

  topbarItemClick: boolean = false;

  configClick: boolean = false;

  activeTopbarItem: any;

  menuHoverActive: boolean = false;

  configActive: boolean = false;

  inlineMenuActive: boolean = false;

  inlineMenuClick: boolean = false;

  constructor(
    private menuService: MenuService,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent,
    private router: Router
  ) {}

  onLayoutClick() {
    if (!this.topbarItemClick) {
      this.activeTopbarItem = null;
      this.topbarMenuActive = false;
    }

    if (!this.menuClick || (this.inlineMenuClick && this.isSlim())) {
      if (this.isHorizontal() || this.isSlim()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    if (this.inlineMenuActive && !this.inlineMenuClick && !this.isStatic()) {
      this.inlineMenuActive = false;
    }

    this.inlineMenuClick = false;
    this.configClick = false;
    this.topbarItemClick = false;
    this.menuClick = false;
  }

  onMenuButtonClick(event: any) {
    this.menuClick = true;
    this.rotateMenuButton = !this.rotateMenuButton;
    this.topbarMenuActive = false;

    if (
      this.app.layoutMode === 'overlay' &&
      !this.isMobile() &&
      !this.isTablet()
    ) {
      this.overlayMenuActive = !this.overlayMenuActive;
    } else {
      if (this.isDesktop()) {
        this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
      } else {
        this.staticMenuMobileActive = !this.staticMenuMobileActive;
      }
    }

    event.preventDefault();
  }

  onMenuClick($event: any) {
    this.menuClick = true;

    if (this.inlineMenuActive && !this.inlineMenuClick && !this.isStatic()) {
      this.inlineMenuActive = false;
    }
  }

  onInlineMenuClick(event: any) {
    this.inlineMenuActive = !this.inlineMenuActive;
    this.inlineMenuClick = true;
  }

  onTopbarMenuButtonClick(event: any) {
    this.topbarItemClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onTopbarItemClick(event: any, item: any) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }

    event.preventDefault();
  }

  onTopbarSubItemClick(event: any) {
    event.preventDefault();
  }

  onConfigClick(event: any) {
    this.configClick = true;
  }

  onRippleChange(event: any) {
    this.app.ripple = event.checked;
    this.primengConfig = event.checked;
  }

  hideOverlayMenu() {
    this.rotateMenuButton = false;
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  isMobile() {
    return window.innerWidth <= 640;
  }

  isOverlay() {
    return this.app.layoutMode === 'overlay';
  }

  isHorizontal() {
    return this.app.layoutMode === 'horizontal';
  }

  isSlim() {
    return this.app.layoutMode === 'slim';
  }

  isStatic() {
    return this.app.layoutMode === 'static';
  }
  logOut(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/auth/login']);
  }

  Profile()
  {
    this.router.navigate(['/home/profile'])
  }
}
