import { Component, OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
console.log('ngOnInit')
    },8000)
  }
  ngOnChanges(){
  this.log('ngOnChanges')

  }
  ngDoCheck(){
  this.log('ngDoCheck')
  }
  ngAfterContentInit(){
  this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
  this.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
  this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
  this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
  this.log('ngOnDestroy')
  }
  private log(hook:string){
    console.log(hook)
  }
}
