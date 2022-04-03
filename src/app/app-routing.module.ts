import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AdsFormComponent } from './pages/ads-form/ads-form.component';
import { ConsumerComponent } from './pages/consumer/consumer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VendorFormComponent } from './pages/vendor-form/vendor-form.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { ViewApartmentComponent } from './pages/view-apartment/view-apartment.component';
import { ViewLegalClientComponent } from './pages/view-legal-client/view-legal-client.component';

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
    path:'appartment',
    component:ViewApartmentComponent,
    pathMatch:'full'
  },
  {
    path:'vendor',
    component:VendorComponent,
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
    path:'user',
    component:DashboardComponent,
    children:[
      {
        path:'ven',
        component:ViewLegalClientComponent
      }, 
      {
        path:'addApartment',
        component:VendorFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
