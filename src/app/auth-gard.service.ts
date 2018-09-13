import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { RouterStateSnapshot } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class  AuthGardService implements CanActivate{


  constructor(private auth : AuthService, private router: Router) { }

  canActivate( router, state :RouterStateSnapshot){
    return this.auth.user$.pipe(map(user=>{
          if(user)
          return true;

      this.router.navigate(['/login'],{queryParams:{ returnUrl:state.url }});
      return false;
     }))
    
  }
}
