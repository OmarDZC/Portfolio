import { Routes } from '@angular/router';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ProjectsComponent } from './componentes/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'about', component: AboutComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'projects', component: ProjectsComponent},



    // { path: '**', component: NotFoundComponent }
];
