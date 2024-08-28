import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';
import { LawyersComponent } from './features/components/lawyers/lawyers.component';
import { CalendarComponent } from './features/components/calendar/calendar.component';
import { MeetingScheduleComponent } from './features/components/meeting-schedule/meeting-schedule.component';
import { MyClientsComponent } from './features/components/my-clients/my-clients.component';
import { CompletedmeetingsComponent } from './features/components/completedmeetings/completedmeetings.component';
import { ProfileComponent } from './features/components/profile/profile.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      { path: 'lawyers', component: LawyersComponent }, 
      // { path: 'mylawyers', component: MylawyersComponent},
      { path: 'cal', component: CalendarComponent }, 
      { path: 'meeting', component: MeetingScheduleComponent}, 
      { path: 'completedmeetings', component: CompletedmeetingsComponent},
      { path :'myclients',component:MyClientsComponent},
      { path :'profile',component:ProfileComponent},



      {
        path: 'main',
        loadChildren: () =>
          import('./features/features.module').then(
            (m) => m.FeaturesModule
          ),
          canActivate: [AuthGuard],
      },

      // {
      //   path: '**',
      //   redirectTo: '/auth/login',
      //   pathMatch: 'full',
      // },
      
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
