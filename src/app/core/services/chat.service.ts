import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { COLLECTIONS } from 'src/app/shared/constants';
import { Message } from 'src/app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private channelsCollecion: AngularFirestoreCollection;
  constructor(
    private afStore: AngularFirestore
  ) {
    this.channelsCollecion = this.afStore.collection(COLLECTIONS.CHANNEL);
  }
  getMessagesOfChannel(channelId: string) {
    const messagesCollection = this.channelsCollecion.doc(channelId)
    .collection<Message>(COLLECTIONS.MESSAGES, ref => ref.orderBy('createAt'));
    return messagesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          return new Message(data);
        });
      })
    );
  }
  sendMessage(channelId: string, message: Message) {
    const messagesCollection = this.channelsCollecion.doc(channelId).collection<Message>(COLLECTIONS.MESSAGES);
    return messagesCollection.add(message.toDoc());
  }
  getChannelId(uid1: string, uid2: string): string {
    if (uid1 > uid2) {
      return uid2 + uid1;
    }
    return uid1 + uid2;
  }
}
