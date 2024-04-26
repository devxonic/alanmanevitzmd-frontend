import ApiHandler from './apihandler';
import endpoint from './endpoints';

export const login = body => {
  return ApiHandler().post(endpoint.LOGIN, body);
};

export const signUp = body => {
  return ApiHandler().post(endpoint.SIGNUP, body);
};
