import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../ui/posts/posts.component';
@Component({
  selector: 'app-show',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getData();
}
