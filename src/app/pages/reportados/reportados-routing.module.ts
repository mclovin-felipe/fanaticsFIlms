import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportadosPage } from './reportados.page';

const routes: Routes = [
  {
    path: '',
    component: ReportadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportadosPageRoutingModule {}
