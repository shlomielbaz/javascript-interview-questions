import IExport from "../interfaces/iexport";
import IUser from "../interfaces/iuser";

// S3 Structuer = {
//     firstname: string;
//     lastname: string;
// }


export default class S3Export implements  IExport {
     // connect to db
    // read data from db
    // return user data with unify structure

    export(): Promise<IUser[]> {
        // firstName <- firstname
        // lastName <- lastname
        // address <- ''
        throw new Error("Method not implemented.");
    }
}
