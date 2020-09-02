import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book.modele';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUpLoading = false;
  fileUrl: string;
  fileUploaded = false;


  constructor(private formBuilder: FormBuilder,
              private BooksService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      auther: ['', Validators.required]
    });
  }
  onSaveBook(){
    const title = this.bookForm.get('title').value;
    const auther = this.bookForm.get('auther').value;
    const newBook = new Book(title, auther);
    if(this.fileUrl && this.fileUrl != ''){
      newBook.photo = this.fileUrl;
    }
    this.BooksService.createNewBook(newBook);
    this.router.navigate(['/books']);
  }
  onUploadFile(file: File){
    this.fileIsUpLoading = true;
    this.BooksService.uploadFile(file).then(
      (Url: string) => {
        this.fileUrl = Url;
        this.fileIsUpLoading = false;
        this.fileUploaded = true;
      }
    )
  }
  delectFiles(event){
    this.onUploadFile(event.target.files[0]);
  }

}
