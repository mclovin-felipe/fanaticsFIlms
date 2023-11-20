// native-biometric-wrapper.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NativeBiometricWrapper {
  // ...

  async isAvailable(): Promise<any> {
    // Implementa la lógica necesaria aquí
  }
}
