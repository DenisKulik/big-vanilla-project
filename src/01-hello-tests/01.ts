export function sum(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function splitIntoWords(sentence: string): Array<string> {
    const words = sentence.toLowerCase().split(' ');

    return words.filter(word => word.length > 0 && word !== '-')
                .map(word => word.replace('!', '')
                                 .replace('.', '')
                                 .replace(',', ''));
}