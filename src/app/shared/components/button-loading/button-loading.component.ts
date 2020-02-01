import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-loading',
  templateUrl: './button-loading.component.html',
  styleUrls: ['./button-loading.component.scss']
})
export class ButtonLoadingComponent implements OnInit {
  @Input() text = '';
  @Input() isLoading = false;
  constructor() { }

  ngOnInit() {
  }

}
