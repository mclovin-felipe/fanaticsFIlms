import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { SeriePage } from './serie.page';
import { DatabaseService } from 'src/app/services/db.service';

describe('SeriePage', () => {
  let component: SeriePage;
  let fixture: ComponentFixture<SeriePage>;

  beforeEach(async () => {
    const activatedRouteMock = {
      paramMap: of({ get: () => 'mockedParam' }),
      queryParams: of({}),
    };

    const routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    const databaseServiceMock = {
      comentarios: of([]),
      getComentariosSerie: jasmine.createSpy('getComentariosSerie').and.returnValue(Promise.resolve([])),
    };

    await TestBed.configureTestingModule({
      declarations: [SeriePage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock },
        { provide: DatabaseService, useValue: databaseServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data on ngOnInit', async () => {
    await component.ngOnInit();

    // Resto de la prueba...

    // No es necesario espiar getComentariosSerie aquí, ya que ya ha sido espiado en la configuración general.
  });

  // Puedes agregar más pruebas para SeriePage aquí si es necesario
});
