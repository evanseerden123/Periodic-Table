import React from "react";
import { motion } from "framer-motion";
import type { Element } from "../data/elements";

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

interface PropertyConfig {
  key: keyof Element;
  label: string;
  format?: (value: Element[keyof Element]) => string;

}

const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const properties: PropertyConfig[] = [
    { key: 'atomicNumber', label: 'Atomic Number' },
    {
      key: 'atomicMass',
      label: 'Atomic Mass',
      format: (value) => (typeof value === 'string' ? value : value ? value.toFixed(3) : 'N/A'),
    },
    { key: 'group', label: 'Group' },
    { key: 'period', label: 'Period' },
    { key: 'block', label: 'Block' },
    { key: 'density', label: 'Density', format: (value) => (value? `${value} g/cm³` : 'N/A') },
    { key: 'meltingPoint', label: 'Melting Point', format: (value) => (value? `${value} K` : 'N/A') },
    { key: 'boilingPoint', label: 'Boiling Point', format: (value) => (value? `${value} K` : 'N/A') },
    { key: 'specificHeat', label: 'Specific Heat', format: (value) => (value? `${value} J/(g·K)` : 'N/A') },
    { key: 'electronegativity', label: 'Electronegativity', format: (value) => (value ? value.toString() : 'N/A') },
    { key: 'abundance', label: 'Abundance', format: (value) => (value? `${value} mg/kg` : 'N/A') },
    { key: 'category', label: 'Category' },
  ];
    
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
      className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick = {onClose}
      >
        <motion.div
          initial = {{ scale: 0.9 }}
          animate = {{ scale: 1 }}
          className = "bg-white dark:bg-neutral-800/90 p-6 rounded-lg shadow-lg max-w-md w-full"
          onClick = {(e) => e.stopPropagation()}
        >
          <h2 className = "text-2xl font-bold mb-4 dark:text-nonmetal-400 text-halogen-400">
            {element.name} ({element.symbol})
          </h2>

          <div className = "grid grid-cols-2 gap-2 text-sm dark:text-neutral-200 capitalize">
            {properties.map((prop) => (
              <React.Fragment key = {prop.key}>
                <span className = "font-semibold">{prop.label}:</span>
                <span>{prop.format ? prop.format(element[prop.key]) : element[prop.key]}</span>
              </React.Fragment>
            ))}
          </div>
          <button
            onClick = {onClose}
            className = "mt-4 px-2 py-2 bg-halogen-400 dark:bg-nonmetal-400 text-white rounded hover:bg-halogen-400/80 dark:hover:bg-nonmetal-400/90"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
  )
}

export default ElementModal;