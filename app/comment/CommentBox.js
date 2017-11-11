'use strict';
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {

    constructor(props){
        super(props);
        //state 是组件内部的属性，只能在组件内部使用
        this.state = {
            data:[]
        };
        this.getComments();
        setInterval(this.getComments(),3000);//每隔3s执行一下
    }

    getComments(){
        console.log('正在请求数据……');
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: comments => {
                this.setState({data: comments});
            },
            error: (xhr,status,error) => {
                console.log(error);
            }
        });
    }
    render(){
        return (
            <div className='ui comments'>
                <h1>评论</h1>
                <div className='ui divider'></div>
                {/*获取CommentBox的值，并传递给CommentList*/}
                {/*<CommentList data={this.props.data}/>*/}
                {/*根据状态值的更改来动态显示界面内容*/}
                <CommentList data={this.state.data}/>
                <CommentForm/>
            </div>
        );
    }
}
export { CommentBox as default };