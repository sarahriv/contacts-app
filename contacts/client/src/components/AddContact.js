import React, {Component} from 'react';

export default class AddContacts extends Component {
    submitContact(event) {
        event.preventDefault(); 
        let contact = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            email: this.refs.email.value,
        }
        fetch('http://localhost:8080/api/contacts', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        .then(response => response.json());
        window.location.reload();
    }
    render(){
        return (
            <div className="row">
                <form className="col-12" onSubmit={this.submitContact.bind(this)}>
                    <div className="row input-line">
                    <div className="col-md-4 col-12">
                    <label htmlFor="firstName">First name</label>
                    </div>
                    <div className="col-md-8 col-12">
                        <input ref="firstName" type="text"/>
                      
                    </div>
                    </div>
                    <div className="row input-line">
                    <div className="col-md-4 col-12">
                    <label htmlFor="lastName">Last name</label>
                    </div>
                    <div className="col-md-8 col-12">
                        <input ref="lastName" type="text"/>
                      
                    </div>
                    </div>
                    <div className="row input-line">
                    <div className="col-md-4 col-12">
                    <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="col-md-8 col-12">
                        <input ref="phone" type="phone"/>
                
                    </div>
                    </div>
                    <div className="row input-line">
                    <div className="col-md-4 col-12">
                    <label htmlFor="address">Address</label>
             </div>
             <div className="col-md-8 col-12">
                        <input ref="address" type="text" />
                     
                    </div>
                    </div>
                    <div className="row input-line">
                    <div className="col-12 col-md-4">
                    <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-8">
                            <input ref="email" type="email"/>
                         
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-8">
                        <button className="buttonStyle" type="submit" name="action">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        
        )
    }
}