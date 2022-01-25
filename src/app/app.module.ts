import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from 'src/interceptors/http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { FilterByColorComponent } from './components/filter-by-color/filter-by-color.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterCarDetailPipe } from './pipes/filter-car-detail.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { HoverDirective } from './directives/hover.directive';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { SearchComponent } from './components/search/search.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { BrandAddFormComponent } from './pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { BrandsDashboardComponent } from './pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { CarAddFormComponent } from './pages/admin-dashboard-page/cars-dashboard/car-add-form/car-add-form.component';
import { CarEditFormComponent } from './pages/admin-dashboard-page/cars-dashboard/car-edit-form/car-edit-form.component';
import { CarImageFormComponent } from './pages/admin-dashboard-page/cars-dashboard/car-image-form/car-image-form.component';
import { CarsDashboardComponent } from './pages/admin-dashboard-page/cars-dashboard/cars-dashboard.component';
import { ColorAddFormComponent } from './pages/admin-dashboard-page/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './pages/admin-dashboard-page/colors-dashboard/color-edit-form/color-edit-form.component';
import { ColorsDashboardComponent } from './pages/admin-dashboard-page/colors-dashboard/colors-dashboard.component';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { FilterByBrandBarComponent } from './pages/homepage/filter-by-brand-bar/filter-by-brand-bar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OverlayComponent } from './pages/homepage/overlay/overlay.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WalletPageComponent } from './pages/wallet-page/wallet-page.component';
import { EstimateDashboardPageComponent } from './pages/admin-dashboard-page/estimate-dashboard/estimate-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayComponent,
    SearchComponent,
    CarsListComponent,
    CarCardComponent,
    FilterByBrandBarComponent,
    FilterByColorComponent,
    CarFilterComponent,
    HomepageComponent,
    FooterComponent,
    CarPageComponent,
    FilterCarPipe,
    FilterColorPipe,
    FilterBrandPipe,
    FilterCarDetailPipe,
    CarsPageComponent,
    SliceBrandPipe,
    CheckoutPageComponent,
    NotFoundPageComponent,
    AdminDashboardPageComponent,
    EstimateDashboardPageComponent,
    CarsDashboardComponent,
    CarAddFormComponent,
    CarEditFormComponent,
    CarImageFormComponent,
    BrandsDashboardComponent,
    ColorsDashboardComponent,
    BrandAddFormComponent,
    BrandEditFormComponent,
    ColorAddFormComponent,
    ColorEditFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LogoutPageComponent,
    LoadingSpinnerComponent,
    AccountPageComponent,
    HiddenCreditCardNoPipe,
    WalletPageComponent,
    HoverDirective,
    PasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    StoreModule.forRoot(AppReducers),
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
