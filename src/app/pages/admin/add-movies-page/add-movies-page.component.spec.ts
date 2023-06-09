import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviesPageComponent } from './add-movies-page.component';

describe('AddMoviesPageComponent', () => {
  let component: AddMoviesPageComponent;
  let fixture: ComponentFixture<AddMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMoviesPageComponent]
    });
    fixture = TestBed.createComponent(AddMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
