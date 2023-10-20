import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportadosPageRoutingModule } from './reportados-routing.module';

import { ReportadosPage } from './reportados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportadosPageRoutingModule
  ],
  declarations: [ReportadosPage]
})
export class ReportadosPageModule {}
