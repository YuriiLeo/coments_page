import { useCallback } from 'react';

import { parseJSON } from 'utils/helpers';

type ReturnData<T> = {
    readValue: () => T | undefined;
    setValue: (payload: string | T) => void | never;
    removeValue: () => void;
}

export const useLocalStorage = <T>(key: string, initialValue: T): ReturnData<T> => {
    const readValue = useCallback((): T | undefined => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? (parseJSON<T>(item)) : initialValue
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue
        }
    }, [initialValue, key]);

    const setValue = useCallback((payload: string | T): void | never => {
        if (typeof window === 'undefined') {
            throw new Error('Window is undefined');
        }

        try {
            const value = typeof payload === 'string' ? payload : JSON.stringify(payload);

            window.localStorage.setItem(key, value);
        } catch (error) {
            throw new Error(`Error reading localStorage key “${key}”: ${error}`);
        }
    }, [key]);

    const removeValue = useCallback(() => {
        if (typeof window === 'undefined') {
            throw new Error('Window is undefined');
        }

        window.localStorage.removeItem(key);
    }, [key])

    return {
        readValue,
        setValue,
        removeValue,
    }
};
