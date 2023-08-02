import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetroRouteComponent } from './metro-route/metro-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'metro-routes', pathMatch: 'full' },    
  { path: 'metro-routes', component: MetroRouteComponent },    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
