export class DataGridHelper {
    setStyle(event: any): void {
       
            if (event.rowType === "data" && event.data) {
                const usedOnVn = event.data?.usedOnVn;
                if (usedOnVn === false) {
                    event.cellElement?.classList.add("warning");
                }
                if (usedOnVn === true) {
                    event.cellElement?.classList.add("success");
                }
            }
        
    }
}