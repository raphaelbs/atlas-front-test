import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuItemComponent } from './side-menu-item.component';
import { MENU } from './../../menu';

describe('SideMenuItemComponent', () => {
  let component: SideMenuItemComponent;
  let fixture: ComponentFixture<SideMenuItemComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuItemComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find classes .side-menu-item, .icon and .description', () => {
    expect(compiled.querySelector('div.side-menu-item')).not.toBeNull();
    expect(compiled.querySelector('div.side-menu-item > div.icon')).not.toBeNull();
    expect(compiled.querySelector('div.side-menu-item > div.description')).not.toBeNull();
  });

  it('should bind @Input [item] to template', () => {
    component.item = MENU[0];
    fixture.detectChanges();

    const img = compiled.querySelector('div.side-menu-item > div.icon > img');
    expect(img.src.match(MENU[0].icon)).toBeTruthy();
    expect(img.alt).toEqual(MENU[0].description);

    const description = compiled.querySelector('div.side-menu-item > div.description');
    expect(description.textContent).toEqual(MENU[0].description);
  });
});
