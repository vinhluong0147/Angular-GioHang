import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { ItemGioHangComponent } from './gio-hang/item-gio-hang/item-gio-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    GioHangComponent,
    ItemGioHangComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
