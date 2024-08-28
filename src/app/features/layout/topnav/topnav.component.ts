import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from '../main/main.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
firstName= localStorage.getItem("firstname");
roleName=localStorage.getItem("roleName");
  constructor(
    public app: AppComponent,
    public mainComponent: MainComponent,
    private route: Router
  ) {}

  public logout() {
    this.route.navigate(['/login']);
  }

  public Profile() {
    this.route.navigate(['/home/profile']);
  }
}
