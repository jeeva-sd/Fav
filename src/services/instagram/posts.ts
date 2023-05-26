import { WebApiResult } from '~/state/duck/instagram';
import webAPI from '../webAPI';
import { urlParams } from './types';

export class InstaService {
  getPost = (params: urlParams) => webAPI.get(`/download?url=${params}`);
  subscribeEmail = async (params: urlParams): Promise<WebApiResult> => webAPI.post('/fav/subscribe', params);
  contact = (params: urlParams) => webAPI.post('/fav/contact', params);
}