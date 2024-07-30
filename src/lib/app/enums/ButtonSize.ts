import Enum from "./Enum";

export default class ButtonSize extends Enum {
    static Large = new ButtonSize('Large');
    static Regular = new ButtonSize('Regular');
    static Small = new ButtonSize('Small');
}
