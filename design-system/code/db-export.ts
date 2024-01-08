import IExport from "../interfaces/iexport";
import IUser from "../interfaces/iuser";

// DB Structuer = {
//     fname: string;
//     lname: string;
//     address: string;
// }

export default class DBExport implements IExport {
    // connect to db
    // read data from db
    // return user data with unify structure

    export(): Promise<IUser[]> {
        // firstName <- fname
        // lastName <- lname
        // address <- address

        throw new Error("Method not implemented.");
    }
}
