import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashHudComponent } from './cash-hud.component';

describe('CashHudComponent', () => {
  let component: CashHudComponent;
  let fixture: ComponentFixture<CashHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
