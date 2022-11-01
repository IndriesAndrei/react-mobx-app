// stores in mobx (simple JavaScript objects)
import { nanoid } from "nanoid"

export function createNotesStore () {
    return {
        notes: [],

        // actions in mobx are functions 
        addNote(text) {
            this.notes.push({
                text, id: nanoid()
            })
        },
        removeNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        }
    }
}