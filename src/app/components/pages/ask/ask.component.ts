import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../../ui/posts/posts.component';
@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss'
})
export class AskComponent {
  constructor(public service: ApiService) {}
  data:any = this.service.getData();
}
