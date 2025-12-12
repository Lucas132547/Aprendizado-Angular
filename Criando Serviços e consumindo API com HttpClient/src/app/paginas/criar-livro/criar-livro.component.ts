import { Component } from '@angular/core';
import { LivrosService } from '../../services/livros.service';
import { Route, Router } from '@angular/router';
import { Livro } from '../../componentes/livro/livro';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-criar-livro',
  imports: [FormularioComponent],
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css'
})
export class CriarLivroComponent {

  constructor(private livroService: LivrosService, private router: Router) {}

  criarLivro(livro: Livro) {
    this.livroService.adicionarLivro(livro).subscribe(() => {
      this.router.navigate(['/lista-livros'])
    })
  }
}
