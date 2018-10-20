import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucrosViewComponent } from './lucros-view.component';

describe('LucrosViewComponent', () => {
  let component: LucrosViewComponent;
  let fixture: ComponentFixture<LucrosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucrosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucrosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
