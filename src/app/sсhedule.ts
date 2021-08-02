export class Schedule {
        constructor(public year: number,
                public month: number,
                public planDate: Date,
                public startNow: boolean,
                public station: string) { }
}
