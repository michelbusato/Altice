import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiApiComponent } from './gui-api.component';

describe('GuiApiComponent', () => {
  let component: GuiApiComponent;
  let fixture: ComponentFixture<GuiApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
