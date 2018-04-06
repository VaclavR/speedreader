import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { articles } from '../shared/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] ;

  constructor() { }

  ngOnInit() {
    this.articles = articles;
    console.log(this.articles);
  }

}
