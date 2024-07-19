import { createRoot } from 'react-dom/client';
import { pdfjs } from 'react-pdf';
import App from './App.tsx';
import './index.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find a root element');
}

createRoot(root).render(<App />);
