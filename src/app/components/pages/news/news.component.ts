import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from '../../ui/posts/posts.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getDataFrontPage();

}
