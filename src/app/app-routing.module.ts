import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from "./components/cat/cat.component";
import { DogComponent } from "./components/dog/dog.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'cat', component: CatComponent },
	{ path: 'dog', component: DogComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', component: PageNotFoundComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
