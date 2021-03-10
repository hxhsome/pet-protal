<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <!--        &copy;  -->
          <h6>Copyright© 2021 All Rights Reserved. </h6>
        </div>

        <div class="col-sm-4">
          <h6>关于我们</h6>
          <p>
          <p>天津农学院&#45;&#45;计算机与信息工程学院</p>
          地址：天津市西青区津静路22号 <br>邮编：300384 <br>电话:&nbsp;&nbsp;&nbsp;xxxx-xxxxxxx
        </div>

        <div class="col-sm-2">
          <h6>导航</h6>
          <ul class="unstyled">
            <li><a href="">主页</a></li>
            <li><a href="">服务</a></li>
            <li><a href="">链接</a></li>
            <li><a href="">联系我们</a></li>
          </ul>
        </div>

        <div class="col-sm-2">
          <h6>Follow us</h6>
          <ul class="unstyled">
            <li><a href="">微博</a></li>
            <li><a href="">微信</a></li>
            <li><a href="">来往</a></li>
          </ul>
        </div>

        <div class="col-sm-2">
          <h6>本网站由<span class="glyphicon glyphicon-heart"></span>Philhao制作</h6>
        </div>
      </div>
    </div>
  </footer><!--页脚结束-->
  <!--  <footer class="navbar-fixed-bottom" style="padding-top: 40px;">-->
  <!--    <div class="jumbotron">-->
  <!--      <div class="container">-->
  <!--        <center>-->
  <!--          <p>Copyright© 2021 All Rights Reserved. </p>-->
  <!--          <p>天津农学院&#45;&#45;计算机与信息工程学院</p>-->
  <!--          地址：天津市西青区津静路22号 邮编：300384&nbsp;&nbsp;&nbsp; 电话:xxxx-xxxxxxx-->
  <!--        </center>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </footer>-->
  <!--  <div class="navbar-fixed-bottom container-fluid footer" style="padding-top: 40px;">-->
  <!--    <div class="row clearfix">-->
  <!--      <div class="col-md-12 column">-->
  <!--        <div class="jumbotron">-->
  <!--          <div class="container">-->
  <!--            <center>-->

  <!--              <p>Copyright© 2021 All Rights Reserved. </p>-->
  <!--              <p>天津农学院&#45;&#45;计算机与信息工程学院</p>-->
  <!--              地址：天津市西青区津静路22号 邮编：300384&nbsp;&nbsp;&nbsp; 电话:xxxx-xxxxxxx-->
  <!--            </center>-->

  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /*脚部的高度*/
  /*background: #6cf;*/
  clear: both;
}

footer {
  background: #333;
  color: #eee;
  font-size: 11px;
  padding: 20px;
}

ul.unstyled {
  list-style: none;
  padding: 0;
}

footer h6 {
  color: white;
}
</style>
