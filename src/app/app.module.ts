import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  FormsModule,
  ReactiveFormsModule

} from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';

import { MaterialModule } from './shared/material.module';


import { LoginComponent } from './core/auth/login/login.component';
import { ToasterService } from './shared/services/toaster.service';
import { RegisterComponent } from './core/auth/register/register.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
