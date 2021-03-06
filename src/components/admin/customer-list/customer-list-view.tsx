import React from 'react';
import { Customer } from '../../../models/customer/customer';
import { CustomerListViewProps } from './customer-list-props-state';
import { Link } from 'react-router-dom';

class CustomerListView extends React.Component<CustomerListViewProps, {customers: Customer[]}> {
    constructor(props: CustomerListViewProps) {
        super(props);
        this.state = {customers: []};
    }
    async componentDidMount() {
        const customers = await this.props.getCustomers({});
        if (customers) {
            this.setState({customers});
        }
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers &&
                         this.state.customers.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>
                                        <Link
                                            to={'/edit-customer/' + customer.name}
                                            title="Edit"
                                        >
                                        <button 
                                            type="button" 
                                            className="btn btn-info"
                                        >
                                            Edit
                                        </button>
                                        </Link>&nbsp;
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                        >Delete
                                        </button>
                                    </td>
                                </tr> 
                            );
                         })}
                    </tbody>
                </table>
            </div>

        );
    }

   
}

export default CustomerListView;