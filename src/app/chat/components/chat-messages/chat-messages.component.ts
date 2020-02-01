import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/shared/models';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @Input() messages: Array<Message> = [];
  @Input() isLoading: boolean;
  @Input() currentUid: string;
  constructor() { }

  ngOnInit() {
  }

}
