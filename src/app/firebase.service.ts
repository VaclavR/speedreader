import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Article } from './shared/article.model';

@Injectable()
export class FirebaseService {
  public articlesChanged = new Subject<Article[]>();
  private articles: Article[];

  constructor(private db: AngularFirestore) { }

  fetchArticles() {
    const docRef = this.db.collection('articles').doc('1qHqOqyJzNTs8fctpj5u');
    docRef.valueChanges().subscribe((data: any) => {
      this.articles = data.articles;
      this.getArticles();
    });
  }

  getArticles() {
    if (this.articles) {
      console.log('getArticles()');
      this.articlesChanged.next(this.articles.slice());
    }
  }

}
