import {Router} from 'express'
import getErrorPage from '../../controllers/getErrorPage.js'
const router=Router()

router.use(getErrorPage)


export default router