export class DankoQuotesService {
    getQuotes(quotesToSend: number) {
        var bufferNumbers = new Array<number>();
        var bufferQuotes = new Array<string>();
        var limit = this.quotes.length;

        if(quotesToSend > limit){
            return this.quotes;
        }

        while(bufferNumbers.length < quotesToSend){
            var num = this.randomNumber(0, limit - 1)
            if(-1 == bufferNumbers.indexOf(num)){
                bufferNumbers.push(num);
                bufferQuotes.push(this.quotes[num]);
            }
        }
        
        return bufferQuotes;
    }

    randomNumber(min: number, max: number) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    quotes = [
        'Žiaden človek nedokáže dať toľko lásky človeku, ako dokáže len človek človeku.',
        'Nie je možné odhadom a rekogniskáciou rátať.',
        'Ja som jasne a myslím si že veľmi dôrazne komunikoval po následne počas týchto rokovaní.',
        'Cestou po udalosti týchto referendiev.',
        'Dáme, ktorá sa hlboko vryla do srdciach.',
        'Splnil sa mi sen a musím zmeniť celkové svoje žitie.',
        'Prepáčte, sú poslanci, ktorí po mojom rozhodnutí do mňa osobne na svojich profiloch útočia od spôsobu mumáka, urážok a všetkého osobného.',
        'Moje presadzovanie v programovom vyhlásení nesúviselo so žiadnou osobou, so žiadnym lobistickým záujmom, ani ničím iným, o čom sa snažíme médiami dnes naznačením dozvedieť.',
        'To čo dnes Slovensko má šancu predsedať Rade Európskej únii, predvečer toho predsedníctva v tej veľkej oslave toho medzinárodného význnamu, by to naozaj nebolo na mieste.',
        'Nechcem robiť nikoho z hrdinu, kto ním nie je.',
        'Vláda nestojí a nepadá na žiadnom ministrovi a na žiadnom koncesionárskom poplatkovi.',
        'Nemyslím si, že návrh akýchkoľvek individuálnych poslancov je ten práve to gro geniálne.',
        'Mňa nevyprovokuje na emócie urážok.',
        'Ešte na uvad poviem, že.',
        'To nie je návrat do čias Vladimíra Mečiara. To je ale zrealizovanie ideí a stavu toho, čo zodpovedá dnešnej dobre.',
        'Poslanec poslanca uráža spôsobom, akým uráža.',
        'Dokedy my budeme sa taktom trieštiť?',
        'Pokiaľ budem predsedom SNS, nebudem mať žiadnu toleranciu k žiadnemu správaniu ktoré máte ako právo a ako občania tohto štátu vyčítať.',
        'Spojenia možného z nemožného, pomaly ma zodpovedného za každého..',
        'Orgány v činnom trestaní ho posúdia.',
        'Ma informoval o tom, že nebude dnes byť.',
        'Ak teda je pripravované aj odvolanie vládnej predsedy Slovenskej Republiky.',
        'Určite zodpovedne o týchto problémoch diskusujem ...ee diskitujeme.',
        'Možno sa občas zakokcem, možno poviem tomtom, ale vždy budem od srdca rozprávať veci, ktoré cítim.',
        'Ak líder opozície povie, že je preňho trápne státie dole dvoch ľudí s husím pierkom v klobúku, tak ja hovorím že sa zamyslite, že právna história, judikáty, rozhodnutia, vývoj parlamentov má svoj vyýznam.',
        'Mám sa ja vyjadrovať k tomu, kto bol vinný a čo mal a stále sa riešiť traumou?',
        'Je teda na mieste odblokovať všetky blokácie toho, aby bolo dopátrané, kto schybil.',
        'Ak dnes pozerám svojich predchodcov, ktorí sa vyjadrujú, že ich mrzí, že nedošlo k zrušeniu ich návrhov na zrušenie Mečiarových amnsestií, tak musím im povedať, že možno mali slabých právne vzdelaných ľudí, možno mali slabú vôľu.',
        'Ak niekto zomrie, musia ísť pocity bokom, a v 90. rokoch zomierali ľudia a zomrel človek.',
        'Chcem sa ďalej zaoberať o problémy.',
        'Našli dialóg, aby nevybíjali svoju silu na mediálnych pretekoch.',
        'To je jediná cesta ako naozaj nájsť zabráneniu vývoja toho, čo na Slovensku dnes máme.',
        'Je treba vnímať tých ľudí, ktorí sa vezú na tej vlne emócií ľudí. Ktorí na základe emócie vlny robia politiku.',
        'Bojím sa tomu.',
        'Vidíme chudobu v regiónoch a nárast extrémizmus. Extrémizmu, ktorého sme všetci chorí.',
        'Verím, že nájdeme podporu naprieč politickom špektre o 11. hodine u každého poslanca.',
        'Kvitujem profesionálnu česť aj niektoré reportáže, ktoré ku mne zaznejú.',
        'To je vždy ten dôležitý barameter.',
        'Privádza ma do šoku úžasu.',
        'Dnes na tlačovej besede poviem vo veľa veciach dosť. Dosť vo veciach, ktoré nečakáte.',
        'Vy si myslíte, že je spravodlivé na človeka, ktorieho na návrh odvolanie je napísané, že to vedel, nariadil, že šikanuje opozíciu, na v diskusiách hádzať takú špinu?',
        'Čo sme my s prepáčením opice, aby nás tuniakych Čech učil cestovať vo vlakoch?',
        'Ja nemám pri subjektívnych postojoch nikomu nejaký spôsob konania, aby som posudzoval, kto, čo, ako si myslí.',
        'Kto čo vie, to čo vedel, to čo nevie, je otázka na vyšetrovateľov.',
        'Štát si dokáže požičať za lačné peniaze.',
        'Zablokujeme tomu, aby sme sa rázne zobudili.',
        'Rešpektujem každého, bez farby pleti akejkoľvek.',
        'Nepopieram a prizahlasujem sa k tej snahe.',
        'Ak si niekto myslí, že návrh ktorý spísal pán Budaj a dal do Národnej rady, je tak komplexným a kompetentným návrhom že vyrieši, a mňa by o tom niekto presvedčil spôsobom, že to budú fakt potrestaní tí ľudia, ruky, nohy zdvihnem.',
        'Na úrade vlády aj v Národnej rade hľadať legálnu ústavnú cestu, z ktorej vzájomne nebudeme vytĺkať politické body horúceho gaštana.',
        'Chce to, aby si vyhrnuli ruky všetci ústavní činitelia.',
        'Je najvyšší čas si naliať čistú vodu.',
        'Musí byť našim cieľom obhájiť túto vraždu alebo udalosť.',
        'Ja by som ale chcel, pokiaľ by som aj nedostal dôveru ľudí, sám sebe povedať to, že som pre to robil z hľadiska svojho vnútra všetko.',
        'Budem taktom konať, ako rozprávam.',
        'Môžem vám ukázať, ako za mňa zaútočili.',
        'Sme si vzájomne vysvetlili niekedy i tie šrámy, ktoré prekročia hranice.',
        'Treba sa ale spoločensky zamyslieť.',
        'Ja som vo svojej pozícii, kde som šťastný a nečakal som ju z hľadiska toho, že viem napĺňať program.',
        'Raz to buchne ako časovaná bumba.',
        'Vláda koná, konala bezodkladne, ako sa o informáciách dos..dotkla a dostala.',
        'Stojím si za tom.',
        'Je to bezpečnostné riziko a rozhodnutie individuálneho úradníka pri otvorenej pošty.',
        'Vláda šialencov, ktorá cez fojsbuk zblbne niektorých ľudí.',
        'Treba vytvoriť štátny energetický hodník...holding.',
        'Sa to stalo predmetom mediálnych atakov šikovne použitie na nejakú dehonestácia.',
        'Poslanec poslanca uráža spôsobom, akým uráža.',
        'Splnil sa mi sen a musím zmeniť celkové svoje žitie.',
        'Cestou po udalosti týchto referendi.',
        'Poslanec národnej republiky si myslí, že môže všetko.',
        'Ak teda je pripravované aj odvolanie vládnej predsedy Slovenskej republiky.',
        'Politickým nástrojom opozície je len urážka hystérie, útočenie do osobných stavov.',
        'Dokedy my budeme sa taktom trieštiť?',
        'Mňa nevyprovokuje na emócie urážok.',
        'Ja som jasne a myslím si, že veľmi dôrazne komunikoval po následne počas týchto rokovaní.',
        'Je to otázka pre ústavných právnikov ale ja sa urobím.',
        'A dovoľte mi aby som vám všetky za-zagra...poďakoval za to, že ste si našli čas a priestor.',
        'Že som spoznal v ňom človeka, ktorým keď si dáte kávu a zdvoríte sa súkromnú vec, že si ju nechá pre seba.',
        'Ja to poviem teraz, že páni poslanci, naozaj ja vás skúsim aj v rámci sály aj do budúcna od slov expresívnych poprosiť aby sa v sále nediali.',
        'Ja v živote nepoužívam papier keď čítam.'
    ]
}