import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {

  isEspecial = false;
  mostraClass=''
  numero = 0;

  produtos = [

    {id:1, nome: 'Arroz', preco:4},
    {id:2, nome: 'Feijao', preco:7},
    {id:3, nome: 'Massa', preco:3},
    {id:4, nome: 'Leite', preco:5},
  ]

  numerosLista: Number[] = [];

  alterarEspecial(){
    this.isEspecial = !this.isEspecial;

  }

  incrementar(){
    this.numero++;
  }

  addNumberInList(){
    this.numerosLista.push(this.numero);

  }



}
