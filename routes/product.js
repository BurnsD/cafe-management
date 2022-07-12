const express = require('express');
const connection = require('../connection');
const checkRole = require('../services/checkRole');
const router = express.Router();
var auth = require('../services/authentication');
