import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articlesSubscription: Subscription;
  articles: Article[];

  constructor(private fbService: FirebaseService) {}

  ngOnInit() {
    this.articlesSubscription = this.fbService.articlesChanged.subscribe((articles: Article[]) => {
      this.articles = articles;
    });
    if (!this.articles) {
      this.fbService.getArticles();
    }
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }

}
