import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';

const Task = props => (
    <tr>
        <td>
            {props.task.task_completed ? 
            (<div className="btn green">Checked</div>) 
            :  
            (<div className="btn green">Unchecked</div>)}
        </td >
        <td>{props.task.task_description}</td>
        <td><Moment format="DD-MM-YYYY">{props.task.due_date}</Moment></td>
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
                }>Restore</div>
        </td>
    </tr>
)

export default class TrashList extends Component {

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
            if (currentTask.task_deleted){
                return <Task task={currentTask} key={i} />;
            } else {
                return ''
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Trash</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Check/Uncheck</th>
                            <th>Description</th>
                            <th>Due Date</th>
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