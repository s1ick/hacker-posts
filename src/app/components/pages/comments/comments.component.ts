import { Component } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainService } from '../../../main.service';
import { PostsComponent } from '../../ui/posts/posts.component';
import {MatDividerModule} from '@angular/material/divider';
import { Location } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';

interface commentsNode {
  id: number;
  author: string;
  created_at: Date;
  text: string;
  points: number;
  parents_id: number;
  children?: commentsNode[];
}


@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [HttpClientModule, PostsComponent, CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  providers: [ApiService, MainService],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  currentURL:string = ''
  lastWordUrl: any;
  treeControl = new NestedTreeControl<commentsNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<commentsNode>();
  dataArray: commentsNode[] = [];
  data: any;
  constructor(private service: ApiService, private location: Location) {
    this.currentURL = window.location.href;
    this.lastWordUrl = this.currentURL.split('/').pop();
    this.service.getDataComments(this.lastWordUrl).subscribe(response => { 
      this.data = {...response}
      //this.dataArray.push(...response as [])
      this.dataSource.data = this.data;
      console.log(this.dataSource)
      console.log(this.dataSource.data)
    }); 
  }
  histroryBack() {
    this.location.back()
  }
  hasChild = (_: number, node: commentsNode) => !!node.children && node.children.length > 0;
}
