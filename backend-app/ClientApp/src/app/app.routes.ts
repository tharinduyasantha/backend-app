import { Route } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemAddComponent } from './components/item-add/item-add.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/items', pathMatch: 'full' }, // Redirect to '/items' by default
  { path: 'items', component: ItemListComponent },
  { path: 'item/add', component: ItemAddComponent },
  { path: 'item/:id', component: ItemDetailComponent }
];
