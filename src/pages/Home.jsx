import React from 'react';
import Banner from '@/components/home/Banner'
import Skills from '@/components/home/Skills'
import ProjectCases from '@/components/home/ProjectCases'
import Articles from '@/components/home/Articles'
// import Counter from '@/components/Counter'

const App = () => {

    return (
        <div className='main-wrap'>
            {/* banner 轮播图 */}
            <Banner />

            {/* 技能 */}
            <Skills />
            
            {/* 文章列表 */}
            <Articles />

            {/* 项目案例 */}
            <ProjectCases />

            {/* 其他 */}
            {/* <Counter /> */}
        </div>
    )
}
export default App;
