import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'https://jsonplaceholder.typicode.com';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${URL}/posts`, HTTP_OPTIONS);
  }

  createPost(blogPost) {
    return this.http.post(`${URL}/posts`, blogPost, HTTP_OPTIONS);
  }
}
