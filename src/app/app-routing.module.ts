import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CatComponent} from "./cat/cat.component";
import {DogComponent} from "./dog/dog.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: AppComponent },
	{ path: 'cat', component: CatComponent },
	{ path: 'dog', component: DogComponent },
	{ path: 'about', component: AboutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
