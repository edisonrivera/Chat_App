// message.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(
    private firestore: AngularFirestore,
  ) { }

  async sendMessage(text: string, senderId: string, recipientId: string) {

    try {
      // Destinatario
      const senderUid = senderId;


      if (senderUid) {
        const messageData = {
          senderUid: senderId,
          recipientUid: recipientId,
          text: text,
          timestamp: new Date(),
        };

        await this.firestore.collection('messages').add(messageData);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }

  getMessagesBetweenUsers(user1Uid: string, user2Uid: string) {
    return this.firestore
      .collection('messages', (ref) =>
        ref
          .where('senderUid', 'in', [user1Uid, user2Uid])
          .where('recipientUid', 'in', [user1Uid, user2Uid])
          .orderBy('timestamp')
      )
      .valueChanges();
  }
}
