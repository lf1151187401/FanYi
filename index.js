#!/usr/bin/env node

//定义命令行
let inquirer = require("inquirer")

//node 数据请求
let superagent = require("superagent")
// 转码
let urlencode = require("urlencode")

//定义问题
let question = [
    {
        type: "input",
        name: "word",
        message: "请输入您要翻译的内容",
    }
]

inquirer.prompt(question).then(answers => {
    let word = answers.word
    superagent.get(`http://fanyi.youdao.com/openapi.do?keyfrom=toaijf&key=868480929&type=data&doctype=json&version=1.1&q=${urlencode(word)}`).end((err, res) => {
        console.log(res.body.translation[0])
    })
})


