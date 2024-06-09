import { TypeArticle } from "./type-article";

export class Article {
  id: number;
  nom: string;
  description: string;

  prix?: number;
  image?: string;

  types?: TypeArticle[];

  constructor(rId: number, rNom: string, rDescription: string) {
    this.id = rId;
    this.nom = rNom;
    this.description = rDescription;
  }
}
