import { ProdutoService } from "./services/produto-service.js";
import { Navbar } from "./views/navbar/navbar.js";
import { ProdutoAVenda } from "./views/produtos/produtos-a-venda.js";
const navbar = new Navbar(document.querySelector("#navbar"));
navbar.render();
const cardProduto = new ProdutoAVenda(document.querySelector("#fundo-produtos"));
ProdutoService.carregaLoja().then((products) => {
    products.forEach((product) => {
        cardProduto.mostrar(product);
    });
});
