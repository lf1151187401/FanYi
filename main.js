#!/usr/bin/env node

let process = require("process");
//node 数据请求
let superagent = require("superagent")
// 转码
let urlencode = require("urlencode")
let word = process.argv.splice(2).join(" ")
superagent.get(`http://fanyi.youdao.com/openapi.do?keyfrom=toaijf&key=868480929&type=data&doctype=json&version=1.1&q=${urlencode(word)}`).end((err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res.body.translation[0])
    }
})
