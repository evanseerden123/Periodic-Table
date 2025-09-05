  export const getCategoryColor = (category: string) => {
        switch (category) {
            case 'nonmetal': return 'bg-nonmetal-400 hover:bg-nonmetal-500';
            case 'noble gas': return 'bg-noble-gas-400 hover:bg-noble-gas-500';
            case 'alkali metal': return 'bg-alkali-metal-400 hover:bg-alkali-metal-500';
            case 'alkaline earth metal': return 'bg-alkaline-earth-metal-400 hover:bg-alkaline-earth-metal-500';
            case 'metalloid': return 'bg-metalloid-400 hover:bg-metalloid-500';
            case 'post-transition metal': return 'bg-post-transition-metal-400 hover:bg-post-transition-metal-500';
            case 'transition metal': return 'bg-transition-metal-400 hover:bg-transition-metal-500';
            case 'lanthanide': return 'bg-lanthanide-400 hover:bg-lanthanide-500';
            case 'actinide': return 'bg-actinide-400 hover:bg-actinide-500';
            case 'halogen': return 'bg-halogen-400 hover:bg-halogen-500';
            default: return 'bg-gray-500 hover:bg-gray-600';
        }
    };