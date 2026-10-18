
const db={
 messages: [
  {
    id:crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),

  },
  {
    id:crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),

  },
  {
    id:crypto.randomUUID(),
    text: "How is everyone doing?",
    user: "Alice",
    added: new Date(),

  }
   
],
createMessage(message){
   message.added=new Date()
   message.id=crypto.randomUUID()
   this.messages.push(message)
},
deleteMessage(id){
    this.messages=this.messages.filter(message=>message.id!==id)
 }
}


export default db