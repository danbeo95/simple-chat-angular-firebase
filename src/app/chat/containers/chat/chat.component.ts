import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Message } from 'src/app/shared/models';
import { UserService } from 'src/app/core/services/user.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  users$: Observable<Array<User>>;
  activeUid$: BehaviorSubject<string> = new BehaviorSubject('');
  currentUid: string;
  messages: Array<Message> = [];
  isLoading: boolean;
  isSending: boolean;
  constructor(
    private userService: UserService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
    this.getCurrentUid();
    this.onUserChange();
  }
  ngOnDestroy() {
  }
  getCurrentUid() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUid = user.uid;
    });
  }
  onUserChange() {
    const messages$ = this.activeUid$.pipe(
      filter(uid => uid !== ''),
      switchMap((uid) => {
        this.isLoading = true;
        const channelId = this.chatService.getChannelId(uid, this.currentUid);
        return this.chatService.getMessagesOfChannel(channelId);
      })
    );
    messages$.subscribe(messages => {
      this.messages = messages;
      this.isLoading = false;
    });
  }
  onSelectUser(user: User) {
    this.activeUid$.next(user.uid);
  }
  onSendMessages(event: string) {
    this.isSending = true;
    const message = new Message({
      body: event,
      senderId: this.currentUid,
      receivedId: this.activeUid$.value
    });
    const channelId = this.chatService.getChannelId(this.currentUid, this.activeUid$.value);
    this.chatService.sendMessage(channelId, message).then(() => {
      this.isSending = false;
    });
  }
}
