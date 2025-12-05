import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  nome = input<string>('');
  telefone = input<string>('');
  id = input<number | null>(null);
  avatar = input<string| ArrayBuffer>('');
}
