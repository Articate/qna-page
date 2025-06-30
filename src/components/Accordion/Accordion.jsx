import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
  return (
    <div>
      {data.map(item => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}