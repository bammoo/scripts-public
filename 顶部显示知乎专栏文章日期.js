// ==UserScript==
// @name                顶部显示知乎专栏文章日期
// @namespace           http://tampermonkey.net/
// @description         try to take over the world!

// @author              Xiaojianfeng
// @license             MIT

// @grant               none
// @run-at              document-idle
// @match               https://zhuanlan.zhihu.com/*

// @version             0.2
// ==/UserScript==

;(function () {
  'use strict'
  var target = document.querySelector('.ContentItem-time')
  var date1 = target.innerText
  target.click()
  var date2 = target.innerText
  var newContent = `<span style="margin-right: 20px;">${date1}</span>`
  if (date2 && date2 !== date1) {
    newContent += `<span>${date2}</span>`
  }
  var insertPosition = document.querySelector('.Post-Title')
  insertPosition.insertAdjacentHTML(
    'afterend',
    `<div style="margin-bottom: 15px; font-size:14px; color: #1a1a1a;">${newContent}</div>`
  )
})()
