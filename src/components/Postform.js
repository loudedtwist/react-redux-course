import React, { Component } from 'react'

export default class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                <h2>Postform</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label><br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/><br/>
                    <label>Body</label><br/>
                    <textarea name="body" value={this.state.body} onChange={this.onChange}/><br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
