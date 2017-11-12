'use strict';

import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();//阻止默认事件
        //console.log("表单提交事件……");
        //获取用户的输入数据使用refs 属性
        let author = this.refs.author.value,
            text = this.refs.text.value;
        console.log("author: " + author + "  text: " + text);
        //提交的数据传递给父组件处理
        //在父组件中定义一个方法，并在子组件中调用即可
        let i = 5;//模拟key
        i += i;
        this.props.handleSubmitComments({"id": i, "author": author, "date": "刚刚", "text": text});//传递一个json数据对象
    }

    //添加事件(event) onClick onKeydown onCopy onSubmit
    render() {
        //必须要使用bind指定this的作用域，否则会提示找不到refs属性
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className='field'>
                    <input type='text' placeholder="姓名" ref="author"/>
                </div>
                <div className='field'>
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type='submit' className='ui blue button'>
                    添加评论
                </button>
            </form>
        );
    }
}

export {CommentForm as default}