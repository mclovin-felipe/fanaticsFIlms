import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CorazonComponent } from './corazon.component';

describe('CorazonComponent', () => {
  let component: CorazonComponent;
  let fixture: ComponentFixture<CorazonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [/* Remove CorazonComponent from declarations */],
      imports: [/* Add necessary imports here */],
    }).compileComponents();

    fixture = TestBed.createComponent(CorazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});