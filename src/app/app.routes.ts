import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntegritetspolicyComponent } from './pages/integritetspolicy/integritetspolicy.component';
import { FishingCampComponent } from './pages/fishing-camp/fishing-camp.component';
import { InEnglishComponent } from './pages/in-english/in-english.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'fiskecamp', component: FishingCampComponent },
  { path: 'integritetspolicy', component: IntegritetspolicyComponent },
  { path: 'in-english', component: InEnglishComponent },
  { path: '**', component: HomeComponent },
];
