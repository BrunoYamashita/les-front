import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

import { Observable } from "rxjs";

import { BooksService } from "../services/books.service";
import { Book } from '../models/book';


@Component({
  selector: 'st-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  books: Book[];
  searchControl: FormControl
  searchBarTitle : boolean = false 
  searchBarAuthor : boolean = false 
  message : String 
  productForm = new FormGroup ({
    name: new FormControl('',  Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
  });

  productsJson = [];

  onSubmit(type:String) {
    const formModel = this.productForm.value;
    this.productsJson.push(formModel);
    console.log(formModel);
  }

  
  ngOnInit() {
    this.productsJson.push({
      name: 'Placa Mae',
      price: '999.99',
      quantity: 10,
      model: 'ATX'
    });
  }

  // findByTitle(title: String){
  //   this.bookService.getBooksByTitle(title).subscribe(books => {
  //     this.books = books;
  //     this.message ='';
  //   }, 
  //   error =>{
  //     this.message = error,this.books = []
  //   })
  // }

  // findByAuthor(name: String){
  //   this.bookService.getBooksByAuthor(name).subscribe(books => {
  //     this.books = books;
  //     this.message ='';
  //   },
  //   error =>{
  //     this.message = error,this.books = []
  //   })
  // }

  // toggleSearchBook(){
  //   if(this.searchBarAuthor)
  //       this.searchBarAuthor = false
  //   this.searchBarTitle = !this.searchBarTitle
  //   this.clear();
  // }

  // toggleSearchAuthor(){
  //   if(this.searchBarTitle)
  //       this.searchBarTitle = false;
  //   this.searchBarAuthor = !this.searchBarAuthor
  //   this.clear()
  // }
  // onSubmit(type:String) {
  //   const formModel = this.searchForm.value;
  //   type == 'book' 
  //     ? this.findByTitle(formModel.searchControl)
  //     : this.findByAuthor(formModel.searchControl)
  // }

  // clear(){
  //   this.message= '';
  //   this.searchControl.setValue('')
  // }

}
