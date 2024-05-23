import { Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ColorcardComponent } from './components/playground/colorcard/colorcard.component';
import { TodolistComponent } from './components/playground/todolist/todolist.component';

export const routes: Routes = [
    { path: 'directory', title: 'Home', component: DirectoryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'playground', component: PlaygroundComponent },
    {
        path: 'playground', children: [
            { path: 'colorcard', component: ColorcardComponent },
            { path: 'todolist', component: TodolistComponent },

        ]
    },
    { path: '', redirectTo: 'directory', pathMatch: 'full' },
];
