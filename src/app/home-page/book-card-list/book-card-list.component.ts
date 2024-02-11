import { Component, Input } from '@angular/core';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() bookList: BookModel[] = [];

  addToCart(book:BookModel){
    console.log("book:",book);
    
  }
}
