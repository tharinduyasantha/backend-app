import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss'],
  standalone: true, // Ensure your component is marked as standalone if using standalone APIs
  imports: [FormsModule]
})
export class ItemAddComponent {
  item: Item = new Item(); // Assuming `Item` has a constructor that initializes its fields

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  addItem(): void {
    this.itemService.addItem(this.item).subscribe({
      next: (item) => {
        console.log('Item added', item);
        this.router.navigate(['/items']); // Redirect after adding the item
      },
      error: (err) => console.error('Failed to add item', err)
    });
  }
}
