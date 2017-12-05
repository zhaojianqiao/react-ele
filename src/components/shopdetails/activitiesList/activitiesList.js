import React from 'react'
import './activitiesList.css'

export default class ActivitiesList extends React.Component{
    render(){
        return(
            <div className='activityPage_main_list_div'>
                <span className="activity-logo" style={{color:'rgb(255, 255, 255)',backgroundColor:`#${this.props.value.icon_color}`}}>{this.props.value.icon_name}</span>
                <span className="activity-des">{this.props.value.description}</span>
            </div>
        )
    }
}
