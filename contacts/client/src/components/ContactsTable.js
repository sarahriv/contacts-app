import React from 'react'

const useSortableData = (items, config = null) => {
	  const [sortConfig, setSortConfig] = React.useState(config);

	  const sortedItems = React.useMemo(() => {
	    let sortableItems = [...items];
	    if (sortConfig !== null) {
	      sortableItems.sort((a, b) => {
	        if (a[sortConfig.key] < b[sortConfig.key]) {
	          return sortConfig.direction === 'ascending' ? -1 : 1;
	        }
	        if (a[sortConfig.key] > b[sortConfig.key]) {
	          return sortConfig.direction === 'ascending' ? 1 : -1;
	        }
	        return 0;
	      });
	    }
	    return sortableItems;
	  }, [items, sortConfig]);

	  const requestSort = (key) => {
	    let direction = 'ascending';
	    if (
	      sortConfig &&
	      sortConfig.key === key &&
	      sortConfig.direction === 'ascending'
	    ) {
	      direction = 'descending';
	    }
	    setSortConfig({ key, direction });
	  };

	  return { items: sortedItems, requestSort, sortConfig };
	};

const ContactsTable = (props) =>{
	const { items, requestSort, sortConfig } = useSortableData(props.contacts);
	  const getClassNamesFor = (name) => {
	    if (!sortConfig) {
	      return;
	    }
	    return sortConfig.key === name ? sortConfig.direction : undefined;
	  };
	return(
	  <div className="row">
	  <div className="col-12">
	  <table>
	  <thead>
	  <tr>
	  <th><button
      type="button"
          onClick={() => requestSort('firstName')}
          className={getClassNamesFor('firstName')}
        >First name</button></th>
	  <th><button    type="button"
          onClick={() => requestSort('lastName')}
      className={getClassNamesFor('lastName')}>Last name</button></th>
	  <th><button    type="button"
          onClick={() => requestSort('phone')}
      className={getClassNamesFor('phone')}>Phone</button></th>
	  <th><button    type="button"
          onClick={() => requestSort('address')}
      className={getClassNamesFor('address')}>Address</button></th>
	  <th><button    type="button"
          onClick={() => requestSort('email')}
      className={getClassNamesFor('email')}>Email</button></th>
	  <th>Options</th>
	  </tr>
	  </thead>
	   <tbody>
        {items.map(contact => (
          <tr key={contact.id}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>{contact.address}</td>
            <td>{contact.email}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
	  </table>
	  </div>
	  </div>
	
)};
	export default ContactsTable;	
