import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('popover') popover: PopoverController;
  userUid: string = '';
  segment = 'chats';
  users = [
    {id: '5U73sg1sQoRO5rGilKNxWi9g0Ig', name: 'Edison', photo: 'https://res.cloudinary.com/dhxu7loe5/image/upload/v1701450385/Edison_mlnjc9.jpg'},
    {id: 'vCCRxtfo76SNiojU0v80vDY2jPW2', name: 'Estela', photo: 'https://res.cloudinary.com/dhxu7loe5/image/upload/v1701450385/WhatsApp_Image_2023-12-01_at_12.03.17_o5u58a.jpg'},
  ];
  chatRooms = [
    {id: '5U73sg1sQoRO5rGilKNxWi9g0Ig1', name: 'Edison', photo: 'https://res.cloudinary.com/dhxu7loe5/image/upload/v1701450385/Edison_mlnjc9.jpg'},
    {id: 'vCCRxtfo76SNiojU0v80vDY2jPW2', name: 'Estela', photo: 'https://res.cloudinary.com/dhxu7loe5/image/upload/v1701450385/WhatsApp_Image_2023-12-01_at_12.03.17_o5u58a.jpg'},
  ];

  constructor(
    private router: Router,
  ) { }


  getChat(item: any) {
    this.router.navigate(['/', 'home', 'chats', item?.id]);
  }


}