import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   user$ :Observable<firebase.User> ;

  constructor(private afAuth : AngularFireAuth, private route:ActivatedRoute ) { 
    
    this.user$=afAuth.authState;
    // console.log(this.user$)
  }

  login(){
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/' ;
    localStorage.setItem('returnUrl',returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut();
    
  }
}
