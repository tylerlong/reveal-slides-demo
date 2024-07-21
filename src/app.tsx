import React, { useEffect, useState } from 'react';
import { auto } from 'manate/react';

import Reveal from 'reveal.js';

import type { Store } from './store';
import { createPortal } from 'react-dom';

const App = (props: { store: Store }) => {
  useEffect(() => {
    const deck = new Reveal({});
    const main = async () => {
      await deck.initialize();
      deck.sync();
    };
    main();
    return () => {
      // ref: https://github.com/hakimel/reveal.js/issues/3593
      if (deck.isReady()) {
        deck.destroy();
      }
    };
  }, []);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const render = () => (
    <>
      {createPortal(
        <div className="reveal">
          <div className="slides">
            <section>
              <h1>Slide {counter}</h1>
              <p>
                A paragraph with some text and a <a href="https://hakim.se">link</a>.
              </p>
            </section>
            <section>
              <h1>Slide 2</h1>
            </section>
            <section>
              <h1>Slide 3</h1>
            </section>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
  return auto(render, props);
};

export default App;
