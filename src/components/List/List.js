import React from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from '../../actions/ListActions';
import ListItem from './ListItem';
import { deleteTask } from '../../actions/ListActions';
import './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  onDelete(id) {
    this.props.deleteTask(id);
  }

  render() {
    return (
      <div className="list">
        {this.props.tasks &&
          this.props.tasks.map(task => {
            return (
              <ListItem
                onPressDelete={() => this.onDelete(task.id)}
                key={task.id}
                {...task}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ listState }) => {
  return listState || {};
};

export default connect(
  mapStateToProps,
  {
    getAllTasks,
    deleteTask,
  },
)(List);
