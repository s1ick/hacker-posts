import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../ui/posts/posts.component';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getData();
}
