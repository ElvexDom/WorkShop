import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ItemPanier } from '../../models/item-panier';
import { Article } from '../../models/article';

@Component({
  selector: 'app-panier-view',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './panier-view.component.html',
  styleUrl: './panier-view.component.scss'
})
export class PanierViewComponent {
  @Input() articlePanier: ItemPanier; // Article du panier.
  articlePrix: number | undefined = 0; // Prix d'un article.
  articlePrixTotal: number = 0; // Prix total d'un article.
  timerId: any; // Identifiant du Minuteur.

  /**
   * Constructeur de la classe PanierViewComponent.
   */
  constructor() {
    this.articlePanier = new ItemPanier(new Article(0, "", ""));
  }

    /**
   * Méthode appelée lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    this.prixTotalArticle();
  }

/**
 * Boucle sur le calcul du prix total d'un article'.
 */
  prixTotalArticle(): void {
    this.timerId = setInterval(() => {
      this.articlePrix = this.articlePanier.getArticle().prix;
      if (this.articlePrix !== undefined) {
        this.articlePrixTotal = Math.round(this.articlePrix * this.articlePanier.getNbArticle() * 100) / 100;
      }
    })
  }

}