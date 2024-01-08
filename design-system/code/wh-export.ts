import IExport from '../interfaces/iexport'
import IUser from '../interfaces/iuser';

// WH Structuer = {
//     first_name: string;
//     last_name: string;
// }

export default class WHExport implements  IExport {
     // connect to db
    // read data from db
    // return user data with unify structure
    
    export(): Promise<IUser[]> {
        // firstName <- first_name
        // lastName <- last_name
        // address <- ''
        throw new Error('Method not implemented.');
    }
}
