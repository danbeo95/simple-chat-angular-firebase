import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  loginWithEmail(email: string, passowrd: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, passowrd);
  }
  registerWithEmail(email: string, passowrd: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, passowrd);
  }
}
