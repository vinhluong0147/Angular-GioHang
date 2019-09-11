import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemGioHangComponent } from './item-gio-hang/item-gio-hang.component';

@NgModule({
  declarations: [ItemGioHangComponent],
  imports: [
    CommonModule, ItemGioHangComponent
  ]
})
export class GioHangModule { }
