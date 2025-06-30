import Accordion from '../components/Accordion/Accordion';
import { useContentfulAccordion } from '../hooks/useContentfulAccordion';

export default function Home() {
  const { data, loading } = useContentfulAccordion();

  if (loading) return <p>Loading...</p>;

  return (
    <section class="page-section faq">
      <h2>Spørsmål og svar</h2>
      <Accordion data={data} />
    </section>
  );
}
