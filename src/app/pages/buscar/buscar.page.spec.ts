import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BuscarPage } from './buscar.page';
import { ImageListService } from '../../home/services/image-list.service';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

describe('BuscarPage', () => {
  let component: BuscarPage;
  let fixture: ComponentFixture<BuscarPage>;
  let imageListService: ImageListService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BuscarPage],
        providers: [
          // Aquí se declara el servicio ImageListService como proveedor
          ImageListService,
        ],
        imports: [
          HttpClientModule, // Agrega HttpClientModule en los imports
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPage);
    component = fixture.componentInstance;
    // Se inyecta el servicio ImageListService en la variable imageListService
    imageListService = TestBed.inject(ImageListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas para BuscarPage aquí si es necesario
});