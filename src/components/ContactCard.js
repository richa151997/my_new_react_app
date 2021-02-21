import React from 'react'

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img style={{display: !props.contact.imgUrl && "none"}} src={props.contact.imgUrl}/>
            <h3 style={{display: !props.contact.name && "none"}}>Name: {props.contact.name}</h3>
            <p style={{display: !props.contact.phone && "none"}}>Phone: {props.contact.phone}</p>
            <p style={{display: !props.contact.email && "none"}}>Email: {props.contact.email}</p>
            
        </div>
    )
}

export default ContactCard