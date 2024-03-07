import { Routes } from '@angular/router';
import { AskComponent } from './components/pages/ask/ask.component';
import { CommentsComponent } from './components/pages/comments/comments.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PastComponent } from './components/pages/past/past.component';
import { ShowComponent } from './components/pages/show/show.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
export const routes: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    {
        path: 'news', component: NewsComponent,
        children: [{
            path: 'comments/:id',
            component: CommentsComponent 
        }]
    },
    { path: 'jobs', component: JobsComponent },
    { path: 'ask', component: AskComponent },
    { path: 'past', component: PastComponent },
    { path: 'show', component: ShowComponent },
    { path: 'past', component: PastComponent },
    { path: '**', component: NotFoundComponent }
];
