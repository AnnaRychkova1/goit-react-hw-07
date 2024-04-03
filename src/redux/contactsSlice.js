import { createSlice, nanoid } from '@reduxjs/toolkit';
import items from '../../contacts.json';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
const selectContacts = state => state.contacts.items;

export { addContact, deleteContact, selectContacts, contactsReducer };
