import Message from "./Message"
import Form from "./Form"

function Messages({ messages }){
    
    const renderMessage = () => {
        return messages.map((message)=>{
           return <Message type={message.type} name={message.name} content ={message.content} key={message.id} />
        })
    }
    
    return(
        <main>
            <h2>Messages</h2>
            <section className="messages">
            <ul>
                { renderMessage() }
            </ul>
            </section>
            <Form />
      </main>
    )
}

export default Messages