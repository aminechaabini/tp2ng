import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ArcEnCielComponent } from './arc-en-ciel/arc-en-ciel.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { ProductsComponent } from './products/products.component';
import { cvResolver } from './resolver/cv.resolver';
import { cvDetailResolver } from './resolver/cv-details.resolver';

const routes: Routes = [    {path: 'cv', component: CvComponent},
{path : 'rainbow', component: ArcEnCielComponent},
{path:'miniWord', component: MiniWordComponent},
{path: 'cv', component: CvComponent,resolve:  {cvs: cvResolver}},
{path:'login', component: AuthentificationFormComponent},
{path:'cvdetails', component : DetailsPersonComponent},
{path:'products', component : ProductsComponent},
{path:'cv/:id', component: DetailsPersonComponent,resolve: {person: cvDetailResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
