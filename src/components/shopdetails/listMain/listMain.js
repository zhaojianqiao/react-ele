import React from 'react'
import Tabs from '../tabs/tabs_con.js'

export default class ListMain extends React.Component{
    callback(key){
        console.log('onChange', key);
    }
    handleTabClick(key){
        console.log('onTabClick', key);
    }
    render(){
        return(
            <div>
                <Tabs/>
            </div>
        )
    }
}
