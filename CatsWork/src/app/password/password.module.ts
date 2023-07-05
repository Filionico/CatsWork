import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PasswordComponent } from './password.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  declarations: [
    PasswordComponent,
    CatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PasswordComponent]
})
export class passwordModule { }
