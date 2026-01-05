import { Injectable } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';



@Injectable({
  providedIn: 'root'
})

export class ContatoService {

  private contatos : Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", email: "a@b.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", email: "a@b.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", email: "a@b.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", email: "a@b.com"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", email: "a@b.com"},
    {"id": 6, "nome": "Cláudia", "telefone": "31 176437098", email: "a@b.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", email: "a@b.com"},
  ]

  constructor() { 
    const localStorageContatosString = localStorage.getItem('contatos');
    const localStorageContatos = localStorageContatosString ? JSON.parse(localStorageContatosString) : null;
    
    this.contatos = localStorageContatos || this.contatos;

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
