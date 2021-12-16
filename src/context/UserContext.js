import { createContext, useState } from "react";

// const defaultUser = {name:"Son Goku", email:"kakarot@sayan.net", auth:'admin'};

const UserDataContext = createContext();
const UserDataProvider = (props)=>{
    const [user, setUser] = useState({});
    return (
        <UserDataContext.Provider value={[user, setUser]}>
            {props.children}
        </UserDataContext.Provider>
    )
};

export { UserDataContext, UserDataProvider }