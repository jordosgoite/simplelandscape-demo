export interface GetArticleResponse {
  id: number;
  img: string;
  nombre: string;
  descripcion: string;
  fechaDeValidez: string;
  costo: number;
}

export interface Article {
  id: number;
  img: string;
  nombre: string;
  descripcion: string;
  fechaDeValidez: string;
  costo: number;
}

export interface SelectedArticle {
  id: number;
  nombre: string;
  costo: number;
  cantidad: number;
  total: number;
}
