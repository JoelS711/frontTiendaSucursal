import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DataTablesModule } from 'angular-datatables';
import { SalesComponent } from './components/sales/sales.component';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    LoginComponent,
    SalesComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
