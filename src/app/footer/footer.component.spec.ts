import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { FooterComponent } from './footer.component';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(lang);
  }
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain classes .footer, .copyright and .social-media-icons', () => {
    expect(compiled.querySelector('.footer')).not.toBeNull();
    expect(compiled.querySelector('.footer > .copyright')).not.toBeNull();
    expect(compiled.querySelector('.footer > .social-media-icons')).not.toBeNull();
  });

  it('should contain classes .facebook-url, .twitter-url, .instagram-url and .youtube-url', () => {
    const socialMediaIcons = compiled.querySelector('.footer > .social-media-icons');
    expect(socialMediaIcons.querySelector('.facebook-url')).not.toBeNull();
    expect(socialMediaIcons.querySelector('.twitter-url')).not.toBeNull();
    expect(socialMediaIcons.querySelector('.instagram-url')).not.toBeNull();
    expect(socialMediaIcons.querySelector('.youtube-url')).not.toBeNull();
  });

  it('should point to facebook page', () => {
    expect(
      compiled.querySelector('.footer > .social-media-icons > .facebook-url').href.match('footer.social-media.facebook')).toBeTruthy();
  });

  it('should point to twitter page', () => {
    expect(
      compiled.querySelector('.footer > .social-media-icons > .twitter-url').href.match('footer.social-media.twitter')).toBeTruthy();
  });

  it('should point to instagram page', () => {
    expect(
      compiled.querySelector('.footer > .social-media-icons > .instagram-url').href.match('footer.social-media.instagram')).toBeTruthy();
  });

  it('should point to youtube page', () => {
    expect(
      compiled.querySelector('.footer > .social-media-icons > .youtube-url').href.match('footer.social-media.youtube')).toBeTruthy();
  });
});
