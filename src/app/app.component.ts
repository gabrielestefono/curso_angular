import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <br>
  <br>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  public valor = 1;

  public destruir:boolean = true;

  public adicionar(){
    return this.valor = ++this.valor;
  }

  public destruirComponent(){
    return this.destruir = false;
  }

  ngOnInit(): void {console.log('ngOnInit')}

  ngDoCheck(): void {console.log('ngDoCheck')}

  ngAfterContentInit(): void {console.log('ngAfterContentInit')}

  ngAfterContentChecked(): void {console.log('ngAfterContentChecked')}

  ngAfterViewInit(): void {console.log('ngAfterViewInit')}

  ngAfterViewChecked(): void {console.log('ngAfterViewChecked')}

  ngOnDestroy(): void {console.log('Destruído')}
}
