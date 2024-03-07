import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../ui/posts/posts.component';
@Component({
  selector: 'app-past',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './past.component.html',
  styleUrl: './past.component.scss'
})
export class PastComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getDataFrontPage();
}
