# vue+rem布局h5模板

## 须知：

1、默认设计图尺寸 宽度750，测量多少写多少px就ok;</br>
2、px会自动转换为rem单位，实现弹性布局;</br>
3、字体不要转rem（原因自己查），为了避免被转为rem  ，需要在font-size后加/*px*/    举个栗子：```font-size:14px;/*px*/ ```;</br>
4、css预处理区用的stylus 已经内置了，也推荐用这个因为是基于node的，无须安装ruby环境;</br>
5、在webview下如果安卓手机设置了字体大小，那么rem布局就凉了，所以最好让andriod同志们加上，如下代码设置webview默认字体,在每个webview配置
 ```webview.getSettings().setTextZoom(100)```
  坦白的讲这个坑我找了一礼拜，因为我手机把字体放大了，所以rem布局有的地方就乱了。我找的方向还是手机适配的问题。嗨距离出家还早着呢

## 5/5s效果图
![Image text](https://github.com/proactivefly/staticFolder/blob/master/img/5s.png)

## 6/6s效果图
![Image text](https://github.com/proactivefly/staticFolder/blob/master/img/6.png)

## 安卓手机效果图
![Image text](https://github.com/proactivefly/staticFolder/blob/master/img/7.png)


#基本上各种手机效果是一样的，弹性布局。
