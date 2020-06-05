import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alpha-form',
  templateUrl: './alpha-form.component.html',
  styleUrls: ['./alpha-form.component.scss'],
})
export class AlphaFormComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() formGroup: FormGroup;

  ngOnInit(): void {
    console.log('Alpha Form mounting');
  }

  ngOnDestroy(): void {
    console.log('Alpha Form unmounting');
  }
}
