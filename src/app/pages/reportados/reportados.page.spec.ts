import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportadosPage } from './reportados.page';

describe('ReportadosPage', () => {
  let component: ReportadosPage;
  let fixture: ComponentFixture<ReportadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
