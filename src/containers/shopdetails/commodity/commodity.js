import React from 'react'
import Commodity from '../../../components/shopdetails/commodity/commodity.js'
import 'es6-promise'
import 'whatwg-fetch'
/*商品*/

export default class CommoditySmart extends React.Component{
    constructor(){
        super()
        this.state={
            data:null
        }
    }
    componentWillMount(){
        fetch(`/api/shopping/v2/menu?restaurant_id=${this.props.id}`)
            .then(response=>{return response.json()})
            .then(dataJson=>{
                this.setState({
                    data:dataJson
                })
            })
    }
    render(){
        return(
            <Commodity
                basicData={this.props.basicData}
                data={this.state.data}/>
        )
    }
}