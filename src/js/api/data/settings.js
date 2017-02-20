import Auth from '../../auth';
import isEmpty from '../../utils/isEmpty';

/* eslint-disable camelcase */

export const settings = {
  "access_token": Auth.getUserToken(),
  "group_id": Auth.getGroupId()
}

