import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    BasicComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    BasicComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
