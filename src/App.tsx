import { useState } from 'react';
import Form from './components/Form/Form.tsx';
import PdfView from './components/PdfView/PdfView.tsx';
import History from './components/History/History.tsx';
import { createPdf } from './lib/services.ts';
import useLocalStorage from './lib/hooks/useLocalStorage.ts';

export type PDFFile = string | File | null;

function App() {
  const [pdf, setPdf] = useState<PDFFile>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [localStorage, setLocaleStorage] = useLocalStorage('documents', []);

  const handleCreatePdf = async (text: string) => {
    setLoading(true);
    try {
      const result = await createPdf(text);
      setPdf(result);
      setLocaleStorage({
        createdAt: new Date(),
        document: result,
        name: `file_${localStorage.length + 1}`,
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen w-full flex">
      <div className="bg-black flex flex-col justify-center items-center flex-1 p-8">
        <Form loading={loading} onSubmit={handleCreatePdf} />
        <History setPdf={setPdf} pdf={pdf} />
      </div>
      <div className="bg-black flex flex-col justify-center items-center flex-1">
        <div>
          {pdf ? (
            <div className="flex-col flex items-center">
              <h2 className="text-pink text-2xl">Preview</h2>
              <PdfView file={`data:application/pdf;base64,${pdf}`} />
            </div>
          ) : (
            <p className="text-pink font-bold">Start convert your text2pdf with my tool!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
