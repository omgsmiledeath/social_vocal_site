export interface ReducerEntry {
    id:number,
    date:Date,
    checked:boolean,
    disabled:boolean,
    status:string
}

export interface IReducerAction {
    type:string
}
export interface IChangeInputIdAction extends IReducerAction {
    checkedId:number;
}
export interface IChangeDayAction extends IReducerAction{
    day:Date
}
export interface IChangeTextInputAction extends IReducerAction{
    value:string
}
export interface IGetEntriesAction extends IReducerAction {
    value:QueryEntry[]
}
export interface IBoolAction extends IReducerAction {
    value:boolean
}
export interface QueryEntry{
    date:Date,
    status:string,
    owner:string,
    desc:string
}
export interface ReducerInitialState {
    entries:QueryEntry[],
    inputEntries:ReducerEntry[],
    selectedDay:Date,
    newEntry:NewEntry
}

// export type NewEntry =  {
//     date: Date,
//     status: string,
//     owner:string,
//     desc:string
// }
type StatusText = {
    date:Date,
    text:string
}
export interface NewEntry{
     hourEntries: ReducerEntry[], 
     owner: string, 
     phone: string, 
     status: string,
     statusText: StatusText[] 
    }
