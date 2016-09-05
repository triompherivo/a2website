/**
 * Created by RAMANDALAHY on 04/09/2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';


const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent}
];
export const appRoutingProviders : any[] =[

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);