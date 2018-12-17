import {Directive, ElementRef} from '@angular/core';

@Directive({
 selector: '[inputfocus]'
 })
export class InputFocusedDirective {

   constructor(private el: ElementRef) { 
     var elem = el.nativeElement.value;
    console.log(elem + "==> length = " + elem.length);
   }


}