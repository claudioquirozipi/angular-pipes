import { NgModule } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
@NgModule({
  exports: [
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    CardModule,
  ],
})
export class PrimeNgModule {}
