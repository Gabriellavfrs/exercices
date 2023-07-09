// src/services/employee.service.js

const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll();

  return users;
};

module.exports = { getAll };