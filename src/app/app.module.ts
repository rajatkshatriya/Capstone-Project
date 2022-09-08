import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login-Details/login-component';
import { LoginServiceComponent } from './Services/login-component-service';
import { AngularMaterial} from './Angular Material/angular-material';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './Dashboard/dashboard-component';
import { SignupComponent } from './Register Reactive form Approach/create-register';
import { ReactiveDemoApproach } from './Reactive form/reactive-from-approach';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashBoardComponent,SignupComponent,ReactiveDemoApproach
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
    ReactiveFormsModule 
  ],
  exports:[
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
     MatSelectModule
],
  providers: [LoginServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
