import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model!: any[];


// Left menu items for client view
  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/main/home'],
          },
          {
            label: 'Calender',
            icon: 'pi pi-calendar',
            routerLink: ['/main/home/cal'],
          },
          {
            label: 'Meetings',
            icon: 'pi pi-phone',
            // routerLink: ['/main/dashboard/meeting'],
              items: [
              {
                label: 'Scheduled meetings',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/main/home/meeting'],
              },
              {
                label: 'Completed meetings',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/main/home/completedmeetings'],
              },
            ],
          },
          // {
          //   label: 'Admin',
          //   icon: 'pi pi-fw pi-lock',
          //   items: [
          //     {
          //       label: 'Users',
          //       icon: 'pi pi-fw pi-user',
          //       routerLink: ['/main/dashboard/admin/users'],
          //     },
          //     {
          //       label: 'Roles',
          //       icon: 'pi pi-fw pi-users',
          //       routerLink: ['/main/dashboard/admin/roles'],
          //     },
          //   ],
          // },
          {
            label: 'Lawyer',
            icon: 'pi pi-fw pi-lock',
            routerLink: ['/main/home/lawyers'],
            // items: [
            //   {
            //     label: 'Lawyers',
            //     icon: 'pi pi-fw pi-user',
            //     routerLink: ['/main/home/lawyers'],
            //   },
            //   {
            //     label: 'My Lawyers',
            //     icon: 'pi pi-fw pi-users',
            //     routerLink: ['/main/home/mylawyers'],
            //   },
            // ],
          },
        ],
      },
    ];
  }
}
