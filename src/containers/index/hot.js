import React from 'react';
import {hot_data} from "../../data/data";
import {shuffle} from "../../data/shuffle"
import Hot from '../../components/index/hot/hot.js'

export default class Hotsmart extends React.Component{
    constructor(){
        super();
        this.state={
            hot_data:[]
        }
    }
    componentWillMount(){
        if(hot_data){
            this.setState({
                hot_data:shuffle(hot_data)
            })
        }
    }
    render(){
        return(
            <Hot hot_data={this.state.hot_data}/>
        )
    }
}