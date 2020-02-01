import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './containers/chat/chat.component';
import { ChatUsersListComponent } from './components/chat-users-list/chat-users-list.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { SharedModule } from '../shared/shared.module';
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { MessageItemComponent } from './components/message-item/message-item.component';


@NgModule({
  declarations: [ChatComponent, ChatUsersListComponent, ChatMessagesComponent, SendMessageFormComponent, MessageItemComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
