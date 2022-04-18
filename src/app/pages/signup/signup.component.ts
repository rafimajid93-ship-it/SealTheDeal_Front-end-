import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserServiceService,private snack:MatSnackBar) { }

  user={
    name:'',
    password:'',
    email:'',
    phone:'',
    role:''
  }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user)
    if(this.user.name==null ||this.user.name==''||this.user.password==null||this.user.password==''||this.user.role==null||this.user.role==''){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.userService.addUser(this.user).subscribe(
        (data:any)=>{
          console.log(this.user)
          // alert("Successfully saved")
          // this._snackBar.open('Successfully saved','',{
          //   duration: 2000
          // });
          Swal.fire('Successfull','','success')
          window.location.href="/register"
        },
        (error)=>{
          Swal.fire('Something went wrong','','error')
        }
      )
    }
  }
}
