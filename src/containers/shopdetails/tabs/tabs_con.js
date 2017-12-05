import React from 'react'
import Tabs from '../../../components/shopdetails/tabs/tabs.js'
import CommoditySmart from '../commodity/commodity.js'
import EvaluateSmart from '../evaluate/evaluateSmart.js'
import ShopInformationSmart from '../shopInformation/shopInformationSmart.js'

export default class TabsSmart extends React.Component {
    constructor() {
        super()
        this.state = {
            current: false
        }
    }

    handClick() {
        this.setState({
            current: true
        })
    }

    render() {
        const data = [
            {
                title: '商品',
                num: 0
            },
            {
                title: '评价',
                num: 2
            },
            {
                title: '店铺',
                num: 3
            }
        ]
        return (
            <Tabs data={data}>
                <CommoditySmart key={0} id={this.props.id} basicData={this.props.data}/>
                <EvaluateSmart key={1} id={this.props.id}/>
                <ShopInformationSmart key={2} id={this.props.id}/>
            </Tabs>
        )
    }
}