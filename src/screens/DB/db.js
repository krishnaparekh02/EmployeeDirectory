// --------------- LIBRARIES ---------------
import SQLite from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
    return SQLite.openDatabase({name: 'employees.db', location: 'default'});
    // SQLite.openDatabase({name: 'my.db', location: 'Shared'}, successcb, errorcb);
};

export const createMangerTable = async (db: SQLiteDatabase) => {
    // create table if not exists
    const query = `CREATE TABLE manager (
        Id int PRIMARY KEY AUTOINCREMENT,
        Name varchar(255),
    );`;
    await db.executeSql(query);
};

export const createEmployeeTable = async (db: SQLiteDatabase) => {
    // create table if not exists
    const query = `CREATE TABLE employee (
        Id int PRIMARY KEY AUTOINCREMENT,
        ManagerId int,
        Name varchar(255),
        Dob date,
        Mobile_number varchar(10)
    );`;
    await db.executeSql(query);
};

export const InsertManager = async (db: SQLiteDatabase) => {

}; 