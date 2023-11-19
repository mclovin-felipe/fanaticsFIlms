import { TestBed } from '@angular/core/testing';
import { FingerprintService } from './fingerprint.service';

describe('FingerprintService', () => {
  let service: FingerprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FingerprintService], // Agrega el servicio a los providers del módulo de pruebas
      // Aquí puedes importar otros módulos necesarios para las pruebas si los hay
      // imports: [ OtrosMódulosNecesarios ],
    });
    service = TestBed.inject(FingerprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Agrega más pruebas para tu servicio aquí si es necesario
});