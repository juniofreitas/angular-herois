import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetalheComponent } from './hero-detalhe.component';

describe('HeroDetalheComponent', () => {
  let component: HeroDetalheComponent;
  let fixture: ComponentFixture<HeroDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
