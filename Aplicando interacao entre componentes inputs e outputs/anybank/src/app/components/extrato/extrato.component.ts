import { Component, input } from '@angular/core';
import { TransacoesComponent } from "./transacoes/transacoes.component";
import { Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TransacoesComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();
}
