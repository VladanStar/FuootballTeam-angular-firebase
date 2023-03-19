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
 
  getTeamId: any;
  teamData: any;
 

  constructor(
    public param: ActivatedRoute,
    private http: HttpClient,
    private postsService: PostsService
  ) {}

  loadedPosts: Post[]=[];
  isFetching = false;
  error!: string;
  private errorSub!: Subscription;

ngOnInit(): void {
  this.getTeamId = this.param.snapshot.paramMap.get('id');
  console.log(this.getTeamId,'getteam');
  
  if (this.getTeamId) {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts.filter(post => post.numb === this.getTeamId);
        console.log(this.loadedPosts);
        console.log(Array.isArray(this.loadedPosts));
      },
      error: (error) => {
        console.log('ERROR =', error);
        this.isFetching = false;
        this.error = error.message;
      },
    });
  }
}
}