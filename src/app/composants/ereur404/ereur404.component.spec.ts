import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ereur404Component } from './ereur404.component';

describe('Ereur404Component', () => {
  let component: Ereur404Component;
  let fixture: ComponentFixture<Ereur404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ereur404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ereur404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
