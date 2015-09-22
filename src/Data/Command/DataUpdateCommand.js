import DataUpdater from "../DataUpdater";

class DataUpdateCommand {
    static execute() {
        return DataUpdater.update();
    }
}

export default DataUpdateCommand;
