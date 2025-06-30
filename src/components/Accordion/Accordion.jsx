import AccordionItem from './AccordionItem';

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map(item => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
