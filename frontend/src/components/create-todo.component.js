import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangetaskDescription = this.onChangetaskDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_description: '',
            due_date: '',
            task_completed: false,
            date_completed: '',
            task_deleted: false
        }
    }

    onChangetaskDescription(e) {
        this.setState({
            task_description: e.target.value
        });
    }

    onChangeDueDate(e) {
        this.setState({
            due_date: e.target.value
        });
    }


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
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.task_description}
                                onChange={this.onChangetaskDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Due Date: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.due_date}
                                onChange={this.onChangeDueDate}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Task" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}