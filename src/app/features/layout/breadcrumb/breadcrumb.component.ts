import { BreadcrumbService } from './../../../shared/services/breadcrumb_service/breadcrumb.service';
import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

interface Breadcrumb {
  label: string;
  routerLink?: string;
}
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})


export class BreadcrumbComponent implements OnDestroy {
  subscription: Subscription;

  items!: MenuItem[];
  home: { icon: string; routerLink: string; };
  breadcrumbs: Breadcrumb[] = [];


  // constructor(public breadcrumbService: BreadcrumbService) {
  //   // this.subscription = breadcrumbService.itemsHandler.subscribe((response) => {
  //   //   this.items = response;
  //   // });
  //   // this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);
  // }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


constructor(private breadcrumbService: BreadcrumbService) { }

ngOnInit(): void {
  this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);
}
}