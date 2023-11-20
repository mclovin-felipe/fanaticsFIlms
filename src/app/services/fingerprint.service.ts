// fingerprint.service.ts
import { Injectable } from '@angular/core';
import { NativeBiometricWrapper } from './native-biometric-wrapper.service';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private nativeBiometric: NativeBiometricWrapper) {}

  async performBiometricVerification() {
    const result = await this.nativeBiometric.isAvailable();
    console.log(result);

    // Resto del código...
  }

  // Save user's credentials
  // NativeBiometric.setCredentials({
  //   username: "username",
  //   password: "password",
  //   server: "www.example.com",
  // }).then();

  // // Delete user's credentials
  // NativeBiometric.deleteCredentials({
  //   server: "www.example.com",
  // }).then();

  // Otros métodos según sea necesario
}
