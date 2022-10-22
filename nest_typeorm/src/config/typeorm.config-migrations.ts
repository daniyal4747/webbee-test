import { DataSource, DataSourceOptions } from 'typeorm';
import { typeOrmConfig } from './typeorm.config';
export const AppDataSource = new DataSource(typeOrmConfig as DataSourceOptions);

AppDataSource.initialize()
    .then(() => {
        console.log("here you can start to work with your database")
    })
    .catch((error) => console.log(error))