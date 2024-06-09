import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierViewComponent } from '../panier-view/panier-view.component';
import { ItemPanier } from '../../models/item-panier';

@Component({
  selector: 'app-list-item-panier-view',
  standalone: true,
  imports: [CommonModule, PanierViewComponent],
  templateUrl: './list-item-panier-view.component.html',
  styleUrl: './list-item-panier-view.component.scss'
})
export class ListItemPanierViewComponent implements OnInit {
  @Input() panier: ItemPanier[]; // Liste des articles dans le panier.
  panierPrixTotal: number = 0; // Prix total du panier.
  articlePrixTotal: number | undefined = 0; // Prix total d'un article.
  timerId: any; // Identifiant du Minuteur.

  /**
   * Constructeur de la classe ListItemPanierViewComponent.
   */
  constructor() {
    this.panier = [];
  }

  /**
   * Méthode appelée lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    this.prixTotalPanier()
  };

  /**
   * Boucle sur le calcul du prix total du panier.
   */
  prixTotalPanier(): void {
    this.timerId = setInterval(() => {
      this.panierPrixTotal = 0;
      for (let i = 0; i < this.panier.length; i++) {
        this.articlePrixTotal = this.panier[i].articlePrixTotal();
        if (this.articlePrixTotal !== undefined && this.panierPrixTotal !== undefined) {
          this.panierPrixTotal += this.articlePrixTotal;
        }
      }
    })
  }

}