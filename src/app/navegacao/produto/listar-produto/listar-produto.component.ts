import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html'
 
})
export class ListarProdutoComponent implements OnInit {

  public produtos : Produto[];

  ngOnInit() {
    
  }


}
