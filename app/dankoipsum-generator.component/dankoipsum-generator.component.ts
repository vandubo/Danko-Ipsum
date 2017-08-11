import { Component } from 'angular2/core'
import { Control, ControlGroup, Validators, FormBuilder } from 'angular2/common'

import { DankoQuotesService } from '../danko-quotes.service/danko-quotes.service'

@Component({
    selector: "danko-ipsum",
    templateUrl: "./app/dankoipsum-generator.component/dankoipsum-generator.component.html",
    styleUrls: ['./app/dankoipsum-generator.component/dankoipsum-generator.component.css'],
    providers: [
        DankoQuotesService
    ]
})
export class DankoIpsumGeneratorComponent {
    form: ControlGroup;
    ipsumContent;
    selectedIpsum: string;
    ipsumValue: number;
    paragraphLen: number;
    qoutesServ: DankoQuotesService;

    constructor(qts: DankoQuotesService) {
        this.selectedIpsum = "paragraph";
        this.ipsumValue = 3;
        this.paragraphLen = 8;
        this.qoutesServ = qts;
        this.ipsumContent = [];
    }
    
    onIpsumSelected(setting: string){
        this.selectedIpsum = setting;
        this.ipsumContent = [];
    }

    getQuotes(count: number){
        return this.qoutesServ.getQuotes(count);
    }

    generateParagraphs(){
        var i: number;
        var j: number;
        var maxJ: number = this.paragraphLen;
        var oneParagraph = "";
        var paramsNumber = this.ipsumValue;
        var paramsPlainText = [];
        var paramsMarkup = [];

        var numberOfQuotes = paramsNumber * this.paragraphLen;
        var quotes = this.getQuotes(numberOfQuotes);
    
        if(numberOfQuotes > quotes.length){
            numberOfQuotes = quotes.length;
            paramsNumber = Math.floor(quotes.length / this.paragraphLen);
        }

        var lastJ: number = 0;
        for(i = 0; i < paramsNumber; i++) {
            oneParagraph = "";
            for(j = lastJ; j < maxJ; j++) {
                if(lastJ < numberOfQuotes){
                    oneParagraph += quotes[j] + " ";
                }
                lastJ = j+1;
            }
            maxJ = lastJ + this.paragraphLen;
            paramsPlainText.push(oneParagraph.trim());
            paramsMarkup.push("<p>" + oneParagraph.trim() + "</p>");
        }
        
        this.ipsumContent.push(paramsPlainText);
        this.ipsumContent.push(paramsMarkup);
    }

    generateWords(){
        var words = ""; 
        var quotes = this.getQuotes(this.ipsumValue);
        var wordsCounter: number = 0;

        for(var qt of quotes) {
            var splitted = qt.split(" ");
            for(var word of splitted) {
                words += word + " ";
                wordsCounter += 1;
                if (wordsCounter >= this.ipsumValue){
                    break;
                }
            }
            if (wordsCounter >= this.ipsumValue){
                break;
            }
        }
        words = words.trim();
        words += ' ..';

        this.ipsumContent.push(words);
    }
    
    generateList(){
        var qts = this.getQuotes(this.ipsumValue);
        var uList = "<ul>";

        for(var qt of qts){
            uList += "<li>" + qt + "</li>"
        }
        uList += "</ul>";
        this.ipsumContent.push(qts);
        this.ipsumContent.push(uList);
    }

    formSubmitted(){
        this.ipsumContent = [];
        switch (this.selectedIpsum)
        {
            case "paragraph" :
                this.generateParagraphs();
                break;
            case "word" :
                this.generateWords();
                break;
            case "list" :
                this.generateList();
                break;
            default:
                this.ipsumContent.push("Ups something went wrong");
        }
    }
}