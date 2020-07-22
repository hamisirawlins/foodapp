import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { StandardComponent } from './components/standard/standard.component';
import { PremiumComponent } from './components/premium/premium.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BasicComponent } from './components/basic/basic.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '', component: HomepageComponent
},
{
  path: 'basic', component: BasicComponent
},
{
  path: 'checkout', component: CheckoutComponent
},
{
  path: 'premium', component: PremiumComponent
},
{
  path: 'standard', component: StandardComponent
},
{
  path: 'thankyou', component: ThankyouComponent
},
{
  path: 'homepage', component: HomepageComponent
},
{
  path: 'catalog', component: CatalogComponent
},
{
  path: 'aboutus', component: AboutusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
