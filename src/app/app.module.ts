import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';
import { GridSystemTestComponent } from './grid-system-test/grid-system-test.component';
import { CardFormsComponent } from './card-forms/card-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    GridSystemTestComponent,
    CardFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
