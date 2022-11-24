import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

import localeEs from '@angular/common/locales/es-PE';
registerLocaleData(localeEs);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PrimeNgModule,
    SalesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PE',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
