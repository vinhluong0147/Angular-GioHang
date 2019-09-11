import { Component, OnInit } from '@angular/core';
import { ItemSanPham } from '../Commons/models/item';
import { CartItem } from '../Commons/models/cart-item';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {
  danhSachSanPham: Array<ItemSanPham> = [
    {
      id: 1,
      name: 'Oppo R1',
      image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
      description: 'Sản phẩm của china',
      price: 450,
      inventory: 10,
      rating: 3
  },
  {
      id: 2,
      name: 'Samsung Galaxy Note 9',
      // tslint:disable-next-line:max-line-length
      image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
      description: 'Sản phẩm của Hàn Quốc',
      price: 200,
      inventory: 15,
      rating: 5
  }, {
      id: 3,
      name: 'Iphone XS',
      image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
      description: 'Sản phẩm của US',
      price: 600,
      inventory: 20,
      rating: 4
  }
  ];
  gioHang: Array<CartItem> = [
  ];

  constructor() { }

  ngOnInit() {
  }

  ThemSanPham(sanPham: ItemSanPham) {
    const index = this.gioHang.findIndex(item => item.sanPham.id === sanPham.id);
    if (index === -1) {
      const cartItem = {
        sanPham: { ...sanPham },
        quantity: 1
      };
      return this.gioHang.push(cartItem);
    }
    this.gioHang[index].quantity++;
  }

  tinhTongTien(): number {
    let tongTien = 0;
    for (const item of this.gioHang) {
      tongTien += item.quantity * item.sanPham.price;
    }
    return tongTien;
  }
  giamSoLuong(sanPham: ItemSanPham): any {
    const index = this.gioHang.findIndex(item => item.sanPham.id === sanPham.id);
    if (this.gioHang[index].quantity === 1) {
      this.gioHang.splice(index, 1);
    }
    this.gioHang[index].quantity--;

  }

  xoaSanPham(sanPham: ItemSanPham): any {
    const index = this.gioHang.findIndex(item => item.sanPham.id === sanPham.id);
    if (index !== -1) {
      this.gioHang.splice(index, 1);
    }
  }

  clearRoHang(): any {
    this.gioHang = [];
  }
}
