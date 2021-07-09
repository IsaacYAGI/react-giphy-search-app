import { useState } from 'react';

export const useStateLocal = (key, value) =>{

    const [Key, setKey] = useState( () => {

        try {
            
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : value;
            
        } catch (error) {
            console.error("error en custom hook:",error);
            return value;
        }

    });

    const setValue = (newValue) => {
        try {

            window.localStorage.setItem(key, JSON.stringify(newValue));
            setKey(newValue);
            
        } catch (error) {
            console.error("error en custom hook, set value:",error);
            
        }
    }

    return [
        Key,
        setValue
    ];
}