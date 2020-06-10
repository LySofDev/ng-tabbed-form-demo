import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AlphaFormComponent } from './alpha-form/alpha-form.component';
import { BetaFormComponent } from './beta-form/beta-form.component';
import { GammaFormComponent } from './gamma-form/gamma-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabTemplateComponent } from './tab-template/tab-template.component';
import { ModuleTemplateComponent } from './module-template/module-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaFormComponent,
    BetaFormComponent,
    GammaFormComponent,
    TabTemplateComponent,
    ModuleTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
