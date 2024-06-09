import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Article } from '../../models/article';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.scss'
})
export class CardArticleComponent {
  @Input() article?: Article;
}