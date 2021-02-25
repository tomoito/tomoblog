---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

## 本題の場合も、親が「子が Fragment を返すこと」を知っている可能性が高い

## 本題の場合も、親が「子が Fragment を返すこと」を知っている可能性が高い

インストールコマンドは `gem install hoge` です
|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

> 引用本文引用本文引用本文引用本文
> 引用本文引用本文引用本文引用本文引用本文引用本文。

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
