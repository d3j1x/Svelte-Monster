// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: adapter(),

		methodeOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
