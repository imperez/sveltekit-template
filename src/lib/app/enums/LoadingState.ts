import Enum from "./Enum";

export default class LoadingState extends Enum {
    static None = new LoadingState('None');
    static Loading = new LoadingState('Loading');
    static Error = new LoadingState('Error');
    static Complete = new LoadingState('Complete');
}
