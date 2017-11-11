'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';

//模拟请求数据
let comments = [
    {'id':1, 'author':'李雷','date':'5分钟前','text':'今天天气不错！！！'},
    {'id':2,'author':'韩梅梅','date':'3分钟前','text':'咋们出去耍？'},
    {'id':3,'author':'李雷','date':'刚刚','text':'走去逛街……'},
];
//将参数传递给CommentBox组件

//参数：显示的组件，组件显示的位置
ReactDOM.render(
    <CommentBox data={comments}/>,
    document.getElementById('app')
);