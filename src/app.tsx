import React, { useEffect } from 'react';
import { auto } from 'manate/react';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import type { Store } from './store';

const App = (props: { store: Store }) => {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
    return () => {
      // ref: https://github.com/hakimel/reveal.js/issues/3593
      if (deck.isReady()) {
        deck.destroy();
      }
    };
  }, []);
  const render = () => <div />;
  return auto(render, props);
};

export default App;
