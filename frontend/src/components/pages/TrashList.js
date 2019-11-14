import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const Task = props => (
    <tr>
        <td>
            <div className="z-depth-0 btn transparent black-text">
            {props.task.task_completed ? (<i className="fa fa-check-square-o" ></i>) : (<i className="fa fa-square-o" ></i>)}
            </div>
        </td >
        <td>{props.task.task_description}</td>
        <td className="hide-on-med-and-down"><Moment format="DD-MM-YYYY">{props.task.due_date}</Moment></td>
        <td className="center">
            <div className="waves-effect waves-light btn amber darken-4" onClick={() => 
                axios.post('http://localhost:4000/tasks/update/'+ props.task._id, 
                {
                    task_description: props.task.task_description,
                    due_date: props.task.due_date,
                    task_completed: props.task.task_completed,
                    date_completed: props.task.date_completed,
                    task_deleted: false
                })

            .then(res => console.log(res.data))
                }>
                    <span><i className="fa fa-undo"></i></span><span className="hide-on-med-and-down">{' '}Restore</span>
                </div>
        </td>
    </tr>
)

export default class TrashList extends Component {

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
        axios.get('http://localhost:4000/tasks/')
            .then(response => {
                this.setState({tasks: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    taskList() {
        return this.state.tasks.map(function(currentTask, i) {
            if (currentTask.task_deleted){
                return <Task task={currentTask} key={i} />;
            } else {
                return null;
            }
        });
    }

    render() {
        return (
            <div>
                <h4>Trash</h4>
                <table className="table table-striped">
                    <thead className="hide-on-med-and-down">
                        <tr>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th className="center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.taskList()}</tbody>
                </table>
            </div>
        )
    }
}