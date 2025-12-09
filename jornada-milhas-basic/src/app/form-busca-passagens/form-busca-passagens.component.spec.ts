import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaPassagensComponent } from './form-busca-passagens.component';

describe('FormBuscaPassagensComponent', () => {
  let component: FormBuscaPassagensComponent;
  let fixture: ComponentFixture<FormBuscaPassagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuscaPassagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuscaPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
