import React from 'react';
import Header from '../../components/index/header/header.js'
import {weather,address} from '../../data/data'

export default class Headersmart extends React.Component{
    constructor(){
        super()
        this.state={
            temperature: '',
            declaration: '',
            image_hash: '',
            address: ''
        }
    }
    componentWillMount() {
        this.setState({
            temperature: weather.temperature,
            description: weather.description,
            image_hash: weather.image_hash,
            address: address.address
        })
    }
    render(){
        return(
            <div>
                <Header data={ this.state } />
            </div>
        )
    }
}