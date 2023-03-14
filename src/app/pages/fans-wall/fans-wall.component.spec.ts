import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansWallComponent } from './fans-wall.component';

describe('FansWallComponent', () => {
  let component: FansWallComponent;
  let fixture: ComponentFixture<FansWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
