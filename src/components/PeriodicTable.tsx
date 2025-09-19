import { useState } from 'react';
import { elements } from '../data/elements';
import type { Element } from '../data/elements';
import ElementModal from './ElementModal';
import Legend from './Legend'
import { getCategoryColor } from '../utils';
import "../index.css";
import Article from './Articles/PeriodicTableArticle';

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

    const normalizeCategory = (category: string): string => {
        return category.toLowerCase().replace(/\s+/g, '-');
    };

  console.log([...new Set(elements.map((e) => e.category))])

  return (
    <div className="min-w-fit min-h-fit p-4 bg-gray-100 dark:bg-neutral-800">
        <h1 className = "flex items-center justify-center text-5xl font-sans font-bold text-halogen-400 dark:text-nonmetal-400/60 ">The Periodic Table of the Elements</h1>
        <Legend elements={elements}/>
    <div className='grid grid-cols-18 gap-1 p-8 rounded-b-md bg-gray-200 dark:bg-neutral-800'>
        {elements.map((element) => (
            <button
                key = {element.atomicNumber}
                onClick = {() => setSelectedElement(element)}
                className={`sm:w-12 sm:h-8 md:w-20 md:h-12 xl:w-24 xl:h-16 2xl:w-28 2xl:h-20 flex flex-col items-center justify-center border border-gray-300 transition-colors text-center truncate ${getCategoryColor(element.category)} ${normalizeCategory(element.category) === 'post-transition-metal' || normalizeCategory(element.category) === 'alkaline-earth-metal' ? 'text-gray-700' : 'text-white'} ${getRow(element) >= 8 ? 'mt-4' : ''} dark:text-white hover:text-gray-800`}
                style = {{ gridColumn: getColumn(element), gridRow: getRow(element) }}
            >
                <div className = "w-full">
                    <div className = 'text-xs truncate'>{element.atomicNumber}</div>
                    <div className = 'lg:text-md xl:text-lg 2xl:text-2xl font-bold'>{element.symbol}</div>
                    <div className = 'text-xs truncate '>{element.name}</div>
                </div>
            </button>
        ))}

        <div
          key="lanth-placeholder"
          className='sm:w-12 sm:h-8 md:w-20 md:h-12 xl:w-24 xl:h-16 2xl:w-28 2xl:h-20 flex items-center justify-center border border-gray-300 text-white bg-lanthanide-400'
          style={{ gridRow: 6, gridColumn: 3 }}
        >
            <div className='lg:text-md xl:text-lg 2xl:text-3xl font-bold'>La</div>
        </div>
        <div
          key="actin-placeholder"
          className='sm:w-12 sm:h-8 md:w-20 md:h-12 xl:w-24 xl:h-16 2xl:w-28 2xl:h-20 flex items-center justify-center border border-gray-300 bg-actinide-400 text-white'
          style={{ gridRow: 7, gridColumn: 3 }}
        >
            <div className='lg:text-md xl:text-lg 2xl:text-3xl font-bold'>Ac</div>
        </div>


        {selectedElement && (
            <ElementModal
                element={selectedElement}
                onClose={() => setSelectedElement(null)}
            />
        )}
    </div>
    <Article />
    </div>
  );
};



const getColumn = (element: Element) => {
    if (element.category === 'lanthanide') {
        return element.atomicNumber - 57 + 3; // La (57) -> col 3, Lu (71) -> col 17
    }
    if (element.category === 'actinide') {
        return element.atomicNumber - 89 + 3; // Ac (89) -> col 3, Lr (103) -> col 17
    }
    return typeof element.group === 'number' ? element.group : 1; // Fallback
}



const getRow = (element: Element) => {
    if (element.category === 'lanthanide') return 8;
    if (element.category === 'actinide') return 9; 
    return element.period || 1; // Fallback
}

export default PeriodicTable;