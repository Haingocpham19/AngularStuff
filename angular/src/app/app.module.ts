import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThucDonComponent } from './thuc-don/thuc-don.component';
import { DsThucdonComponent } from './thuc-don/ds-thucdon/ds-thucdon.component';
import { CreateOrUpdateThucdonComponent } from './thuc-don/create-or-update-thucdon/create-or-update-thucdon.component';
import { MonAnComponent } from './mon-an/mon-an.component';
import { DsMonanComponent } from './mon-an/ds-monan/ds-monan.component';
import { CreateOrUpdateMonanComponent } from './mon-an/create-or-update-monan/create-or-update-monan.component';

import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThucDonComponent,
    DsThucdonComponent,
    CreateOrUpdateThucdonComponent,
    MonAnComponent,
    DsMonanComponent,
    CreateOrUpdateMonanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
