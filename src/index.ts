export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://TheFermentFarm.com/moonstone-ferments";
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
