import React from 'react';
import { motion } from 'framer-motion';
import type { Element } from '../data/elements';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{element.name} ({element.symbol})</h2>
        <ul className="space-y-2">
          <li>Atomic Number: {element.atomicNumber}</li>
          <li>Atomic Weight: {element.atomicWeight}</li>
          <li>Melting Point: {element.meltingPoint} K</li>
          <li>Coefficient of Thermal Expansion: {element.coefficientThermalExpansion} /K</li>
        </ul>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </motion.div>
    </motion.div>
  );
};

export default ElementModal;