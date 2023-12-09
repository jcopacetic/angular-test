import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthCoreModule } from "@angular-test/common/common-services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
