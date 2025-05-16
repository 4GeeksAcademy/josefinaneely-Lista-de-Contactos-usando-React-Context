export const initialStore=()=>{
  
  return{

    contacts: [
{
id: 1,
name: "Pedro",
adress: "Adress",
email: "emai@gmail.com",
phoneNumber: "00000000"
}


    ]}}





export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'add_contact':

      const { id,  color, newContact} = action.payload

      return {
        ...store,
        contacts: store.contacts.map((contact) => (contact.id === id ? { ...contact, background: color } : contact))
      };
    
      case 'delete_task':
        


      default:
      throw Error('Unknown action.');
  }    
}
