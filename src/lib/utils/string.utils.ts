export function capitalize(input: string, firstOfAllWords?: boolean): string {
	if (!firstOfAllWords) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
	let out = "";
	for (const word of input.split(" ")) {
		out += word.charAt(0).toUpperCase() + word.slice(1) + " ";
	}
	return out.slice(0, -1);
}

export function camelToSpacedPascal(input: string): string {
	let result = "";
	let previousChar = "";
	for (const char of input) {
		if (char === char.toUpperCase() && previousChar !== " ") {
			result += " ";
		}
		result += char;
		previousChar = char;
	}
	return result.charAt(0).toUpperCase() + result.slice(1);
}

export function snakeToCamel(input: string): string {
	// also account for numbers and kebab-case
	const splits = input.split(/[-_]/);
	let result = splits[0];
	for (const split of splits.slice(1)) {
		result += capitalize(split, true);
	}
	return result;
}

export function snakeToSpacedPascal(input: string): string {
	return camelToSpacedPascal(snakeToCamel(input));
}
