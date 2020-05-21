import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitsTableComponent } from './exits-table.component';

describe('ExitsTableComponent', () => {
  let component: ExitsTableComponent;
  let fixture: ComponentFixture<ExitsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
