import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {

}
import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes: any[] = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(data => {
      this.animes = data;
    });
  }
}
