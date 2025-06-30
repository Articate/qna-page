import { useState } from 'react';
import classNames from 'classnames';
import styles from './AccordionItem.module.css';

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div
      className={classNames(styles.accordionItem, { [styles.open]: open })}
      onClick={toggle}
    >
      <div className={styles.accordionToggle}>
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </div>

      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}