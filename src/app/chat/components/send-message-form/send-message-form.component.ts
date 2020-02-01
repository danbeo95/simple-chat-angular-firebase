import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent implements OnInit, OnChanges {
  @Input() isSending: boolean;
  @Output() send: EventEmitter<string> = new EventEmitter();
  messageForm: FormControl = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (!this.isSending) {
      this.messageForm.reset();
    }
  }
  onClickSend() {
    if (this.messageForm.valid) {
      this.send.emit(this.messageForm.value);
    }
  }
}
