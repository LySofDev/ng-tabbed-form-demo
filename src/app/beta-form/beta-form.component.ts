import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beta-form',
  templateUrl: './beta-form.component.html',
  styleUrls: ['./beta-form.component.scss'],
})
export class BetaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Beta Form mounting');
  }

  ngOnDestroy(): void {
    console.log('Beta Form unmounting');
  }
}
