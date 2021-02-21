import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Posts';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'seddit',
    user: 'postgres',
    password: 'postgres',
    type: 'postgresql',
    debug: !__prod__,
  });
};
