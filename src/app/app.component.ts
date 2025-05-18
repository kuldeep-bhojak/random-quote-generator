import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, map, tap} from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('1s ease-in')),
    ]),
  ],
  
})
export class AppComponent implements OnInit {
  title = 'random-quote-generator';
  
  quotes$: Observable<any> = of([]);
  constructor(private http: HttpClient) {}

   ngOnInit() {
    this.getQuotes();
   }

  getQuotes() {
    const url = "http://api.quotable.io/quotes/random";
    this.quotes$ = this.http.get(url);
  }

  refresh() {
    setTimeout(() => {
      this.getQuotes();
    }, 1000)
  }
}

