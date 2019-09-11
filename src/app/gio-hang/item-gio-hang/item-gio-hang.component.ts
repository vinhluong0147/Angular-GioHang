import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemSanPham } from 'src/app/Commons/models/item';

@Component({
  selector: 'app-item-gio-hang',
  templateUrl: './item-gio-hang.component.html',
  styleUrls: ['./item-gio-hang.component.css']
})
export class ItemGioHangComponent implements OnInit {
  @Input() sanPham: ItemSanPham;
  @Output() emitSanPham = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  HandleEmit(): void {
    this.emitSanPham.emit(this.sanPham);
  }

}
