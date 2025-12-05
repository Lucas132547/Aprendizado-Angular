import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem-erro',
  imports: [CommonModule],
  templateUrl: './mensagem-erro.component.html',
  styleUrl: './mensagem-erro.component.css'
})
export class MensagemErroComponent {
  control = input<FormControl>();
}
