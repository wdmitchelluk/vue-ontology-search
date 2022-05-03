import type ResultsTypes from '../types/ResultsTypes.interface'

export const queryDB = async (start: number, rows: number, query: string): Promise<ResultsTypes> => {
    const res = await fetch(`https://www.ebi.ac.uk/ols/api/search?start=${start}&rows=${rows}&q=${query}`);
    return res.json();
}