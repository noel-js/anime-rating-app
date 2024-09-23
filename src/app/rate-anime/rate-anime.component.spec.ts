import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAnimeComponent } from './rate-anime.component';

describe('RateAnimeComponent', () => {
  let component: RateAnimeComponent;
  let fixture: ComponentFixture<RateAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
