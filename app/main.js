'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';

//模拟请求数据
let comments = [
    {"id":1, "author":"李雷","date":"5分钟前","text":"今天天气不错！！！"},
    {"id":2,"author":"韩梅梅","date":"3分钟前","text":"咋们出去耍？"},
    {"id":3,"author":"韩梅梅","date":"刚刚","text":"咋们出去耍？"}
];
//将参数传递给CommentBox组件

//模拟从服务器请求数组 url属性 参数json文件或服务器的端点 备注：json文件里面的数据必须用双引号""
//参数：显示的组件，组件显示的位置  data={comments}
ReactDOM.render(
    <CommentBox url='comments.json'/>,
    document.getElementById('app')
);