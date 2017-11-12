'use strict';
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {

    constructor(props){
        super(props);
        //state 是组件私有的属性，只能在组件内部使用
        this.state = {
            data:[]
        };
        //可以使用websocket与服务器进行通信
        this.getComments();
        setInterval(() => this.getComments(),5000);//每隔5s执行一下
    }

    //处理子组件传递给父组件的数据
    handleSubmitComments(comment){
        console.log("将子组件的数据传递给了父组件");
        console.log(comment);

        let comments = this.state.data,
            newComments = comments.concat(comment);
        //数据更新，设置state的状态
        this.setState({data:newComments});//使用了this，所以必须要bind this
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
                <CommentForm handleSubmitComments={this.handleSubmitComments.bind(this)}/>
            </div>
        );
    }
}
export { CommentBox as default };