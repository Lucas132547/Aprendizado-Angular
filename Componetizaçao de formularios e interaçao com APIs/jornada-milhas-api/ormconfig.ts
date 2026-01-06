import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/jornada.sqlite', // Ensure this is the path
  synchronize: true, 
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};