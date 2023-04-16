import webAPI from '../webAPI';
import { urlParams } from './types';

export class InstaService {
  getPost = (params: urlParams) => webAPI.get(`/download?url=${params}`);
}