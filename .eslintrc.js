module.exports = {
	// ...
	overrides: [
		{
			files: ["app/gallery/[slug]/page.tsx"],
			rules: {
				"@typescript-eslint/consistent-type-assertions": "off",
			},
		},
	],
};
