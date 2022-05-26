import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakephoneComponent } from './takephone.component';

describe('TakephoneComponent', () => {
  let component: TakephoneComponent;
  let fixture: ComponentFixture<TakephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
