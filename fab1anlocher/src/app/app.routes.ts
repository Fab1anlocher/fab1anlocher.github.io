import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Standardseite
  { path: '**', redirectTo: '/about' } // Fallback für nicht gefundene Seiten
];
