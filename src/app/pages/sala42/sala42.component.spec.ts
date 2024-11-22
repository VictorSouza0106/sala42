import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sala42Component } from './sala42.component';

describe('Sala42Component', () => {
  let component: Sala42Component;
  let fixture: ComponentFixture<Sala42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sala42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sala42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
