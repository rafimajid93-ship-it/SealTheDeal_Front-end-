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
import { FurnitureFormComponent } from './pages/furniture-form/furniture-form.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { LegalComponent } from './pages/legal/legal.component';
import { HouseAssistantComponent } from './pages/house-assistant/house-assistant.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ViewFurnitureComponent } from './pages/view-furniture/view-furniture.component';
import { WaterFormComponent } from './pages/water-form/water-form.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { ViewDoctorComponent } from './pages/view-doctor/view-doctor.component';
import {MatTableModule} from '@angular/material/table';
import { ViewHouseAssistantComponent } from './pages/view-house-assistant/view-house-assistant.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { HomeSupportComponent } from './pages/home-support/home-support.component';
import { ViewHouseServiceComponent } from './pages/view-house-service/view-house-service.component';
import { ViewWaterSupportComponent } from './pages/view-water-support/view-water-support.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { EmployerrFormComponent } from './pages/employerr-form/employerr-form.component';
import { WorkFormComponent } from './pages/work-form/work-form.component';
import { ViewWorkComponent } from './pages/view-work/view-work.component';
import { VendorServiceComponent } from './pages/vendor-service/vendor-service.component';
import { ServiceDoctorComponent } from './pages/service-doctor/service-doctor.component';
import { ServiceLegalComponent } from './pages/service-legal/service-legal.component';
import { ServiceHouseAssitantComponent } from './pages/service-house-assitant/service-house-assitant.component';
import { ServiceWaterComponent } from './pages/service-water/service-water.component';
import { ServiceAccomodationComponent } from './pages/service-accomodation/service-accomodation.component';
import { ServiceAccomodation2Component } from './pages/service-accomodation2/service-accomodation2.component';
import { ApplyForworkComponent } from './pages/apply-forwork/apply-forwork.component';
import { ServiceWorkComponent } from './pages/service-work/service-work.component';



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
    ViewApartmentComponent,
    FurnitureFormComponent,
    ProductFormComponent,
    AddFormComponent,
    DoctorComponent,
    LegalComponent,
    HouseAssistantComponent,
    ViewProductComponent,
    ViewFurnitureComponent,
    WaterFormComponent,
    FileUploadComponent,
    ViewDoctorComponent,
    ViewHouseAssistantComponent,
    UserDashboardComponent,
    HomeSupportComponent,
    ViewHouseServiceComponent,
    ViewWaterSupportComponent,
    CommingSoonComponent,
    EmployerrFormComponent,
    WorkFormComponent,
    ViewWorkComponent,
    VendorServiceComponent,
    ServiceDoctorComponent,
    ServiceLegalComponent,
    ServiceHouseAssitantComponent,
    ServiceWaterComponent,
    ServiceAccomodationComponent,
    ServiceAccomodation2Component,
    ApplyForworkComponent,
    ServiceWorkComponent,

    
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
    HttpClientModule,
    MatTableModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
