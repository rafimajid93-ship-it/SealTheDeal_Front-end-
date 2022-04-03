import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AdsFormComponent } from './pages/ads-form/ads-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminComponent } from './pages/admin/admin.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { ConsumerComponent } from './pages/consumer/consumer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewLegalClientComponent } from './pages/view-legal-client/view-legal-client.component';
import { VendorFormComponent } from './pages/vendor-form/vendor-form.component';
import { ViewApartmentComponent } from './pages/view-apartment/view-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdsFormComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    VendorComponent,
    ConsumerComponent,
    SidebarComponent,
    DashboardComponent,
    ViewLegalClientComponent,
    VendorFormComponent,
    ViewApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
