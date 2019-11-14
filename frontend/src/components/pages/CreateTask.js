import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangetaskDescription = this.onChangetaskDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_description: '',
            due_date: new Date(),
            task_completed: false,
            date_completed: '',
            task_deleted: false,
        }
    }

    onChangetaskDescription(e) {
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

        console.log(`Form submitted:`);
        console.log(`Task Description: ${this.state.task_description}`);
        console.log(`Due Date: ${this.state.due_date}`);
        console.log(`Task Completed: ${this.state.task_completed}`);
        console.log(`Date Completed: ${this.state.date_completed}`);
        console.log(`Deleted?: ${this.state.task_deleted}`);

        const newTask = {
            task_description: this.state.task_description,
            due_date: this.state.due_date,
            task_completed: false,
            date_completed: '',
            task_deleted: false
        }

        axios.post('http://localhost:4000/tasks/add', newTask)
            .then(res => console.log(res.data));

        this.setState({
            task_description: '',
            due_date: '',
            task_completed: false,
            date_completed: '',
            task_deleted: false
        })

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h4>Create New Task</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="input-field col s6">
                        <div>Task Description</div>
                        <input 
                            id="task_desc" 
                            type="text" 
                            className="validate"
                            placeholder="Type in a Task"
                            value={this.state.task_description}
                            onChange={this.onChangetaskDescription}
                             />
                    </div>
                    <div className="input-field col s6">
                        <div>Select a Due Date</div>
                        <DatePicker
                            selected={this.state.due_date}
                            placeholder="Due Date"
                            onChange={this.onChangeDueDate} />
                    </div>
                    <div className="input-field col s12">
                        {(this.state.task_description ==='') || (this.state.due_date ==='') ? 
                            (<input type="submit" value="Create Task" className="btn btn-primary"  disabled="disabled"/>) 
                            :  
                            (<input type="submit" value="Create Task" className="btn btn-primary" />)}
                    </div>
                
                </form>
            </div>
        )
    }
}