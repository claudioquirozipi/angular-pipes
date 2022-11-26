import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotCommonComponent } from './pages/not-common/not-common.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';
import { myUppercasePipe } from './pipes/my-uppercase.pipe';
import { flyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NotCommonComponent,
    NumbersComponent,
    BasicComponent,
    OrderComponent,
    myUppercasePipe,
    flyPipe,
    OrderPipe,
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
