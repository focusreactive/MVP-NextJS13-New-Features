'use client';
import { cache } from 'react';
import { useEffect, useState } from 'react';

import BuildInfo from '@/components/BuildInfo/BuildInfo';
import Doc from './doc.mdx';

const getData = cache(async () =>
  fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    cache: 'force-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetCountry {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }`,
    }),
  }).then((r) => r.json()),
);

const PostPage = async () => {
  const [state, setState] = useState({
    data: {
      country: {
        name: '',
        native: '',
        capital: '',
        emoji: '',
        currency: '',
        languages: [
          {
            code: '',
            name: '',
          },
        ],
      },
    },
  });

  useEffect(() => {
    getData().then(setState);
  }, []);

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        <strong>Country name {state?.data.country.name}</strong>
      </article>
    </div>
  );
};

export default PostPage;
