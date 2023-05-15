import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
posts:any 


constructor(private service:PostService){}

ngOnInit() {
  debugger
  this.service.getPosts()
    .subscribe(response=> {
      //console.log(response);
      //console.warn("response",response);
      this.posts = response;}

     
    );
   
}
}
