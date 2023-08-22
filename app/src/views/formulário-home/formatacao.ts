export abstract class Formatacao {

    protected Formata(palavra: string): string {
       return palavra[0].toUpperCase() + palavra.substring(1);
    }
    
}