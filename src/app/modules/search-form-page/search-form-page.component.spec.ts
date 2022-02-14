import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormPageComponent } from './search-form-page.component';

describe('SearchFormPageComponent', () => {
  let component: SearchFormPageComponent;
  let fixture: ComponentFixture<SearchFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
