// ==UserScript==
// @name                qq dcos sheet always display sort button
// @description         Display the sort button of sheet most front on docs.qq.com

// @name:zh-CN          腾讯文档表格强制显示排序按钮
// @description:zh-CN   腾讯文档表格强制显示排序按钮

// @author              Xiaojianfeng
// @license             MIT
// @icon                https://pub.idqqimg.com/pc/misc/files/20200904/2eb030216d9362bbc6c0df045857b718.png

// @grant               none
// @run-at              document-idle
// @include             https://docs.qq.com/sheet*

// @date                03/15/2021
// @modified            03/15/2021
// @version             0.1.0
// ==/UserScript==

;(function () {
  'use strict'

  let timer = null
  function checkLink() {
    var parent = document.querySelector('.shows-view')
    var sort = document.getElementById('sheet-sort-button')
    if (parent && sort) {
      // parent.appendChild(sort);
      parent.insertBefore(sort, parent.childNodes[0])
      sort.style.setProperty('display', 'inline-block', 'important')

      clearInterval(timer)
    }
  }

  timer = setInterval(checkLink, 100)
})()
