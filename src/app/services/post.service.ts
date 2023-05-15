import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPosts(){
    return this.httpClient.get('https://gorest.co.in/public/v2/users');
  }
  // postPosts(data:any){
  //   return this.httpClient.post('https://reqres.in/api/users',data);
  // }
}
