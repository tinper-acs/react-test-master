import React, { Component } from 'react';
import Message from 'bee-message';
import { Button } from 'tinper-bee';

const info = () => {
    Message.create({content: 'language.template("单据状态更新，请在审批中心查看最新状态。")', color: 'info'});
    setTimeout(()=>{
        console.log('tinper-bee language.template("重置")')
        Message.config({
            top: 350,
            duration: 10,
        });
    },2000)
};

export default class App extends Component{

    state={
        _title:"language.template("我是变量的多余")!"
    }

    render(){
        let _title = "language.template("我是变量的多余")!"; 

        return (
            <div title="language.template("你好,我是属性的多语")">
                 language.template("欢迎使用") MDD language.template("模型驱动") !!! 
                <p>{_title}</p>
            </div>
        )
    }
}
