import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculasadminPage } from './peliculasadmin.page';

describe('PeliculasadminPage', () => {
  let component: PeliculasadminPage;
  let fixture: ComponentFixture<PeliculasadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeliculasadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
