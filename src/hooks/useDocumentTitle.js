import { useEffect } from 'react';

export const useDocumentTitle = (title, suffix = 'Nusarupa') => {
    useEffect(() => {
        const fullTitle = title ? `${title | suffix}` : suffix;
        document.title = fullTitle;
    }, [ title, suffix ]);
};