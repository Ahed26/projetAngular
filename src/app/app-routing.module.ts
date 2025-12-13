import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggDetailsComponent } from './sugg-details/sugg-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'suggList', component: SuggestionListComponent },

  { path: 'sugg/add', component: SuggestionFormComponent },   // ✅ Ajouter suggestion

  { path: 'sugg/:id', component: SuggDetailsComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
