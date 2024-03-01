import Input from "./Input/Input";

export default class YearInput extends Input {

    protected override readonly placeholderText: string = "yyyy";
    protected override readonly inputMaxLength: number = 4;

    protected override getLabelName(): string {
        return 'year';
    }

    public inError(): [boolean, string | null] {
        throw new Error("Method not implemented.");
    }
}