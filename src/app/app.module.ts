import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/primeng'; // Se llama el modelo del modulo.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Se insta el @angular/animations y se importan.

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

//Router

import { app_routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,//llamar
    BrowserAnimationsModule,//llamar
    app_routing //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
