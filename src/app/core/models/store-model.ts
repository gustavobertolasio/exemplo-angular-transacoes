import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
    state$: Observable<T>;
    private stateSubject$: BehaviorSubject<T>;
    private initialState$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.stateSubject$ = new BehaviorSubject(initialState);
        this.initialState$ = new BehaviorSubject(initialState);
        this.state$ = this.stateSubject$.asObservable();
    }

    get state(): T {
        return this.stateSubject$.getValue();
    }

    setState(nextState: T): void {
        this.stateSubject$.next(nextState);
    }

    resetState() {
      this.stateSubject$ =  this.initialState$;
      this.state$ = this.stateSubject$.asObservable();
    }
}
