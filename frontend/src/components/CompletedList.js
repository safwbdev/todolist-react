import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

// import 'moment-timezone';

const Task = props => (
    <tr>
        <td>
            <div className="waves-effect waves-light btn green" onClick={() => 
                axios.post('http://localhost:4000/tasks/update/'+ props.task._id, 
                {
                    task_description: props.task.task_description,
                    due_date: props.task.due_date,
                    task_completed: false,
                    date_completed: '',
                    task_deleted: props.task.task_deleted
                })

            .then(res => console.log(res.data))
                }>Uncheck</div>
        </td>
        <td>{props.task.task_description}</td>
        <td>
            <Moment format="DD-MM-YYYY">{props.task.due_date}</Moment>
        </td>
        <td>
            <Moment format="DD-MM-YYYY">{props.task.date_completed}</Moment>
        </td>
        <td className="center">
            <Link className="waves-effect waves-light btn blue" to={"/edit/"+props.task._id}>Edit</Link>{' '}
            <div className="waves-effect waves-light btn red darken-3" onClick={() => 
                axios.post('http://localhost:4000/tasks/update/'+ props.task._id, 
                {
                    task_description: props.task.task_description,
                    due_date: props.task.due_date,
                    task_completed: props.task.task_completed,
                    date_completed: props.task.date_completed,
                    task_deleted: true
                })

            .then(res => console.log(res.data))
                }>Delete</div>
        </td>
    </tr>
)

export default class PendingList extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
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

    taskList() {
        return this.state.tasks.map(function(currentTask, i) {

            if ((currentTask.task_completed) && (!currentTask.task_deleted)){
                return <Task task={currentTask} key={i} />;
            } else {
                return ''
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Completed Tasks</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Check/Uncheck</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Date Completed</th>
                            <th className="center">Actions</th>
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