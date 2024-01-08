import { Component, OnInit } from '@angular/core';
import { filter, from, range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit{
  ngOnInit(): void {
    //const obs$ = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const obs$ = range(0,10);
    obs$.pipe(
      filter(nombre => nombre % 2 === 0)
    ).subscribe(
      valeur => console.log(`Valeur filtrée: ${valeur}`),
      () => console.log('Terminé')
    );
    
    
    
  }

}
