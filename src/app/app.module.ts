import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login-Details/login-component';
import { AngularMaterial} from './Angular Material/angular-material';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './Dashboard/dashboard-component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ValidateSignup } from './Validate Signup/validate-signup-service';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './Signup Form/signup-form';
import { LoginServiceComponent } from './Services/login-service-component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashBoardComponent,SignupComponent, PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule ,
    MatCardModule
  ],
  exports:[
     
],
  providers: [LoginServiceComponent,ValidateSignup],
  bootstrap: [AppComponent]
})
export class AppModule { }
