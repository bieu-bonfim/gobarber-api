import { Router } from 'express';

import AuthenticateUserService from '../../modules/users/services/AuthenticateUserService';

const sesionsRouter = Router();

sesionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sesionsRouter;
