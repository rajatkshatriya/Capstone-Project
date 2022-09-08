import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

//



@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule ,
    MatSelectModule,
    MatInputModule
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule ,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: []
})
export class AngularMaterial{ }