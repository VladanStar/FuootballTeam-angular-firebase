import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { TeamComponent } from './pages/team/team.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FansWallComponent } from './pages/fans-wall/fans-wall.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PlayerComponent } from './pages/player/player.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AppComponent, TeamComponent, HeaderComponent, FooterComponent, AddPlayerComponent, AboutComponent, ContactComponent, HomeComponent, FansWallComponent, NotFoundComponent, PlayerComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule,    AppRoutingModule, FormsModule, ReactiveFormsModule,NgxPaginationModule,  Ng2SearchPipeModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
