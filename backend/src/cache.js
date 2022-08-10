import expressRedisCache from 'express-redis-cache';
import redis from './clients/redis';

const cache = expressRedisCache({
  client: redis,
  expire: 600,
});

export default cache;
