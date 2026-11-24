'use strict';

const bcrypt = require('bcryptjs');
const { users } = require('./store');

// First accounts of a new workspace. Run once, right after the tables exist.
const firstUsers = [
  { email: 'kim@example.com', password: 'Seven green apples 7', role: 'owner' },
  {
    username: 'omar.h',
    password: 'Quiet river walks 42',
    role: 'admin',
  },
];

async function seedUsers() {
  for (const { password, ...profile } of firstUsers) {
    const hash = await bcrypt.hash(password, 12);
    await users.insert({ ...profile, hash });
  }
}

module.exports = { seedUsers };
