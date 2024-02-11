import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { MatTableModule } from '@angular/material/table';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [MatTableModule, BookCardListComponent]
})
export class HomePageComponent {
  books: BookModel[] | any = BooksData

  ngOnInit() {
    console.log(this.books);
  }
}

export interface BookModel {
  name: string
  author: string
  year: string
  image: string
  category: string
  star: string
  id: string
}
