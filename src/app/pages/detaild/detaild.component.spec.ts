import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildComponent } from './detaild.component';

describe('DetaildComponent', () => {
  let component: DetaildComponent;
  let fixture: ComponentFixture<DetaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
