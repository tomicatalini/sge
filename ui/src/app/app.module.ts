import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonaComponent } from './core/components/persona/tabla-persona/tabla-persona.component';
import { TablaComponent } from './shared/component/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPersonaComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
