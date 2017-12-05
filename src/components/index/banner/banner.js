import React from 'react'
import PropTypes from 'prop-types'
import ReactSwipe from 'react-swipe'
import {splitArr} from "../../../data/shuffle"
import './banner.css'

export default class Banner extends React.Component{
    static propTypes = {
        data:PropTypes.array
    }
    constructor(){
        super()
        this.state={
            actualSum:0,
            sum:0,
            currentPage:0
        }
    }
    componentWillMount(){
        let bannerDiv = splitArr(this.props.data,8)
        let sum = bannerDiv.length;
        this.setState({
            sum:sum
        })
    }
    componentDidMount(){
        this.setState({
            actualSum:document.querySelectorAll('.banner_list').length
        })
    }
    render(){
        let bannerDiv=splitArr(this.props.data,8);
        let dd = [];
        let bannerList = bannerDiv.map((value,index)=>{
            dd.push(<li className={`contrdd ${this.state.currentPage===index?'is-active':''}`} data-index={this.state.current>0?'11':'222'} ref={(li)=>{this.li=li}}  key={index}>{this.state.current}</li>);
            return (
                <div className='banner_list' key={index}>
                    {value.map((childValue,indexChild)=>{
                        let imgValue=childValue.image_hash.split('');
                        imgValue.splice(3,0,'/');
                        imgValue.splice(1,0,'/');
                        imgValue=imgValue.join('');
                        return(
                            <a href="/" key={indexChild}>
                                <div className="container"><img alt={childValue.description} src={`//fuss10.elemecdn.com/${imgValue}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`}/></div>
                                <span className='title'>{childValue.name}</span>
                            </a>
                        )
                    })}
                </div>
            )
        })
        let call=(index, elem)=>{
            this.setState({
                currentPage:this.state.sum<this.state.actualSum?(index)%2:index
            })
        }
        let opt={
            callback(index, elem){
                call(index, elem)
            }
        }
        return(
            <div className='banner'>
                <ReactSwipe className="carousel" ref={(reactSwipe)=>{this.reactSwipe=reactSwipe}} swipeOptions={opt}>
                    {bannerList}
                </ReactSwipe>
                <ul className='baner_dd'>
                    {dd}
                </ul>
            </div>
        )
    }
}