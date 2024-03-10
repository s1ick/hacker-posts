import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../../API/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainService } from '../../../main.service';
import { PostsComponent } from '../../ui/posts/posts.component';
import { MatDividerModule } from '@angular/material/divider';
import { Location } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { NestedTreeControl, CdkTreeModule } from '@angular/cdk/tree';
import { ArrayDataSource, DataSource } from '@angular/cdk/collections';
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
  imports: [HttpClientModule,
    PostsComponent,
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatTreeModule,
    CdkTreeModule,
    MatButtonModule,
    MatProgressBarModule],
  providers: [ApiService, MainService],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  currentURL!: string;
  lastWordUrl: any;
  data!: any;
  dataSource!: ArrayDataSource<commentsNode>;
  treeControl!: NestedTreeControl<commentsNode>;
  constructor(private service: ApiService, private location: Location, private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.currentURL = window.location.href;
    this.lastWordUrl = this.currentURL.split('/').pop();
    this.service.getDataComments(this.lastWordUrl).subscribe(response => {
      this.data = { ...response }
      this.treeControl = new NestedTreeControl<commentsNode>(this.getChildren);
      this.dataSource = new ArrayDataSource(this.data);
      
      console.log(this.dataSource)
    });
  }

  histroryBack() {
    this.location.back()
  }
  getChildren = (node: commentsNode) => {
    return node.children;
  };
  
  hasChild = (_: number, node: commentsNode) => !!node.children && node.children.length > 0;
}
