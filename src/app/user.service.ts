//import { FirebaseObjectObservable } from 'angularfire2/database';
//import { FirebaseObjectObservable } from '@angular/fire/database';


import { AppUser } from './models/app-user';

import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db :AngularFireDatabase) { }

  save(user:firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name:user.displayName,
      email:user.email
    });
  }

  get(uid : String) :Observable <any>  {

    return this.db.object('/users/'+ uid).valueChanges();

  }
}
