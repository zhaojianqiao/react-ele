import React from 'react';
import './hot.css'
export default class Hot extends React.Component{
    constructor(){
        super()
        this.state = {
            listData:[]
        }
    }
    componentWillMount(){
        if(this.props.hot_data){
            this.setState({
                listData:[...this.props.hot_data]
            })
        }
    }
    render(){
        let currentListData = this.state.listData;
        let listData = currentListData.map((value,index)=>{
            return <a href="/" key={index}>{value.word}</a>
        })
        return(
            <div className="hot">
                <div className="list">
                    {listData}
                </div>
            </div>
        )
    }
}