import { Produto } from "./models/produto.js"
import { ProdutoService } from "./services/produto-service.js"
import {Navbar} from "./views/navbar/navbar.js"
import {ProdutoAVenda} from "./views/produtos/produtos-a-venda.js"

const navbar: Navbar = new Navbar(document.querySelector("#navbar") as HTMLElement)
navbar.render() 

const cardProduto: ProdutoAVenda = new ProdutoAVenda(document.querySelector("#fundo-produtos") as HTMLElement)

ProdutoService.carregaLoja().then((products: Produto[]) => {
    products.forEach((product: Produto) => {
        cardProduto.mostrar(product)
    })
})