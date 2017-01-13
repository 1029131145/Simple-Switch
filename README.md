### Simple-Switch

``` html
//本次编写使用jQuery版本为 1.8.3
<script type="text/javascript" src="js/183.js"></script>
//引用核心文件
<script type="text/javascript" src="js/simple.switch.min.js"></script>
<link rel="stylesheet" href="css/simple.switch.three.css" type="text/css">
//压缩后的JS文件不到3K
``` 

### HTML:
``` html
<input type="checkbox" class="checkbox" disabled>
<input type="checkbox" class="checkbox" disabled checked>
<input type="checkbox" class="checkbox">
<input type="checkbox" class="checkbox" checked>
``` 
### JavaScript:
``` js
<script>
	$(".checkbox").simpleSwitch();
</script>
``` 
