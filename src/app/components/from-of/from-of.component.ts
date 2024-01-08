import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrls: ['./from-of.component.scss']
})
export class FromOfComponent implements OnInit{
  
  ngOnInit(): void {
    const of$ = of([1, 2, 3]);
    of$.subscribe(val => console.log(val));
    const from$ = from([1, 2, 3]);
    from$.subscribe(val => console.log(val));
  }

}
