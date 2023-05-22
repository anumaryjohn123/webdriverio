import quantasGetQuote from "..//pageobjects//quantas.getQuotePage"
import LoginData from "../data/login.json"
describe("Quantas Insurance App Login", async()=> {


    it("Create a quote", async ()=> {
        const hoverOver =  $("//*[@id='draft.addressLookup.address-item-0']");
        const submit =  $("[type='submit']");
        const freeStandingHousebtn =  $("[for='draft.propertyTypeAndStrata.buildingTypeDefaultFREESTANDING_HOUSE']");
        const strataPrpBtn =  $("[for='draft.propertyTypeAndStrata.hasBodyCorporateOrStrataTitleNO']");
        const elevatedbutton =  $("[for='draft.homeElevation.homeElevationLevelNOT_ELEVATED']")
        const yearofbuilt = $("[for='draft.yearBuilt.rangeStartYear19000101']")
        const yearofbuiltNO = $("[for='draft.yearBuilt.isHeritageListedNO']")
        const brickVeneer = $("[for='draft.buildingMaterial.wallConstructionBRICK_VENEER']")
        const cementTitles = $("[for='draft.buildingMaterial.roofConstructionCEMENT_TILES']")
        const ownerOccupied = $("[for='draft.homeOccupancy.occupancyTypeOWNER_OCCUPIED']")
        const moveProperty = $("[for='draft.homeOccupancy.yearMovedIn2017']")
        const homeAndContinuity = $("[for='draft.coverType.policyTypeBUILDING_AND_CONTENTS']")
        const dateChoose = $("#step-coverType > div.withFormField-module_root__V_V02.withFormField-module_is-label-question__20m3w > div.react-datepicker-wrapper > div >input")
        
        
        

        await quantasGetQuote.openApp();
        await quantasGetQuote.getQuoteUser(LoginData.getQuote.Name, LoginData.getQuote.pinCode, LoginData.getQuote.address);
        await browser.pause(5000);
        await hoverOver.waitForClickable();
        await hoverOver.click();
        await submit.click();
        await freeStandingHousebtn.click();
        await strataPrpBtn.click();
        await submit.click();
        await elevatedbutton.click();
        await submit.click();
        await yearofbuilt.click();
        await yearofbuiltNO.click();
        await submit.click();
        await brickVeneer.click();
        await browser.pause(1000);
        await cementTitles.click();
        await submit.click();
        await browser.pause(1000);
        await ownerOccupied.click();
        await moveProperty.click();
        await submit.click();
        await browser.pause(1000);
        await homeAndContinuity.click();
        
        await browser.pause(3000);
    

    


    })

})