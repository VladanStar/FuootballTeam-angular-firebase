import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router, Params } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { NgxPaginationModule } from 'ngx-pagination/public-api';




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']

})
export class TeamComponent implements OnInit {
[x: string]: any;
constructor( private http: HttpClient, private postsService: PostsService){}
searchText:any;

totalLength:any;
page: number = 1;
p: any;
loadedPosts: Post[] = [];
isFetching = false;
error!: string ;
private errorSub!: Subscription;
ngOnInit(): void {




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

this.totalLength = this.loadedPosts.length;
console.log(this.loadedPosts);
}
// deleteItem(i:number){}

deleteItem(i:number) {
  // Send Http request
  this.postsService.fetchPosts().subscribe(() => {
    this.loadedPosts.splice(i,1)
console.log(this.loadedPosts)
  });
}

}
