/* eslint-disable no-console */
// this action (https://svelte.dev/tutorial/actions) allows us to
// progressively enhance a <form> that already works without JS
export function enhance(
	form: HTMLFormElement,
	{
		pending,
		error: FError,
		result,
	}: {
		pending?: (data: FormData, form: HTMLFormElement) => void;
		error?: (res: Response | null, error: null | Error, form: HTMLFormElement) => void;
		result: (res: Response, form: HTMLFormElement) => void;
	},
): {
	destroy(): void;
} {
	let current_token: unknown;

	async function handle_submit(e: Event) {
		const token = (current_token = {});

		e.preventDefault();

		const body = new FormData(form);

		if (pending) pending(body, form);

		try {
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json',
				},
				body,
			});

			if (token !== current_token) return;

			if (res.ok) {
				result(res, form);
			} else if (FError) {
				FError(res, null, form);
			} else {
				console.error(await res.text());
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (FError) {
				FError(null, error, form);
			} else {
				throw error;
			}
		}
	}

	form.addEventListener('submit', handle_submit);

	return {
		destroy() {
			form.removeEventListener('submit', handle_submit);
		},
	};
}
