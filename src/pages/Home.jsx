import Accordion from '../components/Accordion/Accordion';
import { useContentfulAccordion } from '../hooks/useContentfulAccordion';

export default function Home() {
  const { data, loading } = useContentfulAccordion();

  if (loading) return <p>Loading...</p>;

  return <Accordion data={data} />;
}
