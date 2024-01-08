import DBExport from "./code/db-export";
import S3Export from "./code/s3-export";
import WHExport from "./code/wh-export";
import IExport from "./interfaces/iexport";

const url = 'http://walla.co.il';

const dbo = new DBExport();
const s3o = new S3Export();
const who = new WHExport();

const exportData = Promise.all([dbo.export(), s3o.export(), who.export()]).then(([d1, d2, d3]) => {
    const users = d1.concat(d2).concat(d3);

    // send to upload Url JSON.stringify(users);

    // for(const user of users) {
    //     user.firstName
    // }
});

// const ar1 = [a, b, c]
// const ar2 = [a, b, c, d]


function foo(exp: IExport ) {
    exp.export()
}
