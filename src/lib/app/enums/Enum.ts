export default class Enum {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    static all(): Array<Enum> {
        var self: Enum = this;
        const keys = Object.keys(self) as Array<keyof Enum>;

        return keys.map((key: string): Enum => self[key]);
    }

    is(obj: Enum): boolean {
        return obj.name == this.name;
    }
}
