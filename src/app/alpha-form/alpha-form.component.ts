import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alpha-form',
  templateUrl: './alpha-form.component.html',
  styleUrls: ['./alpha-form.component.scss'],
})
export class AlphaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Alpha Form mounting');
    this.formGroup = new FormGroup({
      one: new FormControl(),
      two: new FormControl(),
    });
  }

  ngOnDestroy(): void {
    console.log('Alpha Form unmounting');
  }
}
