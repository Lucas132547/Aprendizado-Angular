import { Component } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { GeneroLiterarioComponent } from './components/genero-literario/genero-literario.component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, FooterComponent, ListaLivrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organo';
}
