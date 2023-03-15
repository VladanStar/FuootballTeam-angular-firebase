import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router, Params } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
constructor( private http: HttpClient, private postsService: PostsService,  private router: Router){}
searchText:any;


loadedPosts: Post[] = [];
isFetching = false;
error!: string | null;
private errorSub!: Subscription;
ngOnInit(): void {

  this.isFetching = true;
  this.postsService.fetchPosts().subscribe({
    next: (posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
      console.log(this.loadedPosts)
    },
    error: (error) => {
      console.log('ERROR =', error);
      this.isFetching = false;
      this.error = error.message;
    },
  });
}

deleteItem(i:number) {
  // Send Http request
  this.postsService.deletePosts().subscribe(() => {
    this.loadedPosts.splice(i,1);
  });
}

}


