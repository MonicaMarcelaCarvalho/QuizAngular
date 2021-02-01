import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QuestionFormComponent } from './page/home/painel-form/question-form/question-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question/:caminho', component: QuestionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
