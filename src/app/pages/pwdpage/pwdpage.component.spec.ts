import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdpageComponent } from './pwdpage.component';

describe('PwdpageComponent', () => {
  let component: PwdpageComponent;
  let fixture: ComponentFixture<PwdpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
