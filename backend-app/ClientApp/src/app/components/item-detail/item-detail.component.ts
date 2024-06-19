import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  standalone: true, // Ensure your component is marked as standalone if using standalone APIs
  imports: [FormsModule,CommonModule, RouterModule]
})
export class ItemDetailComponent implements OnInit {
  item: Item | null = null;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.itemService.getItemById(id).subscribe({
        next: (item) => this.item = item,
        error: () => this.item = null
      });
    });
  }

  updateItem(): void {
    if (this.item) {
      this.itemService.updateItem(this.item.id, this.item).subscribe({
        next: () => console.log('Update successful'),
        error: (err) => console.error('Failed to update item', err)
      });
    }
  }
}
