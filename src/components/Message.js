function Message({ type, name, content, id }){
    return(
        <li className={`message ${type}`}>
            <div className="icon">{ name.charAt(0) }</div>
            <span className="content">{ content }</span>
        </li>    
    )
}

export default Message