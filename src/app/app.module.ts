import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		GifsComponent,
		CatComponent,
		DogComponent,
		SearchComponent,
		AboutComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
