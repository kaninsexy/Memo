const { create } = require('domain');
const {
  updateTodo,
} = require('../Codecamp/fullTodo/cc6-offline-backend/controllers/todo');
const { destroy } = require('../Codecamp/fullTodo/cc6-offline-backend/mysql');

findOne({ Where: { id: 2 } });
//
findAll({ where: { clever: true } });
//
create({ task: 'google' });
//
// instanceof.update({task:"yahoo"})

//
// updateTodo({task:"yahoo",{where:{id:3}}})

// instanceof.destroy()

// destroy({where:{id:2}}

// ข้อูดีของ JWT
// 1.ไม่ต้องเก็บข้อมูมูลใน DataBase
// 2.Scalable
