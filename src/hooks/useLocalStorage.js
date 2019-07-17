import React, { useState } from 'react';


function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() =>{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setStoredValue]
}

export default useLocalStorage;
