import React,{Component} from 'react'

export default class ContactsTable extends Component {
	
	  constructor(props){
	        super(props);
	        this.state = {
	            contacts: [],
	            sortType: 'firstName',
	            sortDirection: 'ascending',
	        };
	        this.handleChange = this.handleChange.bind(this);
	    }
	  
	  componentDidMount(){
	        fetch('http://localhost:8080/api/contacts')
	        .then(response=>response.json())
	        .then(data => this.setState({contacts: data}))
	    }
	  
 requestSort(key){
	  let direction = 'ascending';
	  if (this.state.sortType === key && this.state.sortDirection === 'ascending') {
	    direction = 'descending';
	  }
	  this.setState({sortType:key});
	  this.setState({sortDirection:direction});
	  let sortedContacts = [...this.state.contacts];
	  if(this.state.sortType !== null){
		  
		  sortedContacts.sort((a, b) => {
			  if (a[this.state.sortType] < b[this.state.sortType]) {
				    return this.state.sortDirection === 'ascending' ? -1 : 1;
		
			  }
				  if (a[this.state.sortType] > b[this.state.sortType]) {
				    return this.state.sortDirection === 'ascending' ? 1 : -1;
				  }
				  return 0;
		  });
		  }
	this.setState({contacts:sortedContacts});
	  }
  getClassNamesFor(name){
	  
	    return this.state.sortType === name ? this.state.sortDirection : undefined;
	  }
	 
		  handleDelete(id){
			
			        fetch('http://localhost:8080/api/contacts', {
			            method: "DELETE",
			            headers: {
			                "content-type": "application/json",
			            },
			            body: JSON.stringify(id),
			        })
			        .then(response => response.json());
			        window.location.reload();
			    
		  }
		   handleSave(contact){
		        fetch('http://localhost:8080/api/contacts', {
		            method: "PUT",
		            headers: {
		                "content-type": "application/json",
		            },
		            body: JSON.stringify(contact),
		        })
		        .then(response => response.json());
		        window.location.reload();
		    
	}
		   
	handleChange(event,editedId){
		const updatedContacts = this.state.contacts.map(contact =>
        contact.id === editedId ? {...contact, [event.target.name]: event.target.value} : contact
    );
		this.setState({contacts:updatedContacts});
	}
	render(){return(
			  <div className="row">
				  <div className="col-12">
				  	<table>
				  		<thead>
				  		<tr>
						  <th><button
					      type="button" 
					          onClick={() => this.requestSort('firstName')}
					          className={this.getClassNamesFor('firstName')}
					        >First name</button></th>
						  <th><button   type="button"
					          onClick={() => this.requestSort('lastName')}
					      className={this.getClassNamesFor('lastName')}>Last name</button></th>
						  <th><button    type="button"
					          onClick={() => this.requestSort('phone')}
					      className={this.getClassNamesFor('phone')}>Phone</button></th>
						  <th><button    type="button"
					          onClick={() => this.requestSort('address')}
					      className={this.getClassNamesFor('address')}>Address</button></th>
						  <th><button    type="button"
					          onClick={() => this.requestSort('email')}
					      className={this.getClassNamesFor('email')}>Email</button></th>
						  <th>Options</th>
						 </tr>
						</thead>
					   <tbody>
				        {this.state.contacts.map(contact => (
				          <tr key={contact.id}>
				            <td><input value={contact.firstName} name="firstName" onChange={e=>this.handleChange(e,contact.id)}/></td>
				            <td><input value={contact.lastName} name="lastName" onChange={e=>this.handleChange(e,contact.id)}/></td>
				            <td><input value={contact.phone} name="phone" onChange={e=>this.handleChange(e,contact.id)}/></td>
				            <td><input value={contact.address} name="address" onChange={e=>this.handleChange(e,contact.id)}/></td>
				            <td><input value={contact.email} name="email" onChange={e=>this.handleChange(e,contact.id)}/></td>
				            <td><button type="button" onClick={()=>this.handleDelete(contact.id)}>Delete</button><button type="button" onClick={()=>this.handleSave(contact)}>Save updates</button></td>
				           </tr>
				        ))}
				      </tbody>
				  </table>
			  </div>
			  </div>
	)}
	
}

