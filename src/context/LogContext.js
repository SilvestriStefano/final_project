import { createContext, useState } from "react";

const LogContext = createContext();
const LogProvider = (props)=>{
    const [logState, setLogState] = useState(false);
    return (
        <LogContext.Provider value={[logState, setLogState]}>
            {props.children}
        </LogContext.Provider>
    )
};

export { LogContext, LogProvider }