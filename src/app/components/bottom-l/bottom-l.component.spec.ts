import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogContentExample, DialogContentExampleDialog } from './bottom-l.component'; // Importa los componentes que estás probando

describe('BottomLComponent', () => {
  let component: any; // Componente principal que se está probando
  let fixture: ComponentFixture<any>; // Fixture para el componente principal

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // No declarar los componentes aquí
      imports: [
        IonicModule.forRoot(),
        MatDialogModule,
        MatButtonModule,
        RouterTestingModule,
      ],
      providers: [MatDialog /*, Otros servicios si es necesario */], // Proveedores necesarios para los componentes
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExample); // Crear el componente directamente
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agregar más pruebas si es necesario para DialogContentExample o DialogContentExampleDialog
});