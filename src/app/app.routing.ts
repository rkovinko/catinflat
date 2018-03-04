import {Routes, RouterModule} from '@angular/router';
import {CatComponent} from './components/cat/cat.component';
const appRoutes: Routes = [
    {
        path: 'cat',
        component: CatComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);
