import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../shared/article.model';
import { articles } from '../../shared/articles';
import { FirebaseService } from '../../firebase.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  article: Article;
  currentWord: string;
  fastRead = false;
  isRun = false;
  text: any;
  textSpeed = 200;
  wordsNumber: number;
  readingTime: number;

  constructor(private route: ActivatedRoute, private fbService: FirebaseService) { }

  ngOnInit() {
    if (this.route.snapshot.url[1].path === 'fast') {
      this.fastRead = true;
    }
    this.id = +this.route.snapshot.params['id'];
    this.article = articles[this.id];
    this.showStatistic();
  }

  showStatistic () {
    this.processText();
    this.wordsNumber = this.text.length;
    this.readingTime = Math.round((this.text.length) * this.textSpeed * 0.01) / 10;
  }

  processText() {
    this.text = this.article.content.replace(/(\n\r\t|\n|\r\t|\s\s+)/gm, ' ').split(' ');
    if (this.text[this.text.length - 1] === '') {
      this.text.splice(this.text.length - 1, 1);
    }
  }

  runSpeedReader(iterations, text, delay) {
    const index = text.length - iterations;
    setTimeout(() => {
      if (index < text.length) {
        this.currentWord = text[index];
        iterations--;
        this.runSpeedReader(iterations, text, delay);
      } else {
        this.currentWord = undefined;
      }
    }, delay);
  }

  onLaunch() {
    this.isRun = true;
    this.processText();
    this.runSpeedReader(this.text.length, this.text, this.textSpeed);
  }



}
