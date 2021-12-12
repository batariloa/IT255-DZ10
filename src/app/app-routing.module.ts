import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: 'card/:id', component: CardComponent },
  { path: 'card', component: CardComponent },
  { path: 'feed', component: FeedComponent},

{ path: '**', component: PageNotFoundComponent, pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
