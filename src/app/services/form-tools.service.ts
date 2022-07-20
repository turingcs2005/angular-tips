import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {

  constructor() { }

  // recursively replace currency strings ($) with parsed numbers
  currencyStringToNumberTree(o: any) {
    if (o) {
      for ( let [key, value] of Object.entries(o) ) {
        if (value && typeof value === 'string' && /^\$([1-9][0-9]{0,2}(\,[0-9]{3})*|0)$/.test(value)) {
          o[key] = parseInt(value.replace(/\D/g, ''), 10);

        } else {
          // recursion: function calls itself
          if (o[key] && typeof o[key] === 'object') {
            this.currencyStringToNumberTree(o[key]);
          }
        }
      }
    }
  }


}
