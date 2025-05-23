export const initialStore = () => ({
  contacts: [
    {
      id: 1,
      name: "Name Last Name",
      adress: "Home Address",
      email: "emailaddress@gmail.com",
      phoneNumber: "+000 000 0000"
    }
  ]
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    case "UPDATE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
        ),
      };

    case "DELETE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.filter((contact) => contact.id !== action.payload),
      };

    case "SET_STORE":
      return action.payload;

    default:
      throw Error("unknown action");
  }
}