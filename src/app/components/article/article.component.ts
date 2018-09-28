import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input()
  article;

  constructor() { }

  ngOnInit() {
  }

}
