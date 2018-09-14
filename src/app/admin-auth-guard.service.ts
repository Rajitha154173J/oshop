import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';

import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth : AuthService, private userService: UserService) { }

  canActivate(){
        return  this.auth.user$.pipe(map(user=> 
            this.userService.get(user.uid)
          ))
          
  }
}
