import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const PAGES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then((c) => c.ContactComponent) },
    { path: 'interview', loadComponent: () => import('./interview/interview.component').then((c) => c.InterviewComponent) },
    { path: 'recent-concerts', loadComponent: () => import('./recent-concerts/recent-concerts.component').then((c) => c.RecentConcertsComponent) }
];