import Input from './Input/Input';

export default class DayInput extends Input {

    protected override readonly placeholderText: string = "dd";
    protected override readonly inputMaxLength: number = 2;

    protected override getLabelName(): string {
        return 'day';
    }

    public inError(): [boolean, string | null] {
        throw new Error('Method not implemented.');
    }
}