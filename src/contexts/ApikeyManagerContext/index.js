import { createContext } from 'react';

import { useStateLocal } from '../functions'

const ApikeyContext = createContext();

const { Provider, Consumer} = ApikeyContext;

const ApikeyProvider = ({ children }) => {
    const [Apikey, setApikey] = useStateLocal("Apikey", "");
    return (
        <Provider
            value={
                {
                    Apikey, setApikey
                }
            }
        >
            { children }
        </Provider>
    )
}

export { ApikeyProvider, Consumer as ApikeyConsumer, ApikeyContext };