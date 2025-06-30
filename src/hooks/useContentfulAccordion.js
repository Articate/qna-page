import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export function useContentfulAccordion() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await client.getEntries({ content_type: 'accordion', include: 2 });

      const entries = res.items.flatMap(item => {
        const items = item.fields.accordionItems || [];
        return items.map(sub => ({
          id: sub.sys.id,
          question: sub.fields.name,
          answer: sub.fields.text
        }));
      });

      setData(entries);
      setLoading(false);
    }

    fetchData();
  }, []);

  return { data, loading };
}