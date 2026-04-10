

function loadContent(section) {

    const content = document.getElementById("text-content");

    if (section === "intro") {
        content.innerHTML = `
            <h2>Till Allmänheten</h2>
            <p>Wilhelm von Braun var en gång en av Sveriges mest lästa skalder – idag nästan bortglömd.</p>
            <p>Detta projekt är ett försök att ge hans röst liv igen, genom musik.</p>
        `;
    }

    if (section === "portrait") {
        content.innerHTML = `
            <h2>Porträttet</h2>
            <i>
            <h3>Om detta porträtt</h3>

            <p>Detta är en personlig tolkning av Wilhelm von Brauns liv och personlighet, baserad på biografiskt material, brev, anekdoter och hans egna texter.</p>

            <p>Det gör inte anspråk på att vara en fullständigt objektiv eller vetenskapligt fastställd bild, utan snarare ett försök att förstå människan bakom verken.</p>
            </i>
            <hr>

            <h3>Barndom</h3>

            <p>Wilhelm von Braun föddes 1813 som det tredje av sju barn i en officersfamilj. Fadern, överstelöjtnanten och sedermera postmästaren Kristian Benjamin von Braun, förde familjen mellan militär och borgerlig miljö, medan modern Justina Katarina Militz härstammade från en handelssläkt i Göteborg. Syskonskaran kom att följa skilda livsbanor – från militär och ämbetsmannakarriärer till religiöst och litterärt präglade liv – men endast en av bröderna förde släkten vidare.</p>

            <p>Wilhelm von Brauns barndom tycks ha rymt både trygghet och motsatser. Till sin farmor hyste han en djup och livslång tillgivenhet, som han själv i vuxen ålder beskrev i ovanligt starka ordalag. Samtidigt präglades hans skolgång av hård disciplin och återkommande kroppslig bestraffning, något som särskilt från tiden i Sällerhög lämnade bestående minnen. Redan som ung gav han också uttryck för en motvilja mot det tillgjorda och ytliga, vilket antyder en tidigt utvecklad känsla för autenticitet – en egenskap som senare kom att prägla både hans person och diktning.</p>

            <h3>Militären och det samtida</h3>

            <p>Von Braun inträdde i militärtjänst i ung ålder, men förefaller aldrig helt ha funnit sig till rätta i den militära miljön. Samtida uppgifter antyder att hans främsta styrka snarare låg i det sociala och litterära, där hans kvickhet och diktning gjorde honom uppskattad i kamratkretsen. Det är sannolikt att skrivandet under dessa år inte bara var ett uttryck för begåvning, utan också ett sätt att göra tillvaron mer uthärdlig.</p>

            <p>Samtidigt tycks denna period ha präglats av en mindre disciplinerad livsföring. Redan i tidig ålder utvecklade han en smak för starka drycker och hade svårt att hushålla med sina medel – drag som inte var ovanliga i officersmiljöer, men som hos honom förefaller ha fått särskild betydelse. Under flera år var han dessutom geografiskt skild från sin familj, vilket ytterligare kan ha bidragit till en lösare förankring i vardagens struktur. Den militära banan framstår därmed mindre som ett kall än som en yttre ram, formad av familjetradition och förväntningar – en ram som låg illa till hans läggning och som han aldrig riktigt växte in i.</p>

            <p>Under sin kommendering i Vänersborg kom von Braun i nära kontakt med sin släkt på Björnegården, där han mötte kusinen Ebba. Förälskelsen tycks ha varit stark, men samtidigt präglad av en viss återhållsamhet. Sett i ljuset av den sjukdom han vid samma tid ådrog sig, framträder denna relation som en möjlig motpol – en idealiserad kärlek i kontrast till ett mer problematiskt och kroppsligt erfarenhetsfält.</p>

            <p><font color="red">...to be continued...</font></p>

            <hr>

            <h3>Medicinsk bakgrund och sista sjukdom</h3>

            Wilhelm von Brauns hälsotillstånd framträder i källorna som återkommande sviktande, snarare än som en serie isolerade sjukdomstillfällen. Redan 1835 uppsökte han vård för vad som betecknas som en venerisk sjukdom, och några år senare, 1842, insjuknade han på nytt och genomgick en badkur i Visby. Samtida uppgifter noterar att han därefter aldrig blev helt återställd.

            <p>Under 1840- och 1850-talen återkommer tecken på ett mer långvarigt hälsoproblem. Bland annat nämns “förlamning i fötterna”, vilket vid tiden uppfattades som ett nervöst eller reumatiskt tillstånd och behandlades med kallvattenkurer. Sådana behandlingar var dock ospecifika och användes vid en rad kroniska besvär, vilket gör diagnosen osäker i efterhand.

            <p>Hans sista sjukdomsförlopp sommaren 1860 är däremot relativt väl beskrivet. Det inleddes med smärta i ländryggen och tilltagande svårigheter att kasta vatten, vilket i samtiden tolkades som tecken på njursten. Efter en tillfällig förbättring följde ett återfall med flera dygns fullständigt urinstopp. När läkare till slut tillkallades hade tillståndet förvärrats till kallbrand i underlivet, sannolikt till följd av den långvariga urinretentionen och efterföljande infektion. Han fördes till lasarettet i Uddevalla och opererades, men avled kort därefter.

            <p>Detta slutskede talar starkt för att von Braun under längre tid haft problem med urinvägarna, antingen i form av ett mekaniskt hinder (såsom förträngning) eller en störning i blåsfunktionen. Den tidigare sjukdomshistorien kan möjligen sättas i samband med detta, men sambanden är inte säkert belagda.

            <p>Enligt samtida uppgifter ådrog sig von Braun sin veneriska sjukdom under en vistelse i Göteborg i början av 1830-talet, i en miljö präglad av både militär väntetid och stadens nöjesliv. Han själv anspelade senare på detta i ironiska ordalag, men noterade samtidigt att följderna blev långvariga. De symptom som framträder i hans egna texter överensstämmer närmast med gonorré, vilken vid tiden ofta ledde till kroniska komplikationer i urinvägarna.</p> 

            <p>Sammantaget framträder bilden av ett långvarigt, delvis oklart hälsotillstånd som aldrig fullt ut gick i regress, och som till slut övergick i ett akut och obotligt sjukdomsförlopp.

        `;
    }

    if (section === "timeline") {
        content.innerHTML = `
            <h2>Tidslinje</h2>
            <p>1813, 8 nov.  - Född på Brängesås i Kölingareds socken</p>

            <p>1815 - Flyttar till farmodern Hedvig von Staffeldt på Ingared i Kölingared</p>

            <p>1817 - W stannar hos farmodern när resten av familjen flyttar till ”Stabs Capitaine Bostället Hjälltorp Vestergården” i Fritsla.</p>

            <p>1821 - Skolgång i Borås  <i>-22?</i>
            <br>1834-24 - Skolgång i Skara
            <br>1825-27 - Skolgång i Göteborg
            <br>1827 - Dansskola på sommaren i Borås.
            <br>1827-1828 (okt-maj) </p>

            <p>1828, 8 nov. - Till Karlberg (Solna) kadettskola för officersutbildning. <u>På sin födelsedag</u></p>

            <p>1834 - Examinerad som Fänrik (8 feb.) och Andre adjutant (19 jul.)
            <br>1834, sommaren - Träffar Ebba von Braun för första gången vid hennes konfirmation</p>

            <p>1835 - Uppsöker sjukvård i Borås gällande venerisk (köns-) sjukdom (11 jan.)
            <br>1835, aug. - Besöker föräldrarna i Vede på Gotland - första gången på 7 år.</p>

            <p>1836, 23 aug. - Förste adjutant.</p>

            <p>1837 - Första diktsamlingen utgiven, rätt och slätt kallad ”Dikter"</p>

            <p>1839, aug. - Uppsökt av August Blanche när han är på badorden Gustavsberg.
            <br>1839, 12 okt. - Löjtnant.</p>
           
            <p>1842 - Insjuknad. Reumatism. Badkur i Visby: Fastediet, dekokt och svavelbad. <i>Aldrig fullt återställd</i>
            <br>1842-1843 - Nära ungdomsvän avliden <i>Vem?</i>
            <br>1843 - Sahlgrenska. Fam. flyttar från Visby till Karlshamn, där fadern blir postmästare.
            <br>1843, 9 jul. - Ebba von Braun, kusin och W:s enda stora kärlek, avlider </p>

            <p>1846, 7 jan. - Tar avsked från militären</p>

            <p>1849-1850 (vinter-vår) - Södertälje, för bot av förlamning i fötterna.</p>
           
            <p>1853 - Kallvattenkuranstalten Grundsborg Skanstull</p>

            <p>1855, 6 apr. - W:s mor avliden (Karlshamn)
            <br>1855, juli - Besök hos brodern i Ystad och där ”daguerrotyperad” (=fotograferad)</p>

            <p>1860, tidig juli - känningar av eventuell njursten</p>

            <p>1860, 14 aug. - sista kända brev skickat till bokförläggare Brundin om att hyra vinterbostad, helst på Kungsholmen.</p>

            <p>1860, 12 sept. - Avliden på Uddevalla lasarett</p>

            <p>1860, 18 sept. - Begravd på Uddevalla Nya kyrkogård ( Idag Norra Begravningsplatsen )</p>
        `;
    }

    if (section === "published") {
        content.innerHTML = `
            <h2>Bibliografi</h2>

            Sång för Kongl. Westgötha-Dahls regemente / Brn.. Vänersborg. 1836
<p><font color=yellow><b>1837 - Dikter I</b></font></p>
<p><font color=yellow><b>1838 - Dikter II</b></font></p>
<p><font color=yellow><b>1840 - Nyare dikter</b></font></p>
<p><font color=yellow><b>1841 - Dikter IV</b></font></p>
<p><font color=yellow><b>1843 - Calle. Också en poetisk kalender</b></font></p>
<p><font color=yellow><b>1844 - Carolina. Poetisk kalender</b></font></p>
<p>1846 - Bror. Poetisk kalender</p>
<p>1847 - Berättelser och utkast</p>
<p><font color=yellow><b>1847 - Knut. Poetisk kalender</b></font></p>
<p>1849 - Den namnlöse. Poetisk kalender</p>
<p>1849 - Lite’ nytt till julen</p>
<p><font color=yellow><b>1850 - Berättelser, reseminnen m. m.</b></font></p>
<p>1850 - En Hökarebetjents Äfwentyr</p>
<p>1850 - En syn i paradiset</p>
<p><font color=green><b>1851 - Herr Börje. Poetisk kalender</b></font></p>
<p>1853 - Den unge Tobiæ resa</p>
<p><font color=yellow><b>1853 - Sju sofvare. Poetisk kalender</b></font></p>
<p><font color=green><b>1856 - Farbror Mårten. Poetisk kalender</b></font></p>
<p><font color=green><b>1858 - Z. Poetisk kalender</b></font></p>
<p><font color=green><b>1860 - Borup. Poetisk kalender</b></font><p>

<h3>Postumt</h3>

<p>1879 - Från Wilh. v. Brauns ungdomsdagar : [Bref från v. Braun]. Upsala. Libris 1595977 - Kommenterade och utgivna av K. Warburg och Fr. S. - Upplaga 21 exemplar.</p>
<p>1887 - Skämtsamma dikter</p>
<p>1888 - Inqvarteringen</p>
<p>1888 - Konstapeln</p>
<p>1889 - Reskamraten</p>
<p>1890 - En Löjtnants Händelser</p>
<p>1892 - Resignation</p>
<p>1897 - En berättelse om en utmärkt militär</p>
<p>1889 - Svinaherden och grefvedottern eller Guldgräfvarens skatt</p>
           
           
            <p>1867-1870 1 uppl. "Samlade arbeten" utgivna (Bonnier)</p>

            <p><font color=green><b>1876 - 2 uppl. </b></font></p>

            <p>1882 - 3 uppl. </p>

            <p>1888-1890 - 4 uppl.</P>

            <p>1900-1901 - "Samlade berättelser" 4 vol. (Bonnier)</p>

            <p>1902 - 5 uppl. "Samlade dikter" (Bonnier)</p>

            <p>1928-1929 - "Samlade arbeten" 8 vol. (Malmö: Världslitteraturen)</p>

            <p>1948 - "Valda dikter" (Västerås: Kvällstunden)</p>
           
        `;
    }

    if (section === "songs") {
        content.innerHTML = `
            <h2>Sånger</h2>
            <p>Lista med låtar...</p>
        `;
    }

    if (section === "texts") {
        content.innerHTML = `
            <h2>Texter</h2>
            <p>Original + översättningar...</p>
        `;
    }

    if (section === "about") {
        content.innerHTML = `
            <h2>Om projektet</h2>
            <p>Jag, som de flesta andra, kände inte till Wilhelm von Braun.

<p>”Mors lilla Olle” var bekant, men då enbart genom Alice Tegnér. Namnet bakom förlagan var för mig – liksom för många andra – okänt.

<p>Det var först i ett annat sammanhang, under arbete med projektet Freyja, som jag sökte på <i>Frejas tårar</i>. Där dök Wilhelm von Brauns dikt upp via Projekt Runeberg. Jag läste den – först med nyfikenhet, sedan med ett växande leende. Därefter följde fler texter.

<p>Och där någonstans uppstod en märklig dissonans.

<p>Här fanns en röst som var skarp, lekfull, melankolisk och ibland oväntat modern – och ändå tycktes den i stort sett sakna musikalisk tolkning. Nästan ingenting. Det var svårt att förstå varför ingen hade tagit sig an detta material.

<p>Några dagar senare höll jag en bok i handen – tryckt för 150 år sedan (1876). Texterna finns digitalt, men det är något annat att möta dem i fysisk form. En tyngd. En kontinuitet. Som om avståndet i tid plötsligt krymper.

<p>Fler volymer följde.

<p>Men framför allt växte en övertygelse fram:

<p>Om ingen annan har gjort detta – och om han dessutom i stort sett har fallit ur det allmänna minnet – då finns det kanske ett värde i att försöka åter ge honom en röst.

<p>Detta projekt är ett sådant försök.

<p>Inte en vetenskaplig återupprättelse, och inte en fullständig kartläggning – utan en personlig tolkning, där orden får nytt liv genom musik.

<p>Kanske är det bara en tillfällighet.

<p>Eller något annat.

<p>Från en skorpion till en annan – separerade av nästan två århundraden.</p>
        `;
    }

    if (section === "log") {
        content.innerHTML = `
            <h2>Loggbok</h2>
            <p>Valda projektdatum...</p>

            <p>2026-03-15 Email till Lennart Wasling - om sällskapets nutida existens<br>
            - inget svar<p>

            <p>2026-03-23 "Massmail till alla i listade 2013-styrelse"<br>
            - fyra av sju adresser studsade</p>

            <p>2026-03-23 Email till DELS - om sällskapet fortfarande är medlemmar<br>
            - svar att medlemsavgiften betald för 2025, men inte haft kontakt på länge</p>

            <p>2026-03-24 Fysiskt brev till Lennart Wasling</b>

            <p>2026-04-07 Fysiskt brev till Anne-Marie Bengtsson, suppleant 2013-styrelsen<p>

            <p>2026-04-07 Email till Ulricehamns kommun - om sällskapets tillgångar donerats?<br>
            - inget arkiverat hos kommunen</P>

            <p>2026-04-07 Email till Ulricehamns tidning - om det utlysts stämma därigenom
            <br> - svar hänvisande enbart till Lennart Wasling med hitta.se telefonnummer.</p>

            <p>2026-04-07 Lagt en frågande post på proveniens.infokus.se, mailat en person privat som inte hade en aning.</p>

            <p>2026-04-07 Mailat en Uddevallabloggare</p>

            <p>2026-04-07 Mailat Föreningsarkivet i Borås och Skaraborgs Föreningsarkiv efter tips från arkivet i Ulricehamn<br>
            - Borås hade inget arkiverat.</p>
        `;
    }
   
}


    window.onload = function() {
    loadContent('intro');
    };