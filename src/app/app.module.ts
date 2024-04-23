import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';


@NgModule({
  
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule
  ],
  providers: []
  
})
export class AppModule { }
