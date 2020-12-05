import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesContentComponent } from './series-content.component';

describe('DetailSerieComponent', () => {
  let component: SeriesContentComponent;
  let fixture: ComponentFixture<SeriesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
