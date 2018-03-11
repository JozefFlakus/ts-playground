/**
 *  -------------------------------
 *  RxJS - TypeScript playground
 *  by @JozeFlakus
  * -------------------------------
 */

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { map, filter, scan, delay, tap } from 'rxjs/operators';

let l = console.log;
let observable: Observable<number>;
let subscription: Subscription;

l('\n----------------\n');



const observer = {
  next: v => l(v),
  error: e => l(e),
  complete: () => l('|'),
};

/**
 *  1 -------------------------------
 *  a$: 123|
 *  b$: 246|
 */

 of(1, 2, 3)
  .pipe(
    map(v => 2 * v)
  )
  .subscribe(observer);



/**
*  2 -------------------------------
*  a$: 123|
*  b$: 246|
*/

// observable = Observable.create(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// });

// observable
//   .pipe(
//     map(v => 2 * v),
//   )
//   .subscribe(observer);



/**
*  3 -------------------------------
*  a$: ---1---2---3---...
*  b$: ---2---4---6---...
*/

// observable = Observable.create(observer => {
//   let i = 0;
//   let interval = setInterval(() => observer.next(++i), 500);

//   return () => clearInterval(interval);
// });

// subscription = observable
//   .pipe(
//     map(v => 2 * v),
//   )
//   .subscribe(observer);

// setTimeout(() => subscription.unsubscribe(), 3000);
