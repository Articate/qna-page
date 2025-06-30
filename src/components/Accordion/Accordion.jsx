import AccordionItem from './AccordionItem';
import styles from './Accordion.module.css';

export default function Accordion({ data }) {
  return (
    <div className={styles.accordion}>
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
