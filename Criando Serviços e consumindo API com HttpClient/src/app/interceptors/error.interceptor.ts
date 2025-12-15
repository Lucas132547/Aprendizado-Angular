import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {MensagemErrorService } from '../services/mensagem-error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const mensagemErrorService = inject(MensagemErrorService);
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const mensagemErro = obterMensagemDeErro(error.status);
      mensagemErrorService.mostrarMensagemDeErro(mensagemErro);
      return throwError(() => error);
    })
  )
};

function obterMensagemDeErro(status: number): string {
  const mensagensDeErro: Record<number, string> = {
    400: 'Requisição inválida. Verifique os dados enviados.',
    401: 'Não autorizado. Por favor, faça login.',
    403: 'Acesso negado. Você não tem permissão para acessar este recurso.',
    404: 'Recurso não encontrado. Verifique o endereço e tente novamente.',
    500: 'Erro interno do servidor. Tente novamente mais tarde.',
    0: 'Erro de rede - Não foi possivel conectar ao servidor.'
  }
  return mensagensDeErro[status] || 'Ops, Ocorreu um erro. Por favor, tente novamente mais tarde.';
}