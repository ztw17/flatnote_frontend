const notes = (state = [], action) => {
    switch(action.type) {
    //     case 'NEW_NOTE':
    //         return {
    //             ...state,
    //             notes: [...state.notes, action.note]
    //         }
    //     case 'SET_NOTE':
    //         return {
    //             ...state,
    //             note: action.note
    //         }
    //     case 'SET_NOTES':
    //         return {
    //             ...state,
    //             notes: action.notes
    //         }
    //     case 'EDIT_NOTE':
    //         state = state.map(note => {
    //             if (note.id === action.note.id) {
    //                 return action.note
    //             } else {
    //                 return note
    //             }
    //         })
    //     case 'DELETE_NOTE':
    //         const deletableNotes = state.notes.filter(note => note.id !== action.note.id)
    //         return {
    //             ...state,
    //             notes: deletableNotes
    //         }
        case 'FETCH_NOTES': 
            return state = action.notes
        case 'CREATE_NOTE':
            return // add functinality
        case 'DELETE_NOTE':
            const notes = state.filter(note => note.id !== action.id)
            return state = notes
        case 'EDIT_NOTE':
            state = state.map(note => {
                if (note.id === action.note.id) {
                    return action.note
                } else {
                    return note
                }
            })
        return state
        default:
            return state
    }
}

export default notes