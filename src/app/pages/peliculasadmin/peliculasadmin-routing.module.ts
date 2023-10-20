import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasadminPage } from './peliculasadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PeliculasadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasadminPageRoutingModule {}
