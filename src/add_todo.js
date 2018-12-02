import React, { Component } from 'react';


export default class AddTodo extends Component {
    render() {
        const { onSubmit, value, onChange } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-9">
                        <div className="form-group">
                            <input value={value} onChange={onChange} className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <button className="btn btn-outline-primary btn-block" type="submit">Add Doto</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
