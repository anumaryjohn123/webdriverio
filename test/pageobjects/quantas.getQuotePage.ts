import Page from "./page";
import LoginData from "../data/login.json" 


class quantasInsuranceGetQuote extends Page {

    get firstNameBox () { return $("//*[@id='draft.dutyOfDisclosure.firstName']") }
    get agreeButton () { return $("[type='submit']") }
    get postCodeBox () { return $("//*[@id='draft.addressLookup.postcode']") }
    get addressBox () { return $("//*[@id='draft.addressLookup.address']") }
    get datePicker () { return $("//*[@id='draft.coverType.commencementDate']")}
    get currentMonth () { return $("div > div.react-datepicker__current-month")}

    

    async getQuoteUser(firstName:string, postCode:string, address:string){
        await this.firstNameBox.setValue(firstName);
        await (await this.agreeButton).click();
        await this.postCodeBox.setValue(postCode);
        await browser.pause(2000)
        await this.addressBox.setValue(address);
    }

        async openApp(){ 
            await browser.url(LoginData.url.PROD);
            await browser.maximizeWindow();

        }

        async dakePickerPolicyStart(){ 
            await this.datePicker.waitForClickable
            await this.datePicker.click();
            console.log(await this.currentMonth.getText());
            const val = await this.currentMonth.getText();
            

        }

}

export default new quantasInsuranceGetQuote();

