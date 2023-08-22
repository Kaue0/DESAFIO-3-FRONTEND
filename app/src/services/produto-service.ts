import { Porcao } from "../interfaces/porcao.js"
import { Produto } from "../models/produto.js"

export class ProdutoService {
    
    public static async carregaLoja(): Promise< Array<Produto> > {
        return fetch("../js/JSONProdutos/produtos-info.json")
            .then(res => res.json())
            .then(dados => {
                return dados.produtos.map((produto: any) => {
                    const Montante: Array<Porcao> = []
                    produto.porcao.forEach((preco: Porcao) => {
                        Montante.push({
                            preco: preco.preco,
                            qtd: preco.qtd
                        })
                    })
    
                    const valorPonteiroAtual: Porcao = {
                        preco: produto.porcao.preco,
                        qtd: produto.porcao.qtd
                    }

                    return new Produto(
                        produto.titulo,
                        produto.tipo,
                        Montante,
                        valorPonteiroAtual,
                        produto.foto
                    )
                }
                )
            })
    }
}