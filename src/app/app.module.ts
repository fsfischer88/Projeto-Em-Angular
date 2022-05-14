import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './navegacao/sobre/sobre.component';
import { ContatoComponent } from './navegacao/contato/contato.component';
import { APP_BASE_HREF } from '@angular/common';
import { ListarProdutoComponent } from './navegacao/produto/listar-produto/listar-produto.component';
import { CadastrarProdutoComponent } from './navegacao/produto/cadastrar-produto/cadastrar-produto.component';
import { ProdutoService } from './service/produto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    ListarProdutoComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
