import { Component, computed, input } from '@angular/core';
import { Transacao } from '../../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacoes',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  transacao = input.required<Transacao>();

  valor = computed(() => {
    if (this.transacao().tipo === 'Depósito') {
      return `+${this.transacao().valor}`;
    } else {
      return `-${this.transacao().valor}`;
    }
  })
}
