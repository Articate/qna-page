import { useState } from 'react';

export default function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`answer-${question}`}
      >
        <span className="accordion-indicator">{open ? '−' : '+'}</span>
        <span className="accordion-question">{question}</span>
      </button>

      {open && (
        <div className="accordion-answer" id={`answer-${question}`}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
