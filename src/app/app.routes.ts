import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    title: 'About Me',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
}, {
    path: 'experience',
    title: 'Experience',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
}, {
    path: 'projects',
    title: 'Projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
}, {
    path: 'skills',
    title: 'Skills',
    loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills),
}, {
    path: 'contact',
    title: 'Contact Me',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
}];