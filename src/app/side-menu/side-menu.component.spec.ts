import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MENU } from './../menu';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SideMenuComponent } from './side-menu.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenuComponent,
        SideMenuItemComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find classes .side-menu, .img-container, .menu-container and .spacing', () => {
    expect(compiled.querySelector('.side-menu')).not.toBeNull();
    expect(compiled.querySelector('.side-menu > .img-container')).not.toBeNull();
    expect(compiled.querySelector('.side-menu > .img-container img')).not.toBeNull();
    expect(compiled.querySelector('.side-menu .menu-container')).not.toBeNull();
    expect(compiled.querySelector('.side-menu .menu-container > .spacing')).not.toBeNull();
  });

  it('should contain menu array', () => {
    expect(component.menu).toEqual(MENU);
  });

  it('should render [app-side-menu-item]', () => {
    expect(compiled.querySelector('.side-menu .menu-container app-side-menu-item')).not.toBeNull();
  });

  it('should not found [app-side-menu-item] when property menu is undefined', () => {
    component.menu = undefined;
    fixture.detectChanges();
    expect(compiled.querySelector('.side-menu .menu-container app-side-menu-item')).toBeNull();
  });
});
