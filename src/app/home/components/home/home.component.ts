import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public comments : Comment[];

  constructor(private commentService : CommentService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe((data : Comment[])=>{
      this.comments = data;
  })
}

}
