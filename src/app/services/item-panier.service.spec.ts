import { TestBed } from '@angular/core/testing';

import { ItemPanierService } from './item-panier.service';
import { Article } from '../models/article';

describe('ItemPanierService', () => {
  let service: ItemPanierService;
  let article: Article;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('add an article in listPanier', () => {
    article = new Article(0,"flute", "Mon instrument à vent");
    service.addArticle(article);
    expect(service.returnListPanier().length).toEqual(1);
  });
  it('remove an article in listPanier', () => {
    article = new Article(0,"flute", "Mon instrument à vent");
    service.removeArticle(article);
    expect(service.returnListPanier().length).toEqual(0);
  });
  it('control an article', () => {
    article = new Article(0,"flute", "Mon instrument à vent");
    service.addArticle(article);
    expect(service.articleControl(article)).toEqual(false);
    service.removeArticle(article);
    expect(service.articleControl(article)).toEqual(true);
  });
});
