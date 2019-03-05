// https://github.com/avajs/ava/blob/master/docs/recipes/puppeteer.md
import puppeteer from 'puppeteer';

export default async function withPage(t, run) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try {
		await run(t, page);
	} finally {
		await page.close();
		await browser.close();
	}
}
