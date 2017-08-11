System.register(['angular2/core', '../danko-quotes.service/danko-quotes.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, danko_quotes_service_1;
    var DankoIpsumGeneratorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (danko_quotes_service_1_1) {
                danko_quotes_service_1 = danko_quotes_service_1_1;
            }],
        execute: function() {
            let DankoIpsumGeneratorComponent = class DankoIpsumGeneratorComponent {
                constructor(qts) {
                    this.selectedIpsum = "paragraph";
                    this.ipsumValue = 3;
                    this.paragraphLen = 8;
                    this.qoutesServ = qts;
                    this.ipsumContent = [];
                }
                onIpsumSelected(setting) {
                    this.selectedIpsum = setting;
                    this.ipsumContent = [];
                }
                getQuotes(count) {
                    return this.qoutesServ.getQuotes(count);
                }
                generateParagraphs() {
                    var i;
                    var j;
                    var maxJ = this.paragraphLen;
                    var oneParagraph = "";
                    var paramsNumber = this.ipsumValue;
                    var paramsPlainText = [];
                    var paramsMarkup = [];
                    var numberOfQuotes = paramsNumber * this.paragraphLen;
                    var quotes = this.getQuotes(numberOfQuotes);
                    if (numberOfQuotes > quotes.length) {
                        numberOfQuotes = quotes.length;
                        paramsNumber = Math.floor(quotes.length / this.paragraphLen);
                    }
                    var lastJ = 0;
                    for (i = 0; i < paramsNumber; i++) {
                        oneParagraph = "";
                        for (j = lastJ; j < maxJ; j++) {
                            if (lastJ < numberOfQuotes) {
                                oneParagraph += quotes[j] + " ";
                            }
                            lastJ = j + 1;
                        }
                        maxJ = lastJ + this.paragraphLen;
                        paramsPlainText.push(oneParagraph.trim());
                        paramsMarkup.push("<p>" + oneParagraph.trim() + "</p>");
                    }
                    this.ipsumContent.push(paramsPlainText);
                    this.ipsumContent.push(paramsMarkup);
                }
                generateWords() {
                    var words = "";
                    var quotes = this.getQuotes(this.ipsumValue);
                    var wordsCounter = 0;
                    for (var qt of quotes) {
                        var splitted = qt.split(" ");
                        for (var word of splitted) {
                            words += word + " ";
                            wordsCounter += 1;
                            if (wordsCounter >= this.ipsumValue) {
                                break;
                            }
                        }
                        if (wordsCounter >= this.ipsumValue) {
                            break;
                        }
                    }
                    words = words.trim();
                    words += ' ..';
                    this.ipsumContent.push(words);
                }
                generateList() {
                    var qts = this.getQuotes(this.ipsumValue);
                    var uList = "<ul>";
                    for (var qt of qts) {
                        uList += "<li>" + qt + "</li>";
                    }
                    uList += "</ul>";
                    this.ipsumContent.push(qts);
                    this.ipsumContent.push(uList);
                }
                formSubmitted() {
                    this.ipsumContent = [];
                    switch (this.selectedIpsum) {
                        case "paragraph":
                            this.generateParagraphs();
                            break;
                        case "word":
                            this.generateWords();
                            break;
                        case "list":
                            this.generateList();
                            break;
                        default:
                            this.ipsumContent.push("Ups something went wrong");
                    }
                }
            };
            DankoIpsumGeneratorComponent = __decorate([
                core_1.Component({
                    selector: "danko-ipsum",
                    templateUrl: "./app/dankoipsum-generator.component/dankoipsum-generator.component.html",
                    styleUrls: ['./app/dankoipsum-generator.component/dankoipsum-generator.component.css'],
                    providers: [
                        danko_quotes_service_1.DankoQuotesService
                    ]
                }), 
                __metadata('design:paramtypes', [danko_quotes_service_1.DankoQuotesService])
            ], DankoIpsumGeneratorComponent);
            exports_1("DankoIpsumGeneratorComponent", DankoIpsumGeneratorComponent);
        }
    }
});
//# sourceMappingURL=dankoipsum-generator.component.js.map