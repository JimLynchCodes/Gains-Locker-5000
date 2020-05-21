import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPositionsTableComponent } from './current-positions-table/current-positions-table.component';
import { CashHudComponent } from './cash-hud/cash-hud.component';
import { ExitsTableComponent } from './exits-table/exits-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentPositionsTableComponent,
    CashHudComponent,
    ExitsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
