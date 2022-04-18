import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorService } from 'src/app/service/doctor.service';
import { EmployeerService } from 'src/app/service/employeer.service';
import { HouseAssistantService } from 'src/app/service/house-assistant.service';
import { LegalService } from 'src/app/service/legal.service';
import { LoginService } from 'src/app/service/login.service';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vendor=true;
  consumer=true;
  admin=true;
  constructor(private snack:MatSnackBar,private login:LoginService,private vendorService:VendorService,
    private legalService:LegalService,private doctorService:DoctorService,
    private houseService:HouseAssistantService,private employeerService:EmployeerService) { }
 
  loginData={
    username:'',
    password:''

  };
  
  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim()==''||this.loginData.username==null){
      this.snack.open("Enter valid username",'',{
        duration: 3000
      })
    }
    if(this.loginData.password.trim()==''||this.loginData.password==null){
      this.snack.open("Enter valid password",'',{
        duration: 3000
      })
    }
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        console.log("success")

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              console.log(user); 
              
              if(this.login.getUserRole()=='Admin'){
                  
                window.location.href="/admin"
                  
              }
              else if(this.login.getUserRole()=='Doctor'){
                this.doctorService.getDoctor().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/doctor"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                ) 
                  
              }
              else if(this.login.getUserRole()=='Employeer'){
                this.employeerService.getEmployeer().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/employeer"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                ) 
                  
              }
              else if(this.login.getUserRole()=='HouseAssistant'){
                this.houseService.getAssistant().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/assistant"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                ) 
                  
              }
              else if(this.login.getUserRole()=='Legal'){
                  
                this.legalService.getLegal().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/legal"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                )
                
                  
              }
              
              else if(this.login.getUserRole()=='Vendor'){
                //this.router.navigate(['user-dashboard'])
                  this.vendorService.getVendor().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/vendor"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                ) 
                   
              }
              else{
                
                this.vendorService.getConsumer().subscribe(
                  (data:any)=>{
                    if(data==null){
                      window.location.href="/consumer"
                      }
                    else{
                      window.location.href="/user/ven"
                    }
                  },
                  (error)=>{}
                ) 
              }
              
            }
        );
      },
      (error)=>{
        Swal.fire('Invalid username or password','','error')
      }
    )
    
  }
 
}
