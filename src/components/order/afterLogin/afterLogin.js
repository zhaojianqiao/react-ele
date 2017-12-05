import React from 'react'
import './afterLogin.css'

export default class LoginList extends React.Component{
    render(){
        return(
            <a href="/" className='afterLogin'>
                <div className='afterLogin_body'>
                    <div className='afterLogin_body_head'>
                        <img src="https://fuss10.elemecdn.com/f/0a/106e89ecdd5bb3bce4fc137aab54dpng.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="登陆后列表"/>
                    </div>
                    <div className='afterLogin_body_sub'>
                        <div className='afterLogin_body_sub_head'>
                            <div className='afterLogin_title'>
                                <p className='afterLogin_shop'>天下第一擀面皮（锦绣路店）</p>
                                <p className='afterLogin_ok'>订单已完成</p>
                            </div>
                            <p className='afterLogin_time'>2017-12-4 10:51</p>
                        </div>
                        <div className='afterLogin_dsc'>
                            <p className='afterLogin_dsc_foods'>
                                <span>壹杯卤肉饭+鲜蔬盒+赠饮</span>
                                <span>等1件商品</span>
                            </p>
                            <p className='afterLogin_dsc_price'>¥15.50</p>
                        </div>
                        <div className='shop_again'>
                            <button>
                                再来一单
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}