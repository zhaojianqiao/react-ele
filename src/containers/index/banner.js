import React from 'react'
import Banner from '../../components/index/banner/banner.js'
import {bannerData} from "../../data/data"

export default class Bannersmart extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        this.setState({
            data:bannerData[0].entries
        })
    }
    render(){
        return(
            <Banner data={this.state.data}/>
        )
    }
}