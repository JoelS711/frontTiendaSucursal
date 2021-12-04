import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientConsultComponent } from './components/client-consult/client-consult.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client-create', component: ClientCreateComponent },
  { path: 'client-consult', component: ClientConsultComponent },
  { path: 'client-delete', component: ClientDeleteComponent },
  { path: 'client-update', component: ClientUpdateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, ClientCreateComponent, ClientConsultComponent, ClientDeleteComponent, ClientUpdateComponent]
