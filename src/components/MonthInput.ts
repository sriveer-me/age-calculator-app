import Input from "./Input/Input";

export default class MonthInput extends Input {

    protected override readonly placeholderText: string = "mm";
    protected override readonly inputMaxLength: number = 2;

    protected override getLabelName(): string {
        return 'month';
    }

    public inError(): [boolean, string | null] {
        throw new Error("Method not implemented.");
    }
}