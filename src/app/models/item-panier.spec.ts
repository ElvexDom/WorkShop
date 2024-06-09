import { Article } from './article';
import { ItemPanier } from './item-panier';

describe('ItemPanier', () => {
  let article: Article;
  let item: ItemPanier;

  it('should create an instance', () => {
    const article: Article = new Article(54, "Banjo", "Un instrument sublime avec des cordes");
    expect(new ItemPanier(article)).toBeTruthy();
  });
  it('increase/decrease item', () => {
    article = new Article(54, "Banjo", "Un instrument sublime avec des cordes")
    item = new ItemPanier(article);
    item.addNbArticle();
    expect(item.getNbArticle()).toEqual(2);
    item.withdrawNbArticle();
    expect(item.getNbArticle()).toEqual(1);
  });
  it('determine price', () => {
    article = new Article(54, "Banjo", "Un instrument sublime avec des cordes")
    article.prix = 100;
    item = new ItemPanier(article);
    expect(item.getPrix()).toEqual(100);
    item.addNbArticle();
    expect(item.articlePrixTotal()).toEqual(200);
  });
});
