import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ScoreComponent } from './score/score.component';
import { ArticleComponent } from './articles/article/article.component';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'score', component: ScoreComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'articles/fast/:id', component: ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
