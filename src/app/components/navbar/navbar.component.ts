import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService) { }
  flag=true;
  ngOnInit(): void {
    if(this.user.role=='Admin'||this.user.role=='Consumer'||this.user.role=='Vendor'){
    this.flag=false;
    }

  }
  user=this.login.getUser();
  logout(){
    this.login.logout();
    window.location.reload();
    window.location.href="/"
  }
 
}
