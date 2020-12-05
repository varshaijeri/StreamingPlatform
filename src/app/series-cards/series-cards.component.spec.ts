import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCardComponent } from './series-cards.component';

describe('AfficheSerieComponent', () => {
  let component: SeriesCardComponent;
  let fixture: ComponentFixture<SeriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
