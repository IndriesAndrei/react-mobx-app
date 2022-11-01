// so we can use our Store globally, we need to add this context
import React from "react"
import { createNotesStore } from "./notesStore";
import { useLocalObservable } from "mobx-react";

const NotesContext = React.createContext(null);

export const NotesProvider = ({children}) => {
    // to make it observable
    const notesStore = useLocalObservable(createNotesStore);

    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}

export const useNotesStore = () => React.useContext(NotesContext)