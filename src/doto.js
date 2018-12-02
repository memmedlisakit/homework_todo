import React, { Component } from 'react';
import AddTodo from './add_todo';
import DotoItem from './todo_item';


export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [
                {
                    text: "buy some milk today.",
                    status: false,
                    editAble: false
                },
                {
                    text: "homework todo app. :)",
                    status: true,
                    editAble: false
                }
            ],
            newText: ""
        }
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const { todoList } = this.state;
        todoList.push({ text: this.state.newText, status: false });
        this.setState({ todoList, newText: "" });
    }

    handleOnChange = e => {
        this.setState({
            newText: e.target.value
        })
    }

    handleEvent = (index, eventName) => e => {
        const { todoList } = this.state;
        if (eventName === "remove") {
            todoList.splice(index, 1);
        }
        else {
            todoList[index].text = e.target.value
        }
        this.setState({ todoList });
    }

    handleOnClick = (index, name) => e => {
        const { todoList } = this.state;
        todoList[index][name] = !todoList[index][name];
        this.setState({ todoList });
    }

    render() {
        const { newText } = this.state;
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center">Todo List</h2>
                        <AddTodo onSubmit={this.handleOnSubmit} value={newText} onChange={this.handleOnChange} />
                        <table className="table table-hover">
                            <tbody>
                                {
                                    this.state.todoList.map((todo, index) => (
                                        <DotoItem
                                            key={index}
                                            id={index}
                                            todo={todo}
                                            onClick={this.handleOnClick}
                                            event={this.handleEvent}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
