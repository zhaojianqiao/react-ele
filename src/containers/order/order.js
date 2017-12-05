import React from 'react'
import Header from '../../components/header/header.js'
import UnLogin from '../../components/order/unLogin/unLogin.js'

export default class Order extends React.Component{
    render(){
        return(
            <div>
                <Header but={'login'} title={'订单'}/>
                <UnLogin/>
            </div>
        )
    }
}