import { Article } from "./article";

export class ItemPanier {

  private articlePanier: Article;
  private nbArticlesPanier: number = 1;

  constructor(rArticlePanier: Article) {
    this.articlePanier = rArticlePanier;
  }

  /**
   * Augmente l'article d'une unité.
   * @returns 
   */
  addNbArticle(): boolean {
    if (this.nbArticlesPanier < 9) {
      this.nbArticlesPanier++;
      return true;
    }
    else {
      return false
    }
  }

  /**
   * Diminue l'article d'une unité.
   * @returns 
   */
  withdrawNbArticle(): boolean {
    if (this.nbArticlesPanier > 1) {
      this.nbArticlesPanier--;
      return true;
    }
    else {
      return false
    }

  }

  /**
   * Renvoie le nombre d'unité de l'article.
   * @returns 
   */
  getNbArticle(): number {
    return this.nbArticlesPanier;
  }

  /**
   * Renvoie l'article.
   * @returns 
   */
  getArticle(): Article {
    return this.articlePanier;
  }

  /**
   * Renvoie le prix de l'article.
   * @returns 
   */
  getPrix(): number | undefined {
    if (this.articlePanier.prix !== undefined) {
      return this.articlePanier.prix;
    }
    return undefined
  }

  /**
   * Renvoie le prix total de l'article.
   * @returns 
   */
  articlePrixTotal(): number | undefined {
    if (this.articlePanier.prix !== undefined) {
      return this.articlePanier.prix * this.nbArticlesPanier;
    }
    return undefined
  }

}