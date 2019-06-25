import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSystemTestComponent } from './grid-system-test.component';

describe('GridSystemTestComponent', () => {
  let component: GridSystemTestComponent;
  let fixture: ComponentFixture<GridSystemTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSystemTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSystemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
