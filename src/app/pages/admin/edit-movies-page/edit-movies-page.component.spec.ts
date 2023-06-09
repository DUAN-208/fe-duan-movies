import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoviesPageComponent } from './edit-movies-page.component';

describe('EditMoviesPageComponent', () => {
  let component: EditMoviesPageComponent;
  let fixture: ComponentFixture<EditMoviesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMoviesPageComponent]
    });
    fixture = TestBed.createComponent(EditMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
