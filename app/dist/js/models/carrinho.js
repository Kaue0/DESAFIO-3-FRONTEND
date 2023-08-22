import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js";
import { Produto } from "./produto.js";
export class Carrinho {
    static salvar(produtos) {
        const listaProdutos = this.atualizar();
        if (listaProdutos.length > 0) {
            produtos.index = listaProdutos[listaProdutos.length - 1].index + 1;
        }
        else {
            produtos.index = 1;
        }
        this.gerenciadorLocalStorage.salvarNoLocalStorage(produtos);
    }
    static atualizar() {
        const query = JSON.parse(LocalStorage.procurar("!") || "[]");
        return query.map((produtos) => {
            const produtosPreco = [];
            produtos.porcao.forEach((preco) => {
                produtosPreco.push({
                    preco: preco.preco,
                    qtd: preco.qtd
                });
            });
            const valorPonteiroAtual = {
                preco: produtos.porcao.preco,
                qtd: produtos.porcao.qtd
            };
            return new Produto(produtos.titulo, produtos.tipo, produtosPreco, valorPonteiroAtual, produtos.foto, produtos.index);
        });
    }
}
Carrinho.gerenciadorLocalStorage = new LocalStorage();
