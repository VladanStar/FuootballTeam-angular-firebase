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
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  // [x: string]: any;
  getTeamId: any;
  teamData: any;
  i: any;

  constructor(
    public param: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService
  ) {}

  loadedPosts!: Post[];
  isFetching = false;
  error!: string;
  private errorSub!: Subscription;


  ngOnInit(): void {
   this.getTeamId = this.param.snapshot.paramMap.get('numb');
   console.log(this.getTeamId,'getteam');
  if(true){
    this.teamData =  this.postsService.fetchPosts().subscribe(
      this.teamData.filter((value:any)=>{
      return value.id == this.getTeamId;
    }
    ));
    console.log(this.teamData,'teamdata');
  }
  // ngOnInit(): void {
  //   this.isFetching = true;
  //   this.postsService.fetchPosts().subscribe({
  //     next: (posts) => {
  //       this.isFetching = false;
  //       this.loadedPosts = posts;
  //       console.log(this.loadedPosts);
  //       console.log(Array.isArray(this.loadedPosts));
  //     },
  //     error: (error) => {
  //       console.log('ERROR =', error);
  //       this.isFetching = false;
  //       this.error = error.message;
  //     },
  //   });

  //   //     selectedItem(this.i):{
  //   //       // SeselectedItemnd Http request
  //   //       this.postsService.fetchPosts().subscribe(() => {
  //   //         this.loadedPosts.filter((el:any)=>{
  //   // return el.id==  this.i;
  //   //         })
  //   //       });
  //   //     }

  //   this.getTeamId = this.param.snapshot.paramMap.get('numb');
  //   console.log(this.getTeamId, 'getteam');

  //   if (this.getTeamId) {
  //     this.loadedPosts.filter((value) => {
  //       return value.id == this.getTeamId;
  //     });
  //     console.log(this.loadedPosts, 'teamdata');
  //   }

    //   this.getTeamId = this.param.snapshot.paramMap.get('id');
    //   console.log(this.getTeamId,'getteam');
    // if(this.getTeamId){
    //   this.teamData =  this.postsService.fetchPosts().subscribe({
    //     this.loadedPosts.filter((value:any)=>{
    //     return value.numb == this.getTeamId;
    //     })
    //   }
    //     )

    //   }
 // }
}
}
// function selectedItem(i: any, number: any) {
//   throw new Error('Function not implemented.');
// }
// const menulist = menuKeys.map(menuKey => category.menulist[menuKey]);
// return { ...category, menulist };

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
