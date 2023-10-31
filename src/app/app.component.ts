import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public valor = 1;

  public destruir:boolean = true;

  public adicionar(){
    return this.valor = ++this.valor;
  }

  public destruirComponent(){
    return this.destruir = false;
  }

  ngOnInit(): void {console.log('ngOnInit')}
}
