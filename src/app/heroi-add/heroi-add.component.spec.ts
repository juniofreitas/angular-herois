import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiAddComponent } from './heroi-add.component';

describe('HeroiAddComponent', () => {
  let component: HeroiAddComponent;
  let fixture: ComponentFixture<HeroiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
