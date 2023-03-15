import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { Post } from '../post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {

items: Observable<Post[]> | undefined;
  [x: string]: any;
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string, numb: number, id:string ) {
    const postData: Post = { title: title, content: content, numb: numb, id:id };
    this.http
      .post<{ name: string }>(
        'https://bicproject2-c0d6d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe({
        next: (responseData) => console.log(responseData),
        error: (error) => this.error.next(error.message),
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://bicproject2-c0d6d-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          console.log('ovo je response data iz servisa', responseData);
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(() => Error(errorRes));
        })
      );
  }
  getItems() {
    return this.items;
  }
  deletePosts() {
    return this.http
      .delete('https://bicproject2-c0d6d-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
