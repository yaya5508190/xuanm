import upload from './upload'
import carousels from './carousels'
import dict from './dict'
import topic from './topic'
import partner from './partner'
import {Router} from 'express'

const router = Router()

export default function (dbs) {
  router.use(upload(dbs))
  router.use((carousels(dbs)))
  router.use((dict(dbs)))
  router.use((topic(dbs)))
  router.use((partner(dbs)))
  return router
}
