import React, { Component } from 'react';
import Message from 'bee-message';
import { Button } from 'tinper-bee';

const info = () => {
    Message.create({content: '单据状态更新，请在审批中心查看最新状态。', color: 'info'});
    setTimeout(()=>{
        console.log('tinper-bee 重置')
        Message.config({
            top: 350,
            duration: 10,
        });
    },2000)
};

export default class App extends Component{

    state={
        _title:"我是变量的多余!"
    }

    render(){
        let _title = "我是变量的多余!"; 

        return (
            <div title="你好,我是属性的多语">
                 欢迎使用 MDD 模型驱动 !!! 
                <p>{_title}</p>
            </div>
        )
    }
}