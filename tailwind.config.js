module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateRows: {
				// Principal container layout
				mainContainer: '120px 1fr',

				// aside and main content
				asideContainerMainContent: '120px 1fr',

				// dashboard content rows
				dashboardContent: '300px 1fr',
			},
			gridTemplateColumns: {
				// Principal container layout
				mainContainer: '389px 1fr',

				// dashboard content columns
				dashboardContent: '1fr 550px',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['visited'],
			textColor: ['visited'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
