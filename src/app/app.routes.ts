import { Routes } from '@angular/router';
import { PageComponent } from './components/page.component/page.component';
import { About } from './components/about/about';

export const routes: Routes = [

  {path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path: 'Home',component:PageComponent},
  { path:'about',component:About},
  
];
