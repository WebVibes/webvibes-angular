import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingTutorialComponent } from './hosting-tutorial.component';

describe('HostingTutorialComponent', () => {
  let component: HostingTutorialComponent;
  let fixture: ComponentFixture<HostingTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
