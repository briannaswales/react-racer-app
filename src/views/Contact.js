import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h3>welcome {this.props.name}</h3><br />
                <h6>address: {this.props.address}</h6><br />
                <h6>phone: {this.props.phone}</h6><br />
                <h6>email: {this.props.email}</h6>
            </div>
        )
    }
}
