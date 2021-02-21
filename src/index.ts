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

  const post = orm.em.create(Post, { title: 'my first post' });
  await orm.em.persistAndFlush(post); // can also use .nativeInsert
  console.log('---------------sql 2------------------');
  await orm.em.nativeInsert(Post, { title: 'my first post 2' });
};

main().catch(err => console.log(err));
