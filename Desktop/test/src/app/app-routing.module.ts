import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'mother-secretion',
    loadChildren: () => import('./mother-secretion/mother-secretion.module').then( m => m.MotherSecretionPageModule)
  },
  {
    path: 'blood-detail',
    loadChildren: () => import('./blood-detail/blood-detail.module').then( m => m.BloodDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
