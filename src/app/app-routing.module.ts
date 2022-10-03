import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdbicodigosComponent } from './backend/adbicodigos/adbicodigos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'adbicodigos', component: AdbicodigosComponent},
  {path: 'evamoduloalgo', loadChildren: () => import('./backend/evamoduloalgo/evamoduloalgo.module')
  .then( m => m.EvamoduloalgoPageModule)},
  {path: 'preinscritos', loadChildren: () => import('./backend/preinscritos/preinscritos.module')
  .then( m => m.PreinscritosPageModule)},
  {path: 'estudiantes', loadChildren: () => import('./backend/estudiantes/estudiantes.module')
  .then( m => m.EstudiantesPageModule)},
  {path: 'evamodulos', loadChildren: () => import('./backend/evamodulos/evamodulos.module')
  .then( m => m.EvamodulosPageModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

