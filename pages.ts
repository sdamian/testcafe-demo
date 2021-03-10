import { Selector, t } from 'testcafe';

export class WrapperPage {
    contractNumberInput = Selector("#contract");
    description = Selector("#description");
    openButton = Selector("button").withText("Open ");
    iframe = Selector("iframe");

    async openContract(contract: string) {
        await t
            .selectText(this.contractNumberInput)
            .pressKey("delete")
            .typeText(this.contractNumberInput, contract)
            .expect(this.description.textContent).contains("11102 (received new 20150303), Soms omdat hij variabele rente heeft")
            .click(this.openButton)
            .switchToIframe(this.iframe);

        return new HomePage();
    }
}

export class HomePage {
    houseAddress = Selector(".woning").textContent;
}