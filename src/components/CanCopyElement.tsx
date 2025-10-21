import { useState, useRef } from 'react';
import { copyElementText } from '../util/Util';
import './CanCopyElement.css';

interface CanCopyElementProps {
  text: string;
}

export default function CanCopyElement({ text }: CanCopyElementProps) {
  const rootEl = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState('Copy');

  const copy = () => {
    setButtonText('Copied!!');
    setTimeout(() => setButtonText('Copy'), 2 * 1000);
    const el = rootEl.current?.querySelector('.copy .text');
    if (el) copyElementText(el);
  };

  return (
    <div className="copy" onClick={copy} ref={rootEl}>
      <span className="text">{text}</span>
      <button>{buttonText}</button>
    </div>
  );
}
