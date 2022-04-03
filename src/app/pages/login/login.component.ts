import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private snack:MatSnackBar,private login:LoginService,private vendorService:VendorService) { }
 
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
                  
               // this.router.navigate(['admin'])
                //this.login.loginStatusSubject.next(true);
              }else if(this.login.getUserRole()=='Vendor'){
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
                // if(this.vendorService.getVendor()==null){
                //   window.location.href="/vendor"
                // }
                // else{
                //   window.location.href="/user/ven"
                // }
                
                
              }
              else{
                
                window.location.href="/consumer"
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
