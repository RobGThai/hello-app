import { Hello } from '../models/hello.ts'

export class HelloLister {
    readonly name: "HelloLister";

    constructor() {
    }

    list(name: string): Hello[] {
        let result: Hello[] = []

        result.push(new Hello("John Doe"))
        result.push(new Hello("Jane Doe"))

        return result.filter(w => w.name.includes(name))
    }

}
