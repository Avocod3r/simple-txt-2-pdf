import { Dispatch, SetStateAction } from 'react';
import { PDFFile } from '../../App.tsx';
import useLocalStorage from '../../lib/hooks/useLocalStorage.ts';
import { getTimeStamp } from '../../lib/utils.ts';

type Props = {
  setPdf: Dispatch<SetStateAction<PDFFile>>;
  pdf: PDFFile;
};

const History = ({ setPdf, pdf }: Props) => {
  const [localStorage] = useLocalStorage('documents', []);

  return (
    <div className="flex flex-col gap-3 mt-4 items-center overflow-y-auto">
      <h2 className="text-xl text-pink font-bold">History</h2>
      {localStorage.length > 0 ? (
        localStorage.map(({ createdAt, document, name }: { createdAt: string; document: string; name: string }) => (
          <div
            key={createdAt}
            className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => setPdf(document)}
              type="button"
              className={`
                w-full px-4 py-2 font-medium text-left text-white border-b border-gray-200 rounded-lg cursor-pointer focus:outline-none hover:bg-black ${pdf === document ? 'bg-black' : 'bg-navy '}
              `}
            >
              {name}
              {' - '}
              {getTimeStamp(new Date(createdAt))}
            </button>
          </div>
        ))
      ) : (
        <p className="text-pink font-medium">No items to show</p>
      )}
    </div>
  );
};

export default History;
