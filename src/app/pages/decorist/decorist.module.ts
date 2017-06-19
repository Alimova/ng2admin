import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicTablesService } from './tables/components/basicTables/basicTables.service';
import { StripedTable } from './tables/components/basicTables/components/stripedTable';

import { DecoristComponent } from './decorist.component';
import { routing } from './decorist.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgaModule,
    routing
  ],
  declarations: [
    StripedTable,
    DecoristComponent
  ]
  ,
  providers: [
    BasicTablesService
  ]
})
export class DecoristModule {}
