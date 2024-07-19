import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Pagination from '../Pagination/Pagination.tsx';
import Button from '../Button/Button.tsx';
import usePagination from '../../lib/hooks/usePagination.ts';
import { handleDownloadPdf } from '../../lib/utils.ts';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';
import { PDFFile } from '../../App.tsx';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 400;

type Props = {
  file: PDFFile;
};

const PdfView = ({ file }: Props) => {
  const [numPages, setNumPages] = useState<number>(1);
  const { nextPage, pageNumber, prevPage, changePage, isLast, isFirst } = usePagination(numPages);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
  };

  return (
    <div className="flex flex-col items-center my-2 p-3">
      <div className="w-full max-w-[calc(100%-2em)] my-4">
        <p className="font-medium text-2xl text-pink">Pages: {numPages}</p>
        <Document
          loading={
            <div className="text-pink font-medium text-xl flex h-[517px] justify-center items-center w-[400px]">
              Please wait!
            </div>
          }
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page pageNumber={pageNumber} width={maxWidth} />
          <div className="mt-3 flex items-center justify-between">
            <Pagination
              isLast={isLast}
              isFirst={isFirst}
              changePage={changePage}
              prevPage={prevPage}
              pageNumber={pageNumber}
              nextPage={nextPage}
              totalPages={numPages}
            />
            <Button onClick={() => handleDownloadPdf(file as string)}>Download!</Button>
          </div>
        </Document>
      </div>
    </div>
  );
};

export default PdfView;
