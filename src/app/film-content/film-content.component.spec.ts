import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFilmComponent } from './film-content.component';

describe('DetailFilmComponent', () => {
  let component: DetailFilmComponent;
  let fixture: ComponentFixture<DetailFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
