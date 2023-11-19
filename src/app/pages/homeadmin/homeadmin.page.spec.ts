import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeadminPage } from './homeadmin.page';

describe('HomeadminPage', () => {
  let component: HomeadminPage;
  let fixture: ComponentFixture<HomeadminPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeadminPage],
      // Puedes agregar aquí tus imports y providers necesarios para las pruebas
    }).compileComponents();

    fixture = TestBed.createComponent(HomeadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Otras pruebas que puedas tener
});