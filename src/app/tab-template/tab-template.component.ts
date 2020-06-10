import { Component, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-tab-template',
  templateUrl: 'tab-template.component.html',
})
export class TabTemplateComponent {
  @Output() submit: EventEmitter = new EventEmitter();
}
