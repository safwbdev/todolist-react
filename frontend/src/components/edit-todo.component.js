import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeDueDate = this.onChangeDueDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_description: '',
            due_date: '',
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
                    due_date: response.data.due_date,
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

    onChangeDueDate(e) {
        this.setState({
            due_date: e.target.value
        });
    }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    // onChangeTodoCompleted(e) {
    //     this.setState({
    //         todo_completed: !this.state.todo_completed
    //     });
    // }

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

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.task_description}
                                onChange={this.onChangeTaskDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.due_date}
                                onChange={this.onChangeDueDate}
                                />
                    </div>
                    <div className="form-group">
                        <br/>
                        <div className="form-group">
                            <Link to='/' className="btn btn-primary">Go Back</Link>
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}