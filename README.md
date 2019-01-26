# Observers

Collection of singleton observers.

### Currently in the collection present:

- ScrollObserver Detect scroll on the window
- ConnectionObserver Detect offline/online
- ResizeObserver Detect resize of the window.

### Usage:

Install using:

```
npm i @eggerdingsoftware/observers
```

Import using:

```
import {Scroll, Connection, Resize} from "Observers"
```

Create a eventHandler function:

```
const eventHandler = event => {
    // do something
}
```

Subscribe to a event by calling:

```
<Observer>.subscribe(eventHandler);
```

UnSubscribe when you are done listening:

```
<Observer>.unSubscribe(eventHandler);
```

That's it!
