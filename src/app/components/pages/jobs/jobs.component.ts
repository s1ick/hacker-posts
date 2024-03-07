import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../ui/posts/posts.component';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getDataFrontPage();
}
