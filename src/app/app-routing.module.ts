import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdsFormComponent } from './pages/ads-form/ads-form.component';
import { ApplyForworkComponent } from './pages/apply-forwork/apply-forwork.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { ConsumerComponent } from './pages/consumer/consumer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { EmployerrFormComponent } from './pages/employerr-form/employerr-form.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { FurnitureFormComponent } from './pages/furniture-form/furniture-form.component';
import { HomeSupportComponent } from './pages/home-support/home-support.component';
import { HomeComponent } from './pages/home/home.component';
import { HouseAssistantComponent } from './pages/house-assistant/house-assistant.component';
import { LegalComponent } from './pages/legal/legal.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ServiceAccomodationComponent } from './pages/service-accomodation/service-accomodation.component';
import { ServiceAccomodation2Component } from './pages/service-accomodation2/service-accomodation2.component';
import { ServiceDoctorComponent } from './pages/service-doctor/service-doctor.component';
import { ServiceHouseAssitantComponent } from './pages/service-house-assitant/service-house-assitant.component';
import { ServiceLegalComponent } from './pages/service-legal/service-legal.component';
import { ServiceWaterComponent } from './pages/service-water/service-water.component';
import { ServiceWorkComponent } from './pages/service-work/service-work.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { VendorFormComponent } from './pages/vendor-form/vendor-form.component';
import { VendorServiceComponent } from './pages/vendor-service/vendor-service.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { ViewApartmentComponent } from './pages/view-apartment/view-apartment.component';
import { ViewDoctorComponent } from './pages/view-doctor/view-doctor.component';
import { ViewFurnitureComponent } from './pages/view-furniture/view-furniture.component';
import { ViewHouseAssistantComponent } from './pages/view-house-assistant/view-house-assistant.component';
import { ViewHouseServiceComponent } from './pages/view-house-service/view-house-service.component';
import { ViewLegalClientComponent } from './pages/view-legal-client/view-legal-client.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ViewWaterSupportComponent } from './pages/view-water-support/view-water-support.component';
import { ViewWorkComponent } from './pages/view-work/view-work.component';
import { WaterFormComponent } from './pages/water-form/water-form.component';
import { WorkFormComponent } from './pages/work-form/work-form.component';
import { NormalGuard } from './service/normal.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'adsForm',
    component:AdsFormComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'consumer',
    component:ConsumerComponent,
    pathMatch:'full'
  },
  {
    path:'doctor',
    component:DoctorComponent,
    pathMatch:'full'
  },
  {
    path:'appartment',
    component:ViewApartmentComponent,
    pathMatch:'full'
  },
  {
    path:'viewDoctor',
    component:ViewDoctorComponent,
    pathMatch:'full'
  },
  {
    path:'viewAssistant',
    component:ViewHouseAssistantComponent,
    pathMatch:'full'
  },
  {
    path:'commingSoon',
    component:CommingSoonComponent,
    pathMatch:'full'
  },
  {
    path:'viewLegal',
    component:ViewLegalClientComponent,
    pathMatch:'full'
  },
  {
    path:'vendor',
    component:VendorComponent,
    pathMatch:'full'
  },
  {
    path:'legal',
    component:LegalComponent,
    pathMatch:'full'
  },
  {
    path:'employeer',
    component:EmployerrFormComponent,
    pathMatch:'full'
  },
  {
    path:'assistant',
    component:HouseAssistantComponent,
    pathMatch:'full'
  },
  {
    path:'viewFurniture',
    component:ViewFurnitureComponent,
    pathMatch:'full'
  },
  {
    path:'viewHouseService',
    component:ViewHouseServiceComponent,
    pathMatch:'full'
  },
  {
    path:'viewProduct',
    component:ViewProductComponent,
    pathMatch:'full'
  },
  {
    path:'viewWater',
    component:ViewWaterSupportComponent,
    pathMatch:'full'
  },
  {
    path:'viewWork',
    component:ViewWorkComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'fileForm',
    component:FileUploadComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'user',
    component:DashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'ven',
        component:UserDashboardComponent
      }, 
      {
        path:'addWater',
        component:WaterFormComponent
      },
      {
        path:'addApartment',
        component:VendorFormComponent
      }, 
      {
        path:'addWork',
        component:WorkFormComponent
      }, 
      {
        path:'addFurniture',
        component:FurnitureFormComponent
      }, 
      {
        path:'addProduct',
        component:ProductFormComponent
      },
      {
        path:'addHouseService',
        component:HomeSupportComponent
      },
      {
        path:'addAds',
        component:AddFormComponent
      },
      {
        path:'houseService',
        component:VendorServiceComponent
      },
      {
        path:'doctorService',
        component:ServiceDoctorComponent
      },
      {
        path:'legalService',
        component:ServiceLegalComponent
      },
      {
        path:'assistantService',
        component:ServiceHouseAssitantComponent
      },
      {
        path:'waterService',
        component:ServiceWaterComponent
      },
      {
        path:'serviceAppartment/:id',
        component:ServiceAccomodationComponent
      },
      {
        path:'apartmentService',
        component:ServiceAccomodation2Component
      },
      {
        path:'applyWork/:id',
        component:ApplyForworkComponent
      },
      {
        path:'workService',
        component:ServiceWorkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
