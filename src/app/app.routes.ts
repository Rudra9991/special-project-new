import { Routes } from '@angular/router';
import { NextPageComponent } from './next-page/next-page.component';
import { FirstPageComponent } from './first-page/first-page.component';



export const routes: Routes = [
    {path: '', redirectTo:'/firstPage',pathMatch: 'full'},
    {path: 'NextPage', component: NextPageComponent},
    {path: 'firstPage', component: FirstPageComponent}
];
