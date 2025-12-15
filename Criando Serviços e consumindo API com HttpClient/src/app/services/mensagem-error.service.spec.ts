import { TestBed } from '@angular/core/testing';

import { MensagemErrorService } from './mensagem-error.service';

describe('MensagemErrorService', () => {
  let service: MensagemErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
