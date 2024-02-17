import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { MatTableModule } from '@angular/material/table';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [MatTableModule, BookCardListComponent, NavbarComponent]
})
export class HomePageComponent {
  books: BookModel[] | any = BooksData
  filteredBooks: BookModel[] | any = BooksData;
  categories: string[] = [];
  ngOnInit() {
    this.books.forEach((item: BookModel) => {
      if (!this.categories.includes(item.category)) {
        this.categories.push(item.category);
      }
    })
  }

  setBooksForCategories(event: string) {
    this.filteredBooks= this.books.filter((data: BookModel) => data.category === event)
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
