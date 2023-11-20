// fingerprint.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { NativeBiometricWrapper } from './native-biometric-wrapper.service';
import { FingerprintService } from './fingerprint.service';

describe('FingerprintService', () => {
  let service: FingerprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeBiometricWrapper, FingerprintService],
    });
    service = TestBed.inject(FingerprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Agrega más pruebas para tu servicio aquí si es necesario
});
