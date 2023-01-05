import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		AppComponent,
		GifsComponent,
  		NavbarComponent,
		CatComponent,
		DogComponent,
		AboutComponent
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
