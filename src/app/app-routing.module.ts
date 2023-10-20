import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/iniciosesion/iniciosesion.module').then(
        (m) => m.IniciosesionPageModule
      ),
  },
  {
    path: 'iniciar',
    loadChildren: () =>
      import('./pages/iniciosesion/iniciosesion.module').then(
        (m) => m.IniciosesionPageModule
      ),
  },
  {
    path: 'registrosesion',
    loadChildren: () =>
      import('./pages/registrosesion/registrosesion.module').then(
        (m) => m.RegistrosesionPageModule
      ),
  },
  {
    path: 'milista',
    loadChildren: () =>
      import('./pages/milista/milista.module').then((m) => m.MilistaPageModule),
  },
  {
    path: 'miperfil',
    loadChildren: () =>
      import('./pages/miperfil/miperfil.module').then(
        (m) => m.MiperfilPageModule
      ),
  },
  {
    path: 'peliculas/:id',
    loadChildren: () =>
      import('./pages/peliculas/peliculas.module').then(
        (m) => m.PeliculasPageModule
      ),
  },
  {
    path: 'contra',
    loadChildren: () =>
      import('./pages/contra/contra.module').then((m) => m.ContraPageModule),
  },
  {
    path: 'homeadmin',
    loadChildren: () =>
      import('./pages/homeadmin/homeadmin.module').then(
        (m) => m.HomeadminPageModule
      ),
  },
  {
    path: 'perfiladmin',
    loadChildren: () =>
      import('./pages/perfiladmin/perfiladmin.module').then(
        (m) => m.PerfiladminPageModule
      ),
  },
  {
    path: 'reportados',
    loadChildren: () =>
      import('./pages/reportados/reportados.module').then(
        (m) => m.ReportadosPageModule
      ),
  },
  {
    path: 'peliculasadmin',
    loadChildren: () =>
      import('./pages/peliculasadmin/peliculasadmin.module').then(
        (m) => m.PeliculasadminPageModule
      ),
  },
  {
    path: 'editarperfil',
    loadChildren: () =>
      import('./pages/editarperfil/editarperfil.module').then(
        (m) => m.EditarperfilPageModule
      ),
  },

  {
    path: 'serie/:id',
    loadChildren: () =>
      import('./pages/serie/serie.module').then((m) => m.SeriePageModule),
  },

  {
    path: 'buscar',
    loadChildren: () =>
      import('./pages/buscar/buscar.module').then((m) => m.BuscarPageModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
