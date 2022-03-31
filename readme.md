# 用於建立拖曳式的 PDF-Maker

之前在工作中 , 我使用下面的工具 , 製作瀏覽器直接列印 A4 頁面的報表
- 切板特定的 HTML
- 叫出列印的介面 - [print.js](https://printjs.crabbly.com/)
- 將 iframe 中的 html 轉換成 canvas - [html2canvas](https://html2canvas.hertzen.com/)
- 將 canvas 截圖 , 並將其塞在 A4 大小的頁面 & 產生 PDF - [jsPDF](https://github.com/parallax/jsPDF)

> 詳情請看 [列印功能 ( PrintCtrl.print )](https://andrew781026.github.io/docusaurus-site/docs/ysdt-component/print)

但是 , 這東西有個缺點 , 那就是如果報表的格式更換時 , `前端工程師` 就要切板新頁面 , 這樣好像還蠻怪的 

因此 , 我們可以來研究一下 JAVA 常用的報表軟體 Jasper Report 他是如何處理這個問題 & 模仿他 , 產生解決的方式

## 研究結果

### 1.建立 .jasper 當作 PDF 的設計模板 

### 2.將資料源輸入進 .jasper 設定的區塊產生 .jrxml 檔案

### 3.利用 .jrxml 檔案產生 PDF 檔案

設定項目 : 

1. 紙張大小 
2. 物件的位置 
3. 資料來源 
4. 字體類型 ? 如果走 jsPDF 會遇到字體轉換的問題 , 也許可以走 HTTP Server + IFRAME 的方向 
5. 頁首 . 頁尾 (每頁都會出現的部分)
6. Table 表格設計 ? 
