import React from 'react'
import Entry from '../../../components/find/entry/entry.js'
import {entryData} from "../../../data/data"

export default class EntrySmart extends React.Component{
    constructor(){
        super()
        this.state={
            entryData:[]
        }
    }
    componentWillMount(){
        this.setState({
            entryData
        })
    }
    render(){
        return(
            <Entry data={this.state.entryData}/>
        )
    }
}