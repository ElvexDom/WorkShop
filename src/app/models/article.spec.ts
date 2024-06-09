import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article(12, "Vélo","Super véhicule à 2 roues")).toBeTruthy();
  });
});
