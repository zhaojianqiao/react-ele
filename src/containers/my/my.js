import React from 'react'
import Header from '../../components/header/header'
import MyunLogin from '../../components/my/myunLogin/myunLogin.js'

export default class My extends React.Component{
    render(){
        return(
            <div>
                <Header but={'login'} title={'我的'}/>
                <MyunLogin/>
            </div>
        )
    }
}