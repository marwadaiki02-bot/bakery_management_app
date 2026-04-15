import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cake, CakeService } from '../../services/cake';

@Component({
  selector: 'app-cake-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cake-list.html',
  styleUrl: './cake-list.css',
})
export class CakeList implements OnInit {
  cakes: Cake[] = [];
  newCake: Cake = { name: '', category: '', price: 0, stock: 0 };

  constructor(private cakeService: CakeService) {}

  ngOnInit(): void {
    this.loadCakes();
  }

  loadCakes() {
    this.cakeService.getCakes().subscribe(data => this.cakes = data);
  }

  addCake() {
    this.cakeService.addCake(this.newCake).subscribe(() => {
      this.loadCakes();
      this.newCake = { name: '', category: '', price: 0, stock: 0 };
      alert('🍰 New cake added / Nouveau gâteau ajouté');
    });
  }
    deleteCake(id: number) {
    this.cakeService.deleteCake(id).subscribe(() => {
      this.loadCakes();
      alert('🗑️ Cake deleted / Gâteau supprimé');
    });
  }
}
