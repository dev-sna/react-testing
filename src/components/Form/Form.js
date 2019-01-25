import React from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import Button from '../../shared/Button/Button';
import './Form.css';
import { onFieldChange, saveTask } from '../../actions/FormActions';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const { taskName } = e.target.elements;
        this.props.saveTask(taskName.value)
    }

    onFieldChange(e){
        const { name, value } = e.target;
        this.props.onFieldChange(name, value);
    }

    render(){
        const { taskName } = this.props;
        return(
            <div className="form">
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <Field
                        name='taskName'
                        onChange={this.onFieldChange}
                        value={taskName}
                    />
                    <Button
                        title='Submit'
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({formState}) => {
    return formState;
}

export default connect(mapStateToProps, {
    onFieldChange,
    saveTask
})(Form);