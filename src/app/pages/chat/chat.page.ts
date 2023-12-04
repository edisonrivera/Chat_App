import { Component, OnInit } from '@angular/core';
import {MessageService} from 'src/app/services/chat.service';
import { SharedDataService } from 'src/app/services/share-data.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage  implements OnInit{
  name: string = 'Volver';
  isLoading = false;
  currentUserId = "vCCRxtfo76SNiojU0v80vDY2jPW2";
  chats = [
    {id: '5U73sg1sQoRO5rGilKNxWi9g0Ig1', sender: 1, message: 'hikkll'},
    {id: 'vCCRxtfo76SNiojU0v80vDY2jPW2', sender: 2, message: 'hi there!'},
  ];
  // CAMBIOS PARA EL CHAT
  recipientId:string;
  senderId: string;
  messageText: string = '';
  messages: any[] = [];

  constructor(private messageService: MessageService, private sharedDataServire: SharedDataService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    let idUrl = window.location.pathname.split('/')
    this.senderId = idUrl[3]
    //Definir remitente
    for (const chat of this.chats) {
      if (chat.id !== this.senderId) {
       this.recipientId = chat.id;
      }
    }

    this.sharedDataServire.sharedVariable = this.recipientId;

    this.messageService.getMessagesBetweenUsers(this.senderId, this.recipientId).subscribe((messages) => {
    this.messages = messages;
    console.log(this.messages);
      
      
    });
  }

  sendMessage() {
    let idUrl = window.location.pathname.split('/')
    this.senderId= idUrl[3]
    //Definir remitente
    for (const chat of this.chats) {
      if (chat.id !== this.senderId) {
       this.recipientId = chat.id;
      }
    }
    if (this.messageText.trim() !== '') {
      this.messageService.sendMessage(this.messageText, this.recipientId, this.senderId);
      this.chats.push({id: this.senderId, sender: 1, message: this.messageText.trim()});
      this.messageText = '';
    }
  }
}
