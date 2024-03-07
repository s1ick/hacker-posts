import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { PostComponent } from '../post/post.component';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostComponent, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [ApiService],
})
export class PostsComponent {
  checkData: any;
  constructor(public service: ApiService) {
    this.service.getDataFrontPage().subscribe(response => {
      this.checkData = {...response}
    });    
  }
  public arrayOfKeys!: any;
  @Input() data: any = {};
}