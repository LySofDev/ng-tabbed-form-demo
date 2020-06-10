import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-tab-multi-form-demo';

  formGroup: FormGroup;

  get alphaFormGroup(): FormGroup {
    return this.formGroup.get('alpha') as FormGroup;
  }

  get betaFormGroup(): FormGroup {
    return this.formGroup.get('beta') as FormGroup;
  }

  get gammaFormGroup(): FormGroup {
    return this.formGroup.get('gamma') as FormGroup;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      alpha: new FormGroup({
        one: new FormControl(),
        two: new FormControl(),
      }),
      beta: new FormGroup({
        one: new FormControl(),
        two: new FormControl(),
      }),
      gamma: new FormGroup({
        one: new FormControl(),
        two: new FormControl(),
      }),
    });
  }

  onSubmit(formName: string): void {
    console.log('User has submitted form', formName);
    console.log('The state of the form is', this.formGroup.get(formName).value);
  }
}
