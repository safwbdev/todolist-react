import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";

export default class EditTask extends Component {

    constructor(props) {
        super(props);

        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_description: '',
            due_date: new Date(),
            task_completed: '',
            date_completed: false,
            task_deleted: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/tasks/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    task_description: response.data.task_description,
                    // due_date: response.data.due_date,
                    task_completed: response.data.task_completed,
                    date_completed: response.data.date_completed,
                    task_deleted: response.data.task_deleted
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeTaskDescription(e) {
        this.setState({
            task_description: e.target.value
        });
    }

    onChangeDueDate = date => {
        this.setState({
            due_date: date
        });
    };

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            task_description: this.state.task_description,
            due_date: this.state.due_date,
            task_completed: this.state.task_completed,
            date_completed: this.state.date_completed,
            task_deleted: this.state.task_deleted
        };
        axios.post('http://localhost:4000/tasks/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        {this.props.history.push(!this.state.task_completed ? ('/') : ('/completed'))}
                        
    }

    render() {
        return (
            <div>
                <h4>Update Todo</h4>
                <form onSubmit={this.onSubmit}>
                     <div className="input-field col s6">
                        <div>Task Description</div>
                        <input 
                            id="task_desc" 
                            type="text" 
                            className="validate"
                            placeholder="Type in a Task"
                            value={this.state.task_description}
                            onChange={this.onChangeTaskDescription}
                        />
                    </div>
                    <div className="input-field col s6">
                        <div>Select a Due Date</div>
                        <DatePicker
                            selected={this.state.due_date}
                            placeholder="Due Date"
                            onChange={this.onChangeDueDate} 
                        />
                    </div>
                    <div className="input-field col s12">
                        {!this.state.task_completed ? (<Link to='/' className="btn btn-primary">Go Back</Link>) : (<Link to='/completed' className="btn btn-primary">Go Back</Link>)}
                        {' '}
                        {(this.state.task_description ==='') || (this.state.due_date ==='') ? 
                            (<input type="submit" value="Update" className="btn btn-primary"  disabled="disabled"/>) 
                            :  
                            (<input type="submit" value="Update" className="btn btn-primary" />)}
                    </div>
                </form>
            </div>
        )
    }
}