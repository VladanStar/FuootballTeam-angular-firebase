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
constructor( private http: HttpClient, private postsService: PostsService){}
searchText:any;


loadedPosts: Post[] = [];
isFetching = false;
error!: string ;
private errorSub!: Subscription;
ngOnInit(): void {


// this.isFetching = true;
// this.postsService.fetchPosts().subscribe({
//   next: (posts: any) => {
//     this.isFetching = false;
//     this.loadedPosts = posts;
// posts.forEach((elem:any)=>{
// const y={...elem.playload.toJSON()};
// this.loadedPosts.push(y as unknown as Post)
// console.log(this.loadedPosts)
// })
//   },
//   error: (error: { message: any; }) => {
//     console.log('ERROR =', error);
//     this.isFetching = false;
//     this.error = error.message;
//   },
// });

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
// deleteItem(i:number){}

deleteItem(i:number) {
  // Send Http request
  this.postsService.fetchPosts().subscribe(() => {
    this.loadedPosts.splice(i,1)
console.log(this.loadedPosts)
  });
}
}
