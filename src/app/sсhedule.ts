export class Schedule {
        constructor(public year: number,
                public month: number,
                public planDate: Date | null | undefined,
                public startNow: boolean,
                public isAllStations: boolean,
                public station: string) { }
}
