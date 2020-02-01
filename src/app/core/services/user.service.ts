import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/user';
import { COLLECTIONS } from 'src/app/shared/constants';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection;
  constructor(
    private afStore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.usersCollection = this.afStore.collection<User>(COLLECTIONS.USERS);
  }

  addUser(user: User) {
    return this.usersCollection.doc(user.uid).set(user.toDoc());
  }
  getAllUsers() {
    return this.usersCollection.snapshotChanges().pipe(
      map(users => {
        return users.map(user => {
          const data = user.payload.doc.data();
          return new User(data.uid, data.email);
        });
      })
    );
  }
  getCurrentUser() {
    return this.afAuth.user.pipe(take(1));
  }
}
