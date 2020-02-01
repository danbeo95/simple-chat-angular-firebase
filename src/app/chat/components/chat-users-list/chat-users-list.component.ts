import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-chat-users-list',
  templateUrl: './chat-users-list.component.html',
  styleUrls: ['./chat-users-list.component.scss']
})
export class ChatUsersListComponent implements OnInit {
  @Input() users: Array<User> = [];
  @Input() activeUid = '';
  @Output() selectUser: EventEmitter<User> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  onClickUser(user: User) {
    this.selectUser.emit(user);
  }
}
