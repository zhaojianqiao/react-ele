import React from 'react'
import Headersmart from './header.js'
import Search from '../../components/index/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'
import H3title from '../../components/index/title/title.js'
import ListLoad from './listLoad.js'
import ReturnTop from '../../components/index/returnTop/returnTop.js'
import ShoppingCart from '../../components/index/shopping/shopping.js'
import { connect } from 'react-redux'
import { login } from '../../reducers/dataState.js'

 class Index extends React.Component{
    componentWillMount(){
        let localstate = this.getLocal('islogin');
        if(localstate){
            this.props.onLogin(localstate)
        }
    }
    getLocal(name){
        return JSON.parse(localStorage.getItem(name))
    }
    render(){
        return(
            <div className='wrapper'>
                <Headersmart/>
                <Search/>
                <Hotsmart/>
                <Bannersmart/>
                <H3title/>
                <ListLoad/>
                <ReturnTop/>
                <ShoppingCart/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        data:state.loginPart,
        data2:state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onLogin:(data)=>{
            dispatch(login(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
