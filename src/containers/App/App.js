import React from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import './App.css';

export default class App extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="container">
                <Form/>
                <List/>
            </div>
            </div>
        )
    }
}