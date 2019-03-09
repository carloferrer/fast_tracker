import { Router as ExpressRouter} from 'express';
import * as controller from './controller';

const router = ExpressRouter();

router.get('/', (req, res) => res.json({
	status: 'API working',
	message: 'Welcome to fast_tracker',
}));

router.route('/item')
  .get(controller.readLine)
  .post(controller.createLine);

router.route('/item/:id')
  .patch(controller.updateLine)
  .put(controller.updateLine)
  .delete(controller.deleteLine);

export default router;