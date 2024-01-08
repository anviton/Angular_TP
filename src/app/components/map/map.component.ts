import { Component, OnInit } from '@angular/core';
import { map, range } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  result = [];
  ngOnInit(): void {
    const obs$ = range(0, 10);
    obs$.pipe(map((val : number) => val * val));
    obs$.subscribe(
      {
        next: (value) => console.log(value)
    });
  }

}
