import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  standalone: true, // Mark as standalone
  imports: [RouterModule, CommonModule] // Import RouterModule here
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe({
      next: (items) => {
        this.items = items;
        this.cdr.detectChanges(); // Force change detection
      },
      error: (err) => console.error('Failed to get items', err)
    });
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe({
      next: () => this.loadItems(),
      error: (err) => console.error('Failed to delete item', err)
    });
  }
}