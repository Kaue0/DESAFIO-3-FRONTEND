import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js"
import { Produto } from "./produto.js"
import { Porcao } from "../interfaces/porcao.js"

export class Carrinho {

    private static gerenciadorLocalStorage: LocalStorage<Produto> = new LocalStorage()
    

    public static salvar(produtos: Produto) {
        const listaProdutos = this.atualizar()
        if(listaProdutos.length > 0) {
            produtos.index = listaProdutos[listaProdutos.length - 1].index + 1
        } else {
            produtos.index = 1
        }
        this.gerenciadorLocalStorage.salvarNoLocalStorage(produtos)
    }

    public static atualizar(): Array<Produto> {
        
        const query = JSON.parse(LocalStorage.procurar("!") || "[]")
        return query.map((produtos: any) => {
            const produtosPreco: Array<Porcao> = []

            produtos.porcao.forEach((preco: Porcao) => {
                produtosPreco.push({
                    preco: preco.preco,
                    qtd: preco.qtd
                })
            })
            const valorPonteiroAtual: Porcao = {
                preco: produtos.porcao.preco,
                qtd: produtos.porcao.qtd
            }
            return new Produto(
                produtos.titulo,
                produtos.tipo,
                produtosPreco,
                valorPonteiroAtual,
                produtos.foto,
                produtos.index
            )
        })
    }
}