import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
{path:"cart",component:CartComponent},
{path:"customer",component:CustomerDetailsComponent},
{path:"ordersummary",component:OrdersummaryComponent},
{path:"order",component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
