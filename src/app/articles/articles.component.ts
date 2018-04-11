import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { articles } from '../shared/articles';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  fetchedArticles: Observable<any>;

  constructor(db: AngularFirestore) {
    this.fetchedArticles = db.collection('articles').valueChanges();
  }

  ngOnInit() {
    this.articles = articles;
  }

}
