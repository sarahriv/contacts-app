import React, {Component} from 'react';
import AddContact from './AddContact';
import ContactsTable from './ContactsTable';
export default class Contacts extends Component {
	
	
	  constructor(props){
	        super(props);
	        this.state = {
	            contacts: [],
	        };
	    }
	  
	  componentDidMount(){
	        fetch('http://localhost:8080/api/contacts')
	        .then(response=>response.json())
	        .then(data => this.setState({contacts: data}))
	    }
	  
	  render(){
		  return(
				  <div>
				  <ContactsTable contacts={this.state.contacts}/>
				  <div className="row">
				  <div className="col-12">
				  <h3 className="addition">Add a contact</h3>
				  <AddContact />
				  </div>
				  </div>
				  </div>
				  
				  )
	  }
}