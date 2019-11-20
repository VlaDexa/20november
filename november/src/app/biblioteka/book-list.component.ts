import { Component } from '@angular/core';

import { books } from '../book';

@Component({
  selector: 'app-biblioteka',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class ProductListComponent {
  products = books;

  share() {
    window.alert('The product has been shared!');
  }
}
