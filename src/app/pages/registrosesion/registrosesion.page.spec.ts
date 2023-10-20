import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrosesionPage } from './registrosesion.page';

describe('RegistrosesionPage', () => {
  let component: RegistrosesionPage;
  let fixture: ComponentFixture<RegistrosesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrosesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
