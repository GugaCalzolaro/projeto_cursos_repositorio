import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { MeioComponent } from './meio/meio.component';
import { BaixoComponent } from './baixo/baixo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MeioComponent,
    BaixoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
