export class Navbar {
    constructor(elemento) {
        this.elemento = elemento;
    }
    render() {
        this.elemento.innerHTML = `
            <nav class="navbar">
                <ul>
                    <li>
                        <a href="/app/dist/html/home.html" class="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/app/dist/html/clientes.html" class="">
                            Clientes
                        </a>
                    </li>
                    <li>
                        <a href="/app/dist/html/loja.html" class="">
                            Loja
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
