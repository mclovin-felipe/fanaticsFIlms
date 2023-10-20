import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async initStorage() {
    await this.storage.create();
  }

  async guardarDato(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async obtenerDato(key: string) {
    return this.storage.get(key);
  }

  async eliminarDato(key: string) {
    await this.storage.remove(key);
  }
}