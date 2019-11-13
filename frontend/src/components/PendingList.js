import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Task = props => (
    <tr>
        <td>
            <div className="btn btn-primary" onClick={() => 
                axios.post('http://localhost:4000/tasks/update/'+ props.task._id, 
                {
                    task_description: props.task.task_description,
                    due_date: props.task.due_date,
                    task_completed: true,
                    date_completed: props.task.date_completed,
                    task_deleted: props.task.task_deleted
                })

            .then(res => console.log(res.data))
                }>Check</div>
        </td >
        <td>{props.task.task_description}</td>
        <td>{props.task.due_date}</td>
        <td>
            <Link className="btn btn-primary" to={"/edit/"+props.task._id}>Edit</Link>
            <Link className="btn btn-danger" to={"/edit/"+props.task._id}>Delete</Link>
        </td>
    </tr>
)

export default class PendingList extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.getResults = this.getResults.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/tasks/')
            .then(response => {
                this.setState({tasks: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidUpdate(){
        // axios.get('http://localhost:4000/tasks/')
        //     .then(response => {
        //         this.setState({tasks: response.data});
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }
    getResults(){
        console.log('lol')
    }

    taskList() {
        return this.state.tasks.map(function(currentTask, i) {
            console.log(currentTask)
            if ((!currentTask.task_completed) && (!currentTask.task_deleted))
            return <Task task={currentTask} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Pending Tasks</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Check/Uncheck</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.taskList() }
                    </tbody>
                </table>
            </div>
        )
    }
}