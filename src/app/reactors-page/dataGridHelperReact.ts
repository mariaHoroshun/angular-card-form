export class DataGridHelperReact {
    setStyle(event: any): void {

        if (event.rowType === "data" && event.data) {
            const isEnabled = event.data?.isEnabled;
            if (isEnabled === false) {
                event.cellElement?.classList.add("warning");
            }
            if (isEnabled === true) {
                event.cellElement?.classList.add("success");
            }
        }
    }
    setRowStyle(event: any): void {
        if (event.rowType === "data" && event.data) {
            const isEnabled = event.data?.isEnabled;
            if (isEnabled === false) {
                event.rowElement?.classList.add("custom-excluded-class");
            }
            if (isEnabled === true) {
                event.rowElement?.classList.add("custom-included-class");
            }
        }
    }
}