function Contact({ name, id }){
    console.log(name)
    return(
        <li className="contact">
            <div className="icon">{ name.charAt(0) } key={id} </div>
            { name }
        </li>
    )
}

export default Contact