import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private httpClient: HttpClient) { }


  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/books`)
  }

  createBook(book: Book): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/api/add`,book);
  } 

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`http://localhost:8080/api/books/${id}`);
  }
  
  updateBook(id: number, book: Book): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/api/update/${id}`,book);
  }

  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/api/delete/${id}`);
  }
}
