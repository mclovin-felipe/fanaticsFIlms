import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilistaPage } from './milista.page';

describe('MilistaPage', () => {
  let component: MilistaPage;
  let fixture: ComponentFixture<MilistaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(MilistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
