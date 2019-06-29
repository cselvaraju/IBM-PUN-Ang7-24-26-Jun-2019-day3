import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      data => this.postList = data
    );
  }

  createPost() {
    const post = {
      id: null,
      title: 'New Test Post',
      body: 'Welcome to Angular 7'
    };
    this.postService.createPost(post).subscribe(
      data => this.postList.unshift(data)
    );
  }

}
