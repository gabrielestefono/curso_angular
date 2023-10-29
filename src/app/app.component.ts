import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  public valor = 1;

  public adicionar(){
    return this.valor = ++this.valor;
  }

  ngOnInit(): void {console.log('ngOnInit')}

  ngDoCheck(): void {console.log('ngDoCheck')}

  ngAfterContentInit(): void {console.log('ngAfterContentInit')}

  ngAfterContentChecked(): void {console.log('ngAfterContentChecked')}

  ngAfterViewInit(): void {console.log('ngAfterViewInit')}

  ngAfterViewChecked(): void {console.log('ngAfterViewChecked')}
}
