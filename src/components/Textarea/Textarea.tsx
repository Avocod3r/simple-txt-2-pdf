import { forwardRef, TextareaHTMLAttributes } from 'react';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
  return (
    <textarea className="h-60 p-1 w-full max-w-[400px] rounded-md resize-none overflow-y-auto" {...props} ref={ref} />
  );
});

export default Textarea;
