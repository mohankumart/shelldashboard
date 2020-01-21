import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
