'use strict';
import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='ui comments'>
                <h1>评论</h1>
                <div className='ui divider'></div>
                {/*获取CommentBox的值，并传递给CommentList*/}
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>
        );
    }
}

export { CommentBox as default };