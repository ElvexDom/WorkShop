import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from '../card-article/card-article.component';
import { Article } from '../../models/article';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [CommonModule,CardArticleComponent],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.scss'
})
export class ListArticleComponent implements OnInit {

  @Input() articles?: Article[];
  @Output() clicked: EventEmitter<Article> = new EventEmitter();

  /**
   * Constructeur de la classe ListArticleComponent.
   */
  constructor() { }

  ngOnInit(): void { }

  /**
   * Renvoie au composant Parent l'article cliqué.
   * @param article 
   */
  clickArticle(article:Article | undefined): void {
    this.clicked.emit(article);
  }

}