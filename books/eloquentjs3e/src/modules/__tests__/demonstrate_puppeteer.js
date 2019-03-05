// https://github.com/avajs/ava/blob/master/docs/recipes/puppeteer.md
import test from 'ava';
import withPage from './helpers/withPage';

const url = 'https://google.com';

test('page title should contain "Google"', withPage, async (t, page) => {
	await page.goto(url);
	t.true((await page.title()).includes('Google'));
});

test('page should contain an element with `#hplogo` selector', withPage, async (t, page) => {
	await page.goto(url);
	t.not(await page.$('#hplogo'), null);
});

test('search form should match the snapshot', withPage, async (t, page) => {
	await page.goto(url);
	const innerHTML = await page.evaluate(form => form.innerHTML, await page.$('#searchform'));
	// TODO mike@carif.io: uncomment out when you want to compare test results to a snapshot
	// t.snapshot(innerHTML);
  t.pass(`uncomment out snapshot when ready`);
});
