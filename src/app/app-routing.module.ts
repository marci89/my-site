import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
