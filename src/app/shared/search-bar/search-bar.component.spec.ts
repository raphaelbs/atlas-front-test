import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(lang);
  }
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
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
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain classes .search-bar and .search-button', () => {
    expect(compiled.querySelector('.search-bar')).not.toBeNull();
    expect(compiled.querySelector('.search-bar > .search-button')).not.toBeNull();
    expect(compiled.querySelector('.search-bar > .search-button > img')).not.toBeNull();
  });

  it('should contain search icon', () => {
    const img = compiled.querySelector('.search-bar > .search-button > img');
    expect(img.src.match('assets/ic_search_24px.svg')).toBeTruthy();
  });

  it('should fire back the input text through @Output [searchEvent]', () => {
    component.searchInput = 'search text';
    fixture.detectChanges();

    let outputText: string;
    component.searchEvent.subscribe(value => outputText = value);

    const button = fixture.debugElement.query(By.css('.search-bar > .search-button'));
    button.triggerEventHandler('click', null);

    expect(outputText).toBe('search text');
  });

  it('should contain untranslated default text', () => {
    fixture.detectChanges();
    const input = compiled.querySelector('.search-bar > input');
    expect(input.placeholder).toBe('shared-module.table-search-input');
  });
});
