import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SalariesComponent } from './salaries/salaries.component';
import { SalariesdetailComponent } from './salariesdetail/salariesdetail.component';


const routes: Routes = [
  { path: "salaries", component: SalariesComponent},
  // { path: "api/v1/employee", component: SalariesComponent},
  { path: "salariesdetail/:id", component: SalariesdetailComponent},
  // { path: "api/v1/employee/:id", component: SalariesdetailComponent},
  { path: "accueil", component: AccueilComponent},
  { path: "", redirectTo: "accueil",pathMatch:"full" },
  { path: "**", redirectTo: "accueil",pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
