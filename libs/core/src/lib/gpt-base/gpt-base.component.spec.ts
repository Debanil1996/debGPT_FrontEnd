import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GptBaseComponent } from './gpt-base.component';

describe('GptBaseComponent', () => {
  let component: GptBaseComponent;
  let fixture: ComponentFixture<GptBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GptBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GptBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
