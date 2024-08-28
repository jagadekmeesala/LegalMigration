import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  sidebarVisible = false;

  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' }
  ];

  items: MenuItem[] = [
    { label: 'Option 1', icon: 'pi pi-fw pi-plus' },
    { label: 'Option 2', icon: 'pi pi-fw pi-minus' }
  ];

  cards = [
    {
      title: 'Card 1',
      content: 'This is the content of card 1.',
      image: 'assets/card1.jpg'
    },
    {
      title: 'Card 2',
      content: 'This is the content of card 2.',
      image: 'assets/card2.jpg'
    },
    // Add more cards as needed
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }



}
