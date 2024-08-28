import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { LawyersComponent } from './components/lawyer/lawyers/lawyers.component';
// import { MylawyersComponent } from './components/lawyer/mylawyers/mylawyers.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MeetingScheduleComponent } from './components/meeting-schedule/meeting-schedule.component';
import { MyClientsComponent } from './components/my-clients/my-clients.component';
import { CompletedmeetingsComponent } from './components/completedmeetings/completedmeetings.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';


const routes: Routes = [

  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      // { path: 'lawyers', component: LawyersComponent, data: { breadcrumb: 'Lawyers' } },
      // { path: 'mylawyers', component: MylawyersComponent, data: { breadcrumb: 'Mylawyers' } },
      { path: 'lawyers', component: LawyersComponent, data: { breadcrumb : 'Lawyers'}},
      { path: 'cal', component: CalendarComponent, data: { breadcrumb: 'Calender' } },
      { path: 'meeting', component: MeetingScheduleComponent, data: { breadcrumb: 'Meeting/Sheduled meetings' } },
      { path: 'completedmeetings', component: CompletedmeetingsComponent, data: { breadcrumb: '/Meeting/Completedmeetings' } },
 
      { path: 'myclients', component: MyClientsComponent, data: { breadcrumb: 'MyClients' } },
       
    { path: 'profile', component: ProfileComponent  },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
 
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
