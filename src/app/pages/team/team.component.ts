import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/post.model';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
constructor( private http: HttpClient, private postsService: PostsService){}
searchText:any;

loadedPosts: Post[] = [];
isFetching = false;
error!: string | null;
private errorSub!: Subscription;
ngOnInit(): void {


this.isFetching = true;
this.postsService.fetchPosts().subscribe({
  next: (posts: any) => {
    this.isFetching = false;
    this.loadedPosts = posts;
  },
  error: (error: { message: any; }) => {
    console.log('ERROR =', error);
    this.isFetching = false;
    this.error = error.message;
  },
});
}
deleteItem(i:number){}
}


