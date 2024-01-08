import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent {
  variable = "bouton_id";
  desactiveInc = false;
  desactiveDec = true;
  cpt: number = 0;

  onclickIncrement(){
    console.log("TOTO");
    this.cpt++;
    if(this.variable == "bouton_id"){
      this.variable = "bouton_id2";
    }
    else{
      this.variable = "bouton_id";
    }
    this.verifBouton();
  }

  onclickDecrement(){
    this.cpt--;
    this.verifBouton();
  }

  verifBouton(){
    if(this.cpt  > 10 ){
      this.desactiveInc = true;
    }else{
      this.desactiveInc = false;
    }
    if(this.cpt < 1){
      this.desactiveDec = true;
    }
    else{
      this.desactiveDec = false;
    }
  }
}
