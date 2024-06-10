import { Component, OnInit } from '@angular/core';
import { ListArticleComponent } from '../list-article/list-article.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ListItemPanierViewComponent } from '../list-item-panier-view/list-item-panier-view.component';
import { ItemPanier } from '../../models/item-panier';
import { ItemPanierService } from '../../services/item-panier.service';
@Component({
  selector: 'app-achats-view',
  standalone: true,
  imports: [ListArticleComponent, ListItemPanierViewComponent],
  templateUrl: './achats-view.component.html',
  styleUrl: './achats-view.component.scss'
})
export class AchatsViewComponent implements OnInit {
  articlesAch: Article[] | undefined; // Liste des articles.
  itemPanierService: ItemPanierService; // Service pour gérer les articles du panier
  articlesPanier: ItemPanier[] = []; // Liste des articles dans le panier.

  /**
   * Constructeur de la classe AchatsViewComponent.
   * @param articleService 
   */
  constructor(private articleService: ArticleService) {
    this.itemPanierService = new ItemPanierService();
  }

  /**
   * Méthode appelée lors de l'initialisation du composant.
   */
  ngOnInit(): void {
    this.articleService.getAll().subscribe(data => {
      this.articlesAch = data;
      this.articlesPanier = this.itemPanierService.returnListPanier();
    });
  }

  /**
   * Contrôle l'article envoyé par le composant Enfant.
   * @param article 
   */
  articleSelected(rNameChild: Article) {
    this.itemPanierService.articleControl(rNameChild);
  }

  onPrint() {
    window.print();
  }

}