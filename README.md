# vue+rem布局h5模板

# 须知：
1、默认设计图尺寸 宽度750，测量多少写多少px就ok
2、px会自动转换为rem单位，实现弹性布局
3、字体不要转rem（原因自己查），为了避免被转为rem  ，需要在font-size后加/*px*/    举个栗子：font-size:14px;/*px*/ 
4、css预处理区用的stylus 已经内置了，也推荐用这个因为是基于node的，无须安装ruby环境。
5、如果想让div居中尽量用padding控制，margin:0 auto 在app原生webview下部分机型有兼容性问题。