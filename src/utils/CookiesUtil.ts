import Cookies from 'js-cookie';

export namespace CookiesArray {
	export function add(key: string, value: string): void {
		let values = Cookies.get(key);
		if (!values) {
			Cookies.set(key, value);
			return;
		}
		const valuesArray: string[] = values.split('$');
		const index = valuesArray.indexOf(value);
		if (index > -1) {
			if (valuesArray.length === 1) {
				return;
			}
			valuesArray.splice(index, 1);
			values = valuesArray.join('$');
		}
		values = value + '$' + values;
		Cookies.set(key, values);
	}

	export function remove(key: string, value: string): void {
		let values = Cookies.get(key);
		const valuesArray: string[] = values.split('$');
		const index = valuesArray.indexOf(value);
		if (index > -1) {
			valuesArray.splice(index, 1);
			values = valuesArray.join('$');
			Cookies.set(key, values);
		}
	}

	export function get(key: string): string[] {
		const values = Cookies.get(key);
		if (!values) {
			return;
		}
		return values.split('$');
	}

	export function isInCookie(key: string, value: string): boolean {
		const values = Cookies.get(key);
		if (!values) {
			return;
		}
		return values.split('$').indexOf(value) > -1;
	}
}
