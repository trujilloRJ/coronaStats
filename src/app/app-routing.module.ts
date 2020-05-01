import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryComponent } from './pages/country/country.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/country/:country', component: CountryComponent },
  { path: 'comparison/:country', component: ComparisonComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
