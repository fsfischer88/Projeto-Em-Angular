import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html'
 
})
export class ListarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService){}

  public produtos : Produto[] | any;

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos
        },
        error => console.log('Erro ao obter a lista de produtos => ' + error)

      )
  }


}
