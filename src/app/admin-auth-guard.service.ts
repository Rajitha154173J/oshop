import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';

import { Injectable } from '@angular/core';
//import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { switchMap } from "rxjs/internal/operators/switchMap";
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/switchMap';
//import { switchMap } from "rxjs/internal/operators/switchMap";
//import { map, switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth : AuthService, private userService: UserService) { }

  canActivate(): Observable<any>{
        return  this.auth.user$.pipe(map(user=> 
            this.userService.get(user.uid)
          ))
          
  }

  // canActivate(): Observable<boolean> {
  //   return this.auth.user$.pipe(
  //     switchMap((user:any) => this.userService.get(user.uid)).pipe(
  //       map((appUser:any)=>appUser.isAdmin))
      
      
  //   );
  
}
