import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full',
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'no-comun',
    component: NotCommonComponent,
  },

  {
    path: 'numeros',
    component: NumbersComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
