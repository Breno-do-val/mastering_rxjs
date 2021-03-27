import { Observable } from "rxjs";

export const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);

    const complete: number = Math.random();

    setInterval(() => {
        if (complete < .3) {
            subscriber.complete();
        }
        else if (complete < .6) {
            subscriber.next((Math.random() * 10).toFixed());
        }
        else {
            subscriber.error('Subscriber failed');
        }
    }, 1000);
});