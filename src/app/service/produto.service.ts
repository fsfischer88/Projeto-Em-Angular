import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient ) {}

    protected UrlBackEnd : String = "//http://localhost:3000";

    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlBackEnd+"produtos");

    }
}