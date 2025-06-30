import { useState } from 'react';
import classNames from 'classnames';
import styles from './AccordionItem.module.css';

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classNames(styles.accordionItem, { [styles.open]: open })}>
      <button
        className={styles.accordionToggle}
        onClick={() => setOpen(!open)}
      >
        
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
