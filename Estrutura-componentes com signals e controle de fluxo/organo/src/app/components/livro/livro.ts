export interface Livro {
    titulo: string;
    autor: string;
    favorito: boolean;
    genero: GeneroLiterario;
    imagem: string;
}
export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[];
}