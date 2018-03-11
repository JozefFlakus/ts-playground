/**
 *  -------------------------------
 *  RxJS - TypeScript playground
 *  by @JozeFlakus
 *
 *  http://rxmarbles.com
 *
 * -------------------------------
 */

import { Observable } from 'rxjs/Observable';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { merge, map, tap, concat, switchMap } from 'rxjs/operators';

describe('RxJS - marble testing', () => {

  /**
   * http://rxmarbles.com#map
   */
  xit('1 -- map v1', () => {
    const scheduler = getTestScheduler();
    const s1$       = cold('----1--2--3--|');
    const expected$ =      '----2--4--6--|';

    const stream = s1$.pipe(
      map(v => `${Number(v) * 2}`),
    );

    scheduler.expectObservable(stream).toBe(expected$);
  });

  /**
   * http://rxmarbles.com#map
   */
  xit('1 -- map v2', () => {
    const scheduler = getTestScheduler();
    const s1$       = cold('----a--b--c--|', { a: 1, b: 2, c: 3 });
    const expected$ = cold('----d--e--f--|', { d: 2, e: 4, f: 6 });

    const stream = s1$.pipe(
      map(v => v * 2),
    );

    expect(stream).toBeObservable(expected$)
  });

  /**
   * http://rxmarbles.com#concat
   */
  xit('2 -- concat', () => {
    const s1$ =       cold('--1--2--|');
    const s2$ =       cold(        '--3--|');
    const expected$ = cold('--1--2----3--|');

    const stream = s1$.pipe(
      concat(s2$),
    );

    expect(stream).toBeObservable(expected$);
  });

  /**
   * http://rxmarbles.com#merge
   */
  xit('3 -- merge', () => {
    const s1$       = hot('----a--^--b-------c--|');
    const s2$       = hot('   --d-^--e---------f-----|');
    const expected$ = hot(       '---(be)----c-f-----|');

    const stream = s1$.pipe(
      merge(s2$),
    );

    expect(stream).toBeObservable(expected$);
  });

  /**
   * http://rxmarbles.com#switchMap
   */
  xit('4 -- switchMap', () => {
    const s1$ =       cold('----1-------1-----|');
    const s2$ =       cold('1-1-1-|');
    const expected$ = cold('----2-2-2---2-2-2-|');

    const stream = s1$.pipe(
      switchMap(
        () => s2$,
        (x, y) => `${Number(x) + Number(y)}`
      ),
    );

    expect(stream).toBeObservable(expected$);
  });

});
