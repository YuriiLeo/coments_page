export const getInitialsFromUserName = (userName: string): string => {
    const initials = userName.slice(0, 2).toUpperCase();

    return initials;
};

// A wrapper for "JSON.parse()" to support "undefined" value
export const parseJSON = <T>(value: string | null): T | undefined => {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        return undefined;
    }
};
