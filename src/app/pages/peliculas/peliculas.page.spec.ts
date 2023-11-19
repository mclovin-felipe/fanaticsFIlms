import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PeliculasPage } from './peliculas.page';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from 'src/app/services/db.service';
import { BehaviorSubject } from 'rxjs';

class ActivatedRouteMock {
  private subject = new BehaviorSubject<Params>({});
  readonly paramMap = this.subject.asObservable();

  // Método para emular cambios en los parámetros de la ruta
  pushParams(params: Params) {
    this.subject.next(params);
  }
}

describe('PeliculasPage', () => {
  let component: PeliculasPage;
  let fixture: ComponentFixture<PeliculasPage>;
  let activatedRouteStub: ActivatedRouteMock;

  beforeEach(
    waitForAsync(() => {
      activatedRouteStub = new ActivatedRouteMock();

      TestBed.configureTestingModule({
        declarations: [PeliculasPage],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          // Agrega cualquier otro servicio que pueda necesitar PeliculasPage
          DatabaseService,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas para PeliculasPage aquí si es necesario
});