import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { ItemPanier } from '../models/item-panier';

@Injectable({
  providedIn: 'root'
})
export class ItemPanierService {
  private listPanier: ItemPanier[] = [];
  totalPanier: number | undefined = 0;
  articlePanierTotal: number | undefined = 0;

  constructor() { }

/**
 * Ajoute l'article au panier.
 * @param article 
 */
  addArticle(article: Article): void {
    this.listPanier.push(new ItemPanier(article));
  };

  /**
   * Retire l'article du panier.
   * @param article 
   */
  removeArticle(article: Article): void {
    for (let i = 0; i < this.listPanier.length; i++) {
      if (this.listPanier[i].getArticle().id == article.id) {
        this.listPanier.splice(i, 1);
      }
    }
  }

/**
 * Renvoie la liste du panier.
 * @returns 
 */
  returnListPanier(): ItemPanier[] {
    return this.listPanier;
  }

  /**
   * Définit la tâche à éxécuter en fonction de l'article.
   * @param article 
   * @returns 
   */
  articleControl(article: Article): boolean | undefined {
    for (let i = 0; i < this.listPanier.length; i++) {
      if (this.listPanier[i].getArticle().id == article.id || article.prix == undefined) {
        this.removeArticle(article);
        return false;
      }
    }
    this.addArticle(article);
    return true;
  }

}