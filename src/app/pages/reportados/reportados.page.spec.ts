import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ReportadosPage } from './reportados.page';

describe('ReportadosPage', () => {
  let component: ReportadosPage;
  let fixture: ComponentFixture<ReportadosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportadosPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ 'tuParametro': 'valor' }), // Ajusta según tus necesidades
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(ReportadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
