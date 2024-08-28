// import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs';
// import { MenuItem } from 'primeng/api';

// @Injectable()
// export class BreadcrumbService {
//   private itemsSource = new Subject<MenuItem[]>();

//   itemsHandler = this.itemsSource.asObservable();

//   setItems(items: MenuItem[]) {
//     this.itemsSource.next(items);
//   }


// }
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
interface Breadcrumb {
  label: string;
  routerLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbsSubject.next(this.createBreadcrumbs(this.route.root));
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    console.log("route",route);
    console.log("url",url);
    console.log("breadcrumbs",breadcrumbs)
    console.log(children)
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.snapshot.data['breadcrumb']) { 
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        if (routeURL !== '') {
          url += `/${routeURL}`;
        }
        console.log(routeURL)
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'],
          routerLink: url
        });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
