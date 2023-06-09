import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMovieComponent } from './banner-movie.component';

describe('BannerMovieComponent', () => {
  let component: BannerMovieComponent;
  let fixture: ComponentFixture<BannerMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerMovieComponent]
    });
    fixture = TestBed.createComponent(BannerMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
