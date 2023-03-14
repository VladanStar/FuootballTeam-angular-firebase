import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './pages/team/team.component';
import { AddPlayerComponent } from './pages/add-player/add-player.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path:"team",component:TeamComponent},
{path:'add', component:AddPlayerComponent},
{path:'about', component:AboutComponent},
{path:"contact",component:ContactComponent },
{path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
