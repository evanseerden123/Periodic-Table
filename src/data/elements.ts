import data from './elements.json'

export interface Element {
    atomicNumber: number;
    symbol: string;
    name: string;
    group: string | number;
    period: number;
    block: string;
    atomicMass: number | string;
    density: number | null;
    meltingPoint: number | null;
    boilingPoint: number | null;
    specificHeat: number | null;
    electronegativity: number | null;
    abundance: number | null;
    category: string;
}

export const elements: Element[] = data.elements;