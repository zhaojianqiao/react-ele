import React from 'react'
import Header from '../../components/header/header.js'
import ActivitySmart from './activity/ActivitySmart.js'

export default class Find extends React.Component{
    render(){
        return(
            <div>
                <Header title={"发现"}/>
                <ActivitySmart/>
            </div>
        )
    }
}