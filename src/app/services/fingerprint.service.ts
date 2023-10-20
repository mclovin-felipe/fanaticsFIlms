import { Injectable } from '@angular/core';
import { NativeBiometric, BiometryType } from 'capacitor-native-biometric';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private nativeBiometric: typeof NativeBiometric) {}

  async performBiometricVerificatin() {
    const result = await NativeBiometric.isAvailable();
    console.log(result);
    // if (!result.isAvailable) return;

    // const isFaceID = result.biometryType == BiometryType.FINGERPRINT;

    // const verified = await NativeBiometric.verifyIdentity({
    //   reason: 'For easy log in',
    //   title: 'Log in',
    //   subtitle: 'Maybe add subtitle here?',
    //   description: 'Maybe a description too?',
    // })
    //   .then(() => true)
    //   .catch(() => false);

    // if (!verified) return;

    // const credentials = await NativeBiometric.getCredentials({
    //   server: "www.example.com",
    // });
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
}
