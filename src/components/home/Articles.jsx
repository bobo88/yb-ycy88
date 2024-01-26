import React, { useState, useEffect } from 'react';
import { Collapse, Divider, Spin, Button } from 'antd';
import { getArticleList } from '@/api/index.js';

const { Panel } = Collapse;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState({});
  const titleMap = {
    tools: '前端工程化',
    vue: 'VUE系列',
    react: 'React系列',
    ts: 'Typescript系列',
    node: 'Node系列',
    mp: '小程序专题',
    leetcode: '算法系列',
  };

  useEffect(() => {
    (async () => {
      const articlesData = await getArticleList();
      setArticles(articlesData);
      setLoading(false);
     })();
   }, []);


  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="project-cases-box mb20">
      <Divider orientation="left">博客文档列表</Divider>
      {loading ? (
        <div className='tc'>
          <Spin />
        </div>
        ) : (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          {
            Object.keys(titleMap).map((cItem, index) => {
              console.log(cItem, index)
              return (
                <Panel header={titleMap[cItem]} key={index+1}>
                  {
                    articles[cItem].map(item => {
                      return (
                        <a href={`https://docs.ycy88.com${item[0]}.html`} target="_blank" rel="noreferrer" key={item[0] + item[1]}>
                          <Button type="link">
                            { item[1] }
                          </Button>
                        </a>
                      )
                    })
                  }
                </Panel>
              )
            })
          }
        </Collapse>
      )}
    </div>
  );
};

export default App;