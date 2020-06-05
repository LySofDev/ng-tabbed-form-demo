import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gamma-form',
  templateUrl: './gamma-form.component.html',
  styleUrls: ['./gamma-form.component.scss'],
})
export class GammaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Gamma Form mounting');
  }

  ngOnDestroy(): void {
    console.log('Gamma Form unmounting');
  }
}
