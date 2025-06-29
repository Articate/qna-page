import { useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

function App() {
  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await client.getEntries({
          content_type: "accordion",
          include: 2,
        });
        console.log("Contentful data:", response);
      } catch (error) {
        console.error("Error fetching from Contentful:", error);
      }
    }

    fetchEntries();
  }, []);

  return <span>Check console</span>;
}

export default App;
