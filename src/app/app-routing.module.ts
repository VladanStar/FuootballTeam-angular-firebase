import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FansWallComponent } from './pages/fans-wall/fans-wall.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlayerComponent } from './pages/player/player.component';

const routes: Routes = [
{path:"team",component:TeamComponent},
{path:'team/:id',component:PlayerComponent},
{path:'add', component:AddPlayerComponent},
{path:'about', component:AboutComponent},
{path:"contact",component:ContactComponent },
{path:"", component:HomeComponent},
{path:'fans', component:FansWallComponent},


{path:"not-found", component:NotFoundComponent},
{ path: '**', redirectTo: '/not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
