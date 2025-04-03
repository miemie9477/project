# OutLine
0.About this project
1.Update Journal
2.Todo List
3.The format about this project
4.Contact

## About this project

以「買酒網」作為參考雛形的電商網站專案(前端)
連結:[專案報告書]( https://docs.google.com/document/d/1cEVcql3TnH9GEllpDvkUI5ZXAQBUdQUF/edit?usp=drive_link&ouid=101188799150306536840&rtpof=true&sd=true)
* 使用語言: React.js
* 製作日期: 2024.06
* 作者: 
    * kenchen0814@gmail.com
    * jelena0625@gmail.com (我)
<hr/>

## Update Journal: 2024.06.08 Tuesday 22:20
### 咩備忘錄
* 做到cart改變數量

### 給咩的備忘錄
* Admin後台 補傳訂單總金額 到 訂單資料表
* Member後台 補傳訂單總金額與購買的商品詳細資料
* **商品圖的檔名用商品編號**
* 購物車
    * 上面全選要做
    * 把 *已勾選* 的物品傳到結帳頁面(結帳金額也要記得改)，後端才能接資料串API(有溝的才要結帳)
    
* admin
    * 三個資料分三個頁籤
    * 交易資料已經回傳
    * 你修改那個是要怎麼弄??
* member會員頁面
    * 交易資料已經回傳
    * 留言板留言寫好了但還沒測試(大機率是要改)


## Todo
- [ ] 購物車
- [ ] Admin
- [ ] 會員資料修改區
 
*****

## The format about this project

### Build with

>*若有新增其他library請註明*

React.js<br/>
React.bootstrap<br/>
react-router-dom (npm install react-router-dom) <br>
npm install react-icons<br>
npm install js-cookie<br>
npm install react-hook-form<br>

>壓縮檔案前請不要將*node_modules/*一同壓縮


### 資料夾說明
作為example，不要完全照著上面的打<br>
*可以依照實際情況做修改，例如:添加常用物件資料夾 Global*

*命名方式請注意，標示清楚 __哪個功能__ 的 __哪個類別__*

*或是  __哪個類別__ 的 __哪個商品__*
***酒名打英文全名***

```js
//Correct
const Tanqueray;

//Wrong
const Wine;
const Gin;
```

```
project/
|──Client
|   └──src/     # 代碼目錄
|       └──component/   #所有元件存放處
|           |
|           |──BasicFrame/  #誤動，存放網頁基本架構，請勿擅自增加檔案或修改
|           |   |
|           |   |──css/         #用來存放BasicFrame的css檔案
|           |   |──pic/         #用來存放BasicFrame有關的圖檔
|           |   |──frame.js     #主要文件
|           |   └──...          #其他資料夾/檔案    
|           |     
|           └──pages/       #網頁其他頁面
|               |
|               |──HomePage/    #(舉例說明用)用來存放主畫面的頁面
|               |──GinPage/  #(舉例說明用)依照存放的類型作命名
|               └──...          #其他
|──Server
|   |──index.js #entry
|   |──route/
|   |   └── (function page).js #API
|   └──model/ #database connection
```
**元件太多可以視情況增加資料夾，整合方便為主*

### 關於資料

>**有任何問題請先閱讀過[企劃書]("https://docs.google.com/document/d/1b8HA1xJPjE1kEfdy2mb1kw6SG_sZCfPdGCIrihPWm3w/edit?usp=sharing")**

* 參考網站 [買酒網](https://www.my9.com.tw/)

* UI設計圖:<br>
*畫面都只有做大致排版和基礎樣式，並非最後成果，請勿完全按照作業*<br>
https://www.figma.com/file/bLWzJyXruKt9PYAKKPspE0/Untitled?type=design&node-id=0%3A1&mode=design&t=4SxzcpleCIol2qmg-1

* 與專案有關的文檔在以下網址:<br>
https://drive.google.com/drive/folders/1j7-iXBeGXZY4DOuvRrDEiXRdFT7zrTCk?usp=sharing

包含:
* 企畫書
* ER Modeling
* 圖檔
    * 基酒png檔案
    * 網頁常用圖檔

## Contact

**有時候Discord掛請勿打擾時會接不到電話跟訊息，這個時候就直接打我line或mes**


<hr>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
