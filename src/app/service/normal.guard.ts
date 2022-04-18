import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NormalGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.login.isLoggedIn() &&this.login.getUserRole() == 'Vendor'||this.login.getUserRole() == 'HouseAssistant'
      ||this.login.getUserRole() == 'Doctor'||this.login.getUserRole() == 'Legal'||this.login.getUserRole() == 'Employeer'
      ||this.login.getUserRole() == 'Consumer'
      ){
        return true;
      }
      this.router.navigate(['login']);
    return false;
  }
  
}
