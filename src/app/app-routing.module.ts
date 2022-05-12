import { CodeEditorComponent } from './code-editor/code-editor.component';
import { GithubReadmeComponent } from './github-readme/github-readme.component';
import { EditPreviewComponent } from './edit-preview/edit-preview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', component:  HomeComponent},
  { path:  'edit', component:  CodeEditorComponent},
  { path:  'github-readme', component:  GithubReadmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
