import { createConnection } from "typeorm";

export const conectionDB = () => {
    createConnection().then(() => {
        console.log('======================')
        console.log('*   Connected database ;)  *')
        console.log('======================')
    }).catch((e) => console.log(e))
}