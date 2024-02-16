import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudTestModule } from './crud-test/crud-test.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudTestModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({timeOut:3000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
