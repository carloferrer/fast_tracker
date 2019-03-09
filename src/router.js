import { Router as ExpressRouter} from 'express';
import * as controller from './controller';

const router = ExpressRouter();

router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

router.route('/item')
  .get(controller.read)
  .post(controller.create);

router.route('/item/:id')
  .delete(controller.deleteLine);

export default router;