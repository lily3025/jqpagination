/*!
 * jqPagination, a jQuery pagination plugin (obviously)
 *
 * Copyright (C) 2011 Ben Everard
 *
 * http://beneverard.github.com/jqPagination
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *     
 */(function(e){"use strict";e.jqPagination=function(t,n){var r=this;r.$el=e(t),r.el=t,r.$input=r.$el.find("input"),r.$el.data("jqPagination",r),r.init=function(){r.options=e.extend({},e.jqPagination.defaultOptions,n),r.options.max_page===null&&(r.$input.data("max-page")!==undefined?r.options.max_page=r.$input.data("max-page"):r.options.max_page=1),r.$input.data("current-page")!==undefined&&r.isNumber(r.$input.data("current-page"))&&(r.options.current_page=r.$input.data("current-page")),r.setPage(),r.$input.on("focus mouseup",function(t){if(t.type==="focusin"){var n=e(this);n.val(n.data("current-page")).select()}if(t.type==="mouseup")return!1}),r.$input.on("blur keydown",function(t){var n=e(this),i=parseInt(r.options.current_page,10);t.keyCode===27&&(n.val(i),n.blur()),t.keyCode===13&&n.blur(),t.type==="focusout"&&r.setPage(n.val())}),r.$el.find("a").on("click",function(t){!t.metaKey&&!t.ctrlKey&&(t.preventDefault(),r.setPage(e(this).data("action")))})},r.setPage=function(e){var t=parseInt(r.options.current_page,10),n=parseInt(r.options.max_page,10);if(isNaN(parseInt(e,10)))switch(e){case"first":e=1;break;case"prev":case"previous":e=t-1;break;case"next":e=t+1;break;case"last":e=n}e=parseInt(e,10),isNaN(e)||e<1||e>n||e===t?(r.setCurrentPage(t),r.setInputValue(t)):(r.setCurrentPage(e),r.setInputValue(e),r.setLinks(e),r.options.paged(e))},r.setCurrentPage=function(e){r.options.current_page=e,r.$input.data("current-page",e)},r.setInputValue=function(e){var t=r.options.page_string,n=r.options.max_page;t=t.replace("{current_page}",e).replace("{max_page}",n),r.$input.val(t)},r.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},r.setLinks=function(e){var t=r.options.link_string,n=parseInt(r.options.current_page,10),i=parseInt(r.options.max_page,10);if(t!==""){var s=n-1;s<1&&(s=1);var o=n+1;o>i&&(o=i),r.$el.find("a.first").attr("href",t.replace("{page_number}","1")),r.$el.find("a.prev, a.previous").attr("href",t.replace("{page_number}",s)),r.$el.find("a.next").attr("href",t.replace("{page_number}",o)),r.$el.find("a.last").attr("href",t.replace("{page_number}",i))}},r.init()},e.jqPagination.defaultOptions={current_page:1,link_string:"",max_page:null,page_string:"Page {current_page} of {max_page}",paged:function(){}},e.fn.jqPagination=function(t){return this.each(function(){new e.jqPagination(this,t)})}})(jQuery);
