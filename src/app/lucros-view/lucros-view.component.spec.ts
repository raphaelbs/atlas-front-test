import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

import { LucrosViewComponent } from './lucros-view.component';
import { SearchBarComponent } from './../shared/search-bar/search-bar.component';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(lang);
  }
}

describe('LucrosViewComponent', () => {
  let component: LucrosViewComponent;
  let fixture: ComponentFixture<LucrosViewComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LucrosViewComponent,
        SearchBarComponent,
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        }),
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucrosViewComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain classes .lucros-view, .header, .title-sub-title, .title, .sub-title, ', () => {
    expect(compiled.querySelector('.lucros-view')).not.toBeNull();
    expect(compiled.querySelector('.lucros-view > .header')).not.toBeNull();
    expect(compiled.querySelector('.lucros-view > .header > .title-sub-title')).not.toBeNull();
    expect(compiled.querySelector('.lucros-view > .header > .title-sub-title > .title')).not.toBeNull();
    expect(compiled.querySelector('.lucros-view > .header > .title-sub-title > .sub-title')).not.toBeNull();

  });

  it('should contain [app-search-bar]', () => {
    expect(compiled.querySelector('.lucros-view > .header > app-search-bar')).not.toBeNull();
  });

  it('should contain untranslated div title', () => {
    fixture.detectChanges();
    const div = compiled.querySelector('.lucros-view > .header > .title-sub-title > .title');
    expect(div.textContent).toBe('lucros-view.view-title');
  });

  it('should contain untranslated div sub-title', () => {
    fixture.detectChanges();
    const div = compiled.querySelector('.lucros-view > .header > .title-sub-title > .sub-title');
    expect(div.textContent).toBe('lucros-view.view-description');
  });
});
