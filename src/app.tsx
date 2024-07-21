import React, { useEffect } from 'react';
import { auto } from 'manate/react';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import type { Store } from './store';

const deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();

const App = (props: { store: Store }) => {
  // useEffect(() => {
  //   deck.initialize();
  //   return () => deck.destroy();
  // }, []);
  const render = () => <div className="reveal" />;
  return auto(render, props);
};

export default App;
