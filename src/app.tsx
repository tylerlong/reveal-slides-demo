import React, { useEffect, useState } from 'react';
import { auto } from 'manate/react';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import type { Store } from './store';
import { createPortal } from 'react-dom';

const App = (props: { store: Store }) => {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown],
    });
    const main = async () => {
      await deck.initialize();
      deck.sync();
    };
    main();
    return () => {
      // // ref: https://github.com/hakimel/reveal.js/issues/3593
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
    <div>
      {createPortal(
        <div className="reveal">
          <div className="slides">
            <section data-markdown="">
              <div data-template="">
                {`
    ## Slide ${counter}
    A paragraph with some text and a [link](https://hakim.se).
    ---
    ## Slide 2
    ---
    ## Slide 3
            `}
              </div>
            </section>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
  return auto(render, props);
};

export default App;
