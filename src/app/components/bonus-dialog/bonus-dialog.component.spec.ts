import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusDialogComponent } from './bonus-dialog.component';

describe('BonusDialogComponent', () => {
  let component: BonusDialogComponent;
  let fixture: ComponentFixture<BonusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
