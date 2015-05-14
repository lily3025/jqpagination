# jqpagination
jquery翻页组件，比较适用于后台管理系统，后台系统一般数据量较大，内容不应该全部渲染出来，一次只渲染当前页的内容，翻页时同时请求渲染请求页的内容

使用说明

添加 jQuery 类库、jqPagination 插件的 JS 和 CSS 文件
<link rel="stylesheet" href="jqpagination.css"/>
<script src="jquery-1.6.2.min.js"></script>
<script src="jquery.jqpagination.min.js"></script>

再需要如下HTML
<div class="pagination">
  <a href="#" class="first" data-action="first">&laquo;</a>
  <a href="#" class="previous" data-action="previous">&lsaquo;</a>
  <input type="text" readonly="readonly" data-max-page="40" />
  <a href="#" class="next" data-action="next">&rsaquo;</a>
  <a href="#" class="last" data-action="last">&raquo;</a>
</div>

最后初始化插件
$('.pagination').jqPagination({
  current_page: 5, //设置当前页 默认为1
  max_page : 40, //设置最大页 默认为1
  page_string : '当前第{current_page}页,共{max_page}页',
  paged : function(page) {
      //回发事件。。。
      }
});

