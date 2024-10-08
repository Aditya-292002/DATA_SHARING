import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  CLIENT_LIST=[{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
}]
}
