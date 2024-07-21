import React, { useEffect } from 'react';
import { auto } from 'manate/react';
import Reveal from 'reveal.js';
import { createPortal } from 'react-dom';

import type { Store } from './store';

const App = (props: { store: Store }) => {
  const { store } = props;
  useEffect(() => {
    const deck = new Reveal({});
    deck.initialize();
    return () => {
      // for strictMode, ref: https://github.com/hakimel/reveal.js/issues/3593
      if (deck.isReady()) {
        deck.destroy();
      }
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      store.count += 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const render = () => (
    <>
      {createPortal(
        <div className="reveal">
          <div className="slides">
            <section>
              <h1>Slide {store.count}</h1>
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
