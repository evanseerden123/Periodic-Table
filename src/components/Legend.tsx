import React from 'react';
import type { Element } from '../data/elements';
import { getCategoryColor } from '../utils';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


interface LegendProps {
  elements: Element[];
}



const Legend: React.FC<LegendProps> = ({ elements }) => {
    const uniqueCategories = [...new Set(elements.map(e => e.category))].filter(Boolean);

    return (
    <>
        <div className = "mt-4 p-4 bg-white border border-gray-300 rounded-t dark:bg-neutral-700 dark:text-white">
            <h2 className = "text-lg font-bold mb-2">Legend</h2>
            <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {uniqueCategories.map(category => (
                    <div key={category} className="flex items-center">
                        <button className = {`w-6 h-6 mr-2 border border-gray-300 ${getCategoryColor(category)}`}></button>
                        <Link to={"/categories/"+`${typeof category === 'string' && category.trim() ? category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : '/'}`} className="test-sm underline capitalize">{category}</Link>
                    </div>
                ))}
            </div>
        </div>
        <Outlet />
        <TanStackRouterDevtools />
    </>
    ) 
};

export default Legend;
