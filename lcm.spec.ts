import { Selector } from 'testcafe';
import { AddCookieHook, FixUrlsHook } from './hooks';
import { HomePage, WrapperPage } from './pages';

fixture("Development Wrapper")
    .page("http://localhost:15173/wrapper/")
    .requestHooks(new FixUrlsHook());

test('has heading', async t => {
    await t.expect(Selector("h1").textContent).contains("Development Wrapper");
});

test('can open contract', async t => {
    const wrapper = new WrapperPage();
    const lcm = await wrapper.openContract("400014459");
    
    await t.expect(lcm.houseAddress).contains("Tivoli 136");
});


fixture("Customer UI")
    .page("http://localhost:15173/havik-lcm-customer/ui/overzicht/400014459?lang=nl")
    .requestHooks(new FixUrlsHook(), new AddCookieHook());

test('can open contract directly', async t => {
    const lcm = new HomePage();    
    await t.expect(lcm.houseAddress).contains("Tivoli 16");
});
