import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGioHangComponent } from './item-gio-hang.component';

describe('ItemGioHangComponent', () => {
  let component: ItemGioHangComponent;
  let fixture: ComponentFixture<ItemGioHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGioHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
