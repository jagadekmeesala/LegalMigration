import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed in feature modules
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TabViewModule } from 'primeng/tabview';


 
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { CalendarModule, DateAdapter } from 'angular-calendar'; // Import CalendarModule
import { AuthenticationModule } from './authentication/authentication.module';
import { FeaturesModule } from './features/features.module';
import { LawyersComponent } from './features/components/lawyers/lawyers.component';
import { MessageService } from 'primeng/api'; // Import MessageService



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    CommonModule,
    AuthenticationModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FeaturesModule,
    TabViewModule,
  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class AppModule {}
