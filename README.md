# chair-flight Docsearch React

A clone of Algolia's React [DocSearch](http://docsearch.algolia.com/), but it accepts any 
search backend.

## Installation

```bash
yarn add chair-flight-docsearch-react
# or
npm install chair-flight-docsearch-react
```

## Get started

The api for the component is pretty much the same as the original `docsearch-react`
except that instead of providing an `appId` and `apiKey` you are supposed to pass 
an arbitrary search function:

```tsx
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

function App() {
  return (
    <DocSearch
      search={async (queryString) => myCustomBackend.search(queryString).map(toDocSearchHit)}
      indexName="YOUR_INDEX_NAME_USED_FOR_LOCAL_CACHE_PURPOSES"
    />
  );
}

export default App;
```

The search function is expected to return an array of `DocSearchHit`, the internal type 
used by algolia documents. You will most likely have to write a function mapping your 
search results into this specific format:

```ts
export declare type DocSearchHit = {
  objectID: string;
  content: string | null;
  url: string;
  url_without_anchor: string;
  type: ContentType;
  anchor: string | null;
  hierarchy: {
    lvl0: string;
    lvl1: string;
    lvl2: string | null;
    lvl3: string | null;
    lvl4: string | null;
    lvl5: string | null;
    lvl6: string | null;
  };
  _highlightResult: DocSearchHitHighlightResult;
  _snippetResult: DocSearchHitSnippetResult;
  _rankingInfo?: {
    promoted: boolean;
    nbTypos: number;
    firstMatchedWord: number;
    proximityDistance?: number;
    geoDistance: number;
    geoPrecision?: number;
    nbExactWords: number;
    words: number;
    filters: number;
    userScore: number;
    matchedGeoLocation?: {
      lat: number;
      lng: number;
      distance: number;
    };
  };
  _distinctSeqID?: number;
};
```

Note: the search engine is fairly robust. Most of these params can be considered optional
with no decrease of functionality.

## Documentation

All other features are inline with docsearch, so I advise you to look
in the original docs:

[Read documentation →](https://docsearch.algolia.com/docs/DocSearch-v3)
