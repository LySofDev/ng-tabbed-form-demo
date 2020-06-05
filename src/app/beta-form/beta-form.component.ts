import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-beta-form',
  templateUrl: './beta-form.component.html',
  styleUrls: ['./beta-form.component.scss'],
})
export class BetaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Beta Form mounting');
    this.formGroup = new FormGroup({
      one: new FormControl(),
      two: new FormControl(),
    });
  }

  ngOnDestroy(): void {
    console.log('Beta Form unmounting');
  }
}
