import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { UserProvider } from './provider/user-provider.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    UserProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
