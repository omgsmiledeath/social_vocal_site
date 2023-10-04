export interface ReducerEntry {
    id:number,
    date:Date,
    checked:boolean,
    disabled:boolean,
    status:string
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
    date:number,
    text:string
}
export interface NewEntry{
     hourEntries: ReducerEntry[], 
     owner: string, 
     phone: string, 
     status: string,
     statusText: StatusText[] 
    }
