import React from 'react'
import Evaluate from '../../../components/shopdetails/evaluate/evaluate.js'
import 'es6-promise'

/*评价*/

export default class EvaluateSmart extends React.Component{
    constructor(){
        super();
        this.state={
            evaluateData:[],
            tags:[],
            pj:{}
        }
    }
    componentDidMount(){
        /*头评价*/
        fetch(`/api/ugc//v2/restaurants/${this.props.id}/ratings/scores`)
            .then(response=>{return response.json()})
            .then(dataJson=>{
                this.setState({
                    pj:dataJson
                })
            });

        fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings?has_content=true&offset=0&limit=10`)
            .then(response=>{return response.json()})
            .then(dataJson=>{
                this.setState({
                    evaluateData:dataJson
                })
            });
        /*tags*/
        fetch(`/api/ugc/v2/restaurants/${this.props.id}/ratings/tags`)
            .then(response=>{return response.json()})
            .then(dataJson=>{
                this.setState({
                    tags:dataJson
                })
            });
    }
    render(){
        return(
            <Evaluate pj={this.state.pj} tags={this.state.tags} evaluateData={this.state.evaluateData} id={this.props.id}/>
        )
    }
}