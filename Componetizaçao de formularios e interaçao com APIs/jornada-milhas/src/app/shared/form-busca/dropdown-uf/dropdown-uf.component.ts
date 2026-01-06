import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; // Add this
import { Observable, map, startWith } from 'rxjs'; // Add these
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefix: string = '';

  unidadesFederativas: UnidadeFederativa[] = [];
  
  // Change filteredOptions to an Observable
  filteredOptions$?: Observable<UnidadeFederativa[]>;
  
  // Create a control to listen to input changes
  myControl = new FormControl('');

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;

      // Set up the filter logic
      this.filteredOptions$ = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );
    });
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();
    return this.unidadesFederativas.filter(option =>
      option.nome.toLowerCase().includes(filterValue) || 
      option.sigla.toLowerCase().includes(filterValue)
    );
  }
}