import { LightningElement } from 'lwc';
import tom from '@salesforce/resourceUrl/Tom';
import jerry from '@salesforce/resourceUrl/Jerry';

export default class tomJerryLWC extends LightningElement {
    buttonName = 'Show Jerry';
    selectedLogo = tom;

    handleClick(event) {
        if(event.target.label === 'Show Tom') {
            this.selectedLogo = tom;
            this.buttonName = 'Show Jerry';
        } else {
            this.selectedLogo = jerry;
            this.buttonName = 'Show Tom';
        }
    }
}