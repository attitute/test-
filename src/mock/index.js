// import Mock from 'mockjs';
// 获取 mock.Random 对象
// const Random = Mock.Random;
//使用mockjs模拟数据
// Mock.mock('/DocSystem/Doc', () => {  //当post或get请求到/api/get/login路由时Mock会拦截请求并返回上面的数据
//     console.log('1111111111111111');
    
//     let list = [];
//     for(let i = 0; i < 3; i++) {
//         let listObject = {
//             title:1
//             // title: Random.csentence(5, 10),//随机生成一段中文文本。
//             // company: Random.csentence(5, 10),
//             // attention_degree: Random.integer(100, 9999),//返回一个随机的整数。
//             // photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
//         }
//         list.push(listObject);
//     }
//     return {
//         data: list
//     }
// })