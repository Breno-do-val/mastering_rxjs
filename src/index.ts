import { observable } from "./observable";

// Observable created in observable.ts
observable.subscribe(
    value => console.log(value),
    err => console.log(`Something went wrong: ${err}`),
    () => console.log('Done!')
);

