import { createContext, useState } from "react"

const ResponseContext = createContext()

export const ResponseContextProvider = ({children}) => {
    const [results, setResults] =  useState({})

    return(
        <ResponseContext.Provider value={{results, setResults}}>
            {children}
        </ResponseContext.Provider>
    )
}

export default ResponseContext