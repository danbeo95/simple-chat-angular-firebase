import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import { ChatUsersListComponent } from './components/chat-users-list/chat-users-list.component';


const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: ':id', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
