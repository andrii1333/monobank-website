import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvantagesComponent } from './advantages/advantages.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InstructionComponent } from './instruction/instruction.component';
import { OrderComponent } from './order/order.component';
import { PlansComponent } from './plans/plans.component';
import { TakephoneComponent } from './takephone/takephone.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TakephoneComponent,
    CabinetComponent,
    AdvantagesComponent,
    InstructionComponent,
    PlansComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
