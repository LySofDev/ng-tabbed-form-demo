import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gamma-form',
  templateUrl: './gamma-form.component.html',
  styleUrls: ['./gamma-form.component.scss'],
})
export class GammaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Gamma Form mounting');
    this.formGroup = new FormGroup({
      one: new FormControl(),
      two: new FormControl(),
    });
  }

  ngOnDestroy(): void {
    console.log('Gamma Form unmounting');
  }
}
