import React from 'react';
/* 发现组件*/
import Find from './find/find.js'
/* 订单组件 */
import Order from './order/order.js'
/* 我的组件 */
import My from './my/my.js'
/* 登录组件 */
import Login from './login/login.js'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Footer from '../components/footer/footer.js'
import MessageSmart from './message/message.js'
import Index from './index/index.js'
import ShopDetails from './shopdetails/shopDetails.js'

export default class App extends React.Component {
    render() {
        const Shop = ({match}) => {
            return <ShopDetails id={match.params.id} address={match.params.geohash}/>
        }
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route  path='/find' component={Find}/>
                    <Route  path='/order' component={Order}/>
                    <Route  path='/my' component={My}/>
                    <Switch>
                        <Route  path='/login' component={Login}/>
                        <Route  path='/message' component={MessageSmart}/>
                        <Route  path='/shop/:geohash/:id' component={Shop}/>
                        <Footer/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


