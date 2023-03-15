import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  getTeamId:any;
  teamData:any;


  constructor( public param:ActivatedRoute, private http: HttpClient, private postsService: PostsService){}
  searchText:any;
values:any;
  loadedPosts: Post[] = [];
  isFetching = false;
  error!: string | null;
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
// })
//   },
//   error: (error: { message: any; }) => {
//     console.log('ERROR =', error);
//     this.isFetching = false;
//     this.error = error.message;
//   },
// });

this.getTeamId = this.param.snapshot.paramMap.get('id');
console.log(this.getTeamId,'getteam');

this.teamData =  this.loadedPosts.filter((value)=>{
  return  value.id = this.getTeamId;


  // value.id == this.getTeamId ;
});
console.log(this.teamData,'teamdata');


  }

}

// const menulist = menuKeys.map(menuKey => category.menulist[menuKey]);
// return { ...category, menulist };


