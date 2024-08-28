import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { PrimeNGModule } from './prime-ng.module';
import { BreadcrumbService } from './services/breadcrumb_service/breadcrumb.service';
import { MenuService } from './services/menu_service/app.menu.service';
import { AuthGuard } from './guards/auth.guard';
import { FormValidationsService } from './services/form-validations.service';

@NgModule({
  imports: [CommonModule, PrimeNGModule],
  exports: [PrimeNGModule],
  providers: [
    AuthGuard,
    FormValidationsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MenuService,
    BreadcrumbService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
