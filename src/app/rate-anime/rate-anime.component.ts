import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-anime',
  standalone: true,
  imports: [],
  templateUrl: './rate-anime.component.html',
  styleUrl: './rate-anime.component.css'
})
export class RateAnimeComponent {

}
import { Component, Input } from '@angular/core';
import { AnimeService } from '../anime.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-anime',
  templateUrl: './rate-anime.component.html',
  styleUrls: ['./rate-anime.component.css']
})
export class RateAnimeComponent {
  @Input() anime: any;
  rating: number;

  constructor(private animeService: AnimeService, private dialogRef: MatDialogRef<RateAnimeComponent>) {}

  submitRating() {
    this.anime.rating = this.rating;
    this.animeService.updateAnime(this.anime).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
