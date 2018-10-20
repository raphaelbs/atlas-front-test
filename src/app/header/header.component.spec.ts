import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { USER } from './../user';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find classes .header, .user, .avatar and .name', () => {
    expect(compiled.querySelector('.header')).not.toBeNull();
    expect(compiled.querySelector('.header > .user')).not.toBeNull();
    expect(compiled.querySelector('.header > .user > .avatar')).not.toBeNull();
    expect(compiled.querySelector('.header > .user > .avatar > img')).not.toBeNull();
    expect(compiled.querySelector('.header > .user > .name')).not.toBeNull();
  });

  it('should bind [user] to template', () => {
    const avatar = compiled.querySelector('.header > .user > .avatar > img');
    expect(avatar.src.match(USER.avatar)).toBeTruthy();

    const name = compiled.querySelector('.header > .user > .name');
    expect(name.textContent).toEqual(USER.name);
  });

  it('should not found .avatar src when [user] is undefined', () => {
    component.user = undefined;
    fixture.detectChanges();

    const avatar = compiled.querySelector('.header > .user > .avatar > img');
    expect(avatar.src.match(USER.avatar)).not.toBeTruthy();
  });

  it('should not found .name text when [user] is undefined', () => {
    component.user = undefined;
    fixture.detectChanges();

    const name = compiled.querySelector('.header > .user > .name');
    expect(name.textContent).toEqual('');
  });
});
