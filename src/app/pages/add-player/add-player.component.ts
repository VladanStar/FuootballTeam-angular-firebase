import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/post.model';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error!: string | null;
  private errorSub!: Subscription;
constructor(private http: HttpClient, private postsService: PostsService){}
ngOnInit(): void {
  this.errorSub = this.postsService.error.subscribe((errorMessage) => {
    this.error = errorMessage ? errorMessage : null;
  });

  this.isFetching = true;
  this.postsService.fetchPosts().subscribe({
    next: (posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },
    error: (error) => {
      console.log('ERROR =', error);
      this.isFetching = false;
      this.error = error.message;
    },
  });
}
onCreatePost(postData: Post) {
  // Send Http request
  this.postsService.createAndStorePost(postData.title, postData.content, postData.numb, postData.id);

}

}
