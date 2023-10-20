import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosesionPage } from './registrosesion.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosesionPageRoutingModule {}
