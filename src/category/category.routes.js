'use strict'

import express from 'express'
import {Router} from 'express'
import { validateJwt } from '../middlewares/validate-jwt.js'
import {createCategory, updateCategory, deleteCategory} from './category.controller.js'

const api = Router()

api.post('/createCategory', [validateJwt], createCategory)
api.put('/updateCategory/:id', [validateJwt], updateCategory)
api.delete('/deleteCategory/:id', [validateJwt], deleteCategory)

export default api