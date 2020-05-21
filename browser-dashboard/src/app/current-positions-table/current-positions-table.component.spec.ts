import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPositionsTableComponent } from './current-positions-table.component';

describe('CurrentPositionsTableComponent', () => {
  let component: CurrentPositionsTableComponent;
  let fixture: ComponentFixture<CurrentPositionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPositionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPositionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
