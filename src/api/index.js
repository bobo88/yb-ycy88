import http from '../utils/http';

/**
 * 获取首页列表
 */
function getArticleList(){
   return  http("get",'/getAllArticles');
}
  
export {
   getArticleList
}