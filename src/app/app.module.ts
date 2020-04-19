import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { CountUpModule } from 'ngx-countup';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryNumberComponent } from './components/country-number/country-number.component';
import { CountryChartComponent } from './components/country-chart/country-chart.component';
import { SearchComponent } from './components/search/search.component';
import { FilterCountriesPipe } from './pipes/filter-countries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopCardComponent,
    HomeComponent,
    CountriesComponent,
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    CountryNumberComponent,
    CountryChartComponent,
    SearchComponent,
    FilterCountriesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    CountUpModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
