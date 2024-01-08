import IUser from "./iuser";

export default interface IExport {
    export(): Promise<IUser[]>;
}
