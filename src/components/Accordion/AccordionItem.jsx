import { useState } from 'react';

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <strong>{question}</strong>
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
}