import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchText when onInputChange is called', () =>  {

    const value = 'iPhone 15'
    const event = { target: {value}} as unknown as Event;
    const spy = spyOn(component.searchText, 'emit');

    component.onInputChange(event);

    expect(spy).toHaveBeenCalledWith(value);
  })
});
