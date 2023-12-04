import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {

  @Input() chat: any;
  @Input() senderId: any;
  constructor(private sharedDataService: SharedDataService) { }
  recipientId = this.sharedDataService.sharedVariable;

  ngOnInit() {}

}
