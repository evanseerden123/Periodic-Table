import React, { useState } from 'react';
import { elements } from '../data/elements';
import type { Element } from '../data/elements';
import ElementModal from './ElementModal';

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  return (
    <div className='grid grid-cols-18 gap-1 p-4 bg-gray-100'>
        {elements.map((element) => (
            <button
                key = {element.atomicNumber}
                onClick = {() => setSelectedElement(element)}
                className = 'w-16 h-16 flex items-center justify-center border border-gray-300 bg-white hover:bg-blue-100 transition-colors'
                style = {{ gridColumn: getColumn(element), gridRow: getRow(element) }}
            >
                <div>
                    <div className = 'text-xs'>{element.atomicNumber}</div>
                    <div className = 'text-lg font-bold'>{element.symbol}</div>
                    <div className = 'text-xs'>{element.name}</div>
                </div>
            </button>
        ))}
        {selectedElement && (
            <ElementModal
                element={selectedElement}
                onClose={() => setSelectedElement(null)}
            />
        )}
    </div>
  );
};

const getColumn = (element: Element): number => {
    if (typeof element.group === 'number') return element.group;
    // Handle special cases (e.g., lantanides/actinides in g)
}