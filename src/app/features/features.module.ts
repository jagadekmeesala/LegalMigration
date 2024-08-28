import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { MainComponent } from './layout/main/main.component';
import { MenuComponent } from './layout/menu/menu.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuitemComponent } from './layout/menuitem/menuitem.component';
import { UsersComponent } from './components/admin/users/users.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { CreateEditUserComponent } from './components/admin/create-edit-user/create-edit-user.component';
import { RolesEditComponent } from './components/admin/roles-edit/roles-edit.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';
import { CardModule } from 'primeng/card'; 
import { MeetingScheduleComponent } from './components/meeting-schedule/meeting-schedule.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar'; 

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MyClientsComponent } from './components/my-clients/my-clients.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CompletedmeetingsComponent } from './components/completedmeetings/completedmeetings.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    AdminComponent,
    UsersComponent,
    MeetingScheduleComponent,
    RolesComponent,
    TopnavComponent,
    FooterComponent,
    CalendarComponent,
    MenuitemComponent,
    DashboardComponent,
    BreadcrumbComponent,
    CreateEditUserComponent,
    RolesEditComponent,
    LawyersComponent,
    MyClientsComponent,
    MyClientsComponent,
    CompletedmeetingsComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    ButtonModule,
    CommonModule,
    BreadcrumbModule,
    DialogModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CardModule
  ]
})
export class FeaturesModule {}
