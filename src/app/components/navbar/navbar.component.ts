import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService,private router:Router,private vendorService:VendorService) { }
  flag=true;
  flag2=false;
  ads:any;
  ngOnInit(): void {

    this.vendorService.getAds().subscribe((data)=>{
      this.ads=data;
      console.log(data)
    },(error)=>{

    })

    
    if(this.user.role=='Admin'||this.user.role=='HouseAssistant'||this.user.role=='Employeer'||this.user.role=='Consumer'||this.user.role=='Vendor'||this.user.role=='Doctor'||this.user.role=='Legal'){
    this.flag=false;
    }
    if(this.user.role=='Consumer'){
      this.flag2=true;

    }

   

  }
  user=this.login.getUser();
  logout(){
    this.login.logout();
    window.location.reload();
    window.location.href="/"
  }

  
  
 
}
