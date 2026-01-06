import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service'; // Import this
import { depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // 1. Create variables to hold the data
  promocoes: Promocao[] = [];
  depoimentos: depoimento[] = [];

  // 2. Inject both services
  constructor(
    private servicoPromocao: PromocaoService,
    private servicoDepoimento: DepoimentosService
  ) {}

  ngOnInit(): void {
    // 3. Get Promotions
    this.servicoPromocao.listar().subscribe((resposta) => {
      this.promocoes = resposta;
    });

    // 4. Get Testimonials
    this.servicoDepoimento.listarDepoimentos().subscribe((resposta) => {
      this.depoimentos = resposta;
    });
  }
}