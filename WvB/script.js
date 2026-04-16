

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
<p><font color=green><b>1843 - Calle. Också en poetisk kalender</b></font></p>
<p><font color=green><b>1844 - Carolina. Poetisk kalender</b></font></p>
<p>1846 - Bror. Poetisk kalender</p>
<p>1847 - Berättelser och utkast</p>
<p><font color=green><b>1847 - Knut. Poetisk kalender</b></font></p>
<p>1849 - Den namnlöse. Poetisk kalender</p>
<p>1849 - Lite’ nytt till julen</p>
<p><font color=green><b>1850 - Berättelser, reseminnen m. m.</b></font></p>
<p>1850 - En Hökarebetjents Äfwentyr</p>
<p>1850 - En syn i paradiset</p>
<p><font color=green><b>1851 - Herr Börje. Poetisk kalender</b></font></p>
<p>1853 - Den unge Tobiæ resa</p>
<p><font color=green><b>1853 - Sju sofvare. Poetisk kalender</b></font></p>
<p><font color=green><b>1856 - Farbror Mårten. Poetisk kalender</b></font></p>
<p><font color=green><b>1858 - Z. Poetisk kalender</b></font></p>
<p><font color=green><b>1860 - Borup. Poetisk kalender</b></font><p>

<h3>Postumt</h3>

<p>1879 - Från Wilh. v. Brauns ungdomsdagar : [Bref från v. Braun]. Upsala. Libris 1595977 - Kommenterade och utgivna av K. Warburg och Fr. S. - Upplaga 21 exemplar.</p>
<p>1887 - Skämtsamma dikter</p>
<p>1888 - Inqvarteringen</p>
<p>1888 - Konstapeln</p>
<p>1889 - Reskamraten</p>
<p>1889 - Svinaherden och grefvedottern eller Guldgräfvarens skatt</p>
<p>1890 - En Löjtnants Händelser</p>
<p>1892 - Resignation</p>
<p>1897 - En berättelse om en utmärkt militär</p>

<h3>Samlingar</h3>           
           
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

<h3>Av andra</h3>
<ul class="song-links">
    <li><a href="https://lennart.angvik.se/tonsatt.htm">Av Lennart Angvik</a></li>
    <li><a href="https://www.culturum.se/Braun/Ljud/ILagaRyttartorpet.mp3">I låga ryttartorpet — Margareta Kjellberg</a></li>
    <li>Jag vill, jag ville bara, just ingenting jag vill - av Olle Adolphson <a href="https://open.spotify.com/track/3WBFRRZZf48jT0haxHhHJb?si=28cb750ec6f349f4" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/rkyW--mKf5k" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li>Evas dröm - av Olle Adolphson(?) <a href="https://youtu.be/u9fDDkL8n3k" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li>En åsknatt på Trollhättan - av (ännu) okända <a href="https://youtu.be/RDwWCxmKCTE?list=RDRDwWCxmKCTE" target="_blank" rel="noopener noreferrer">YouTube</a></li>
</ul>
<hr>
<h3>Mina</h3>
<h4>Förlorade visor – Del 1 &nbsp; &nbsp; &nbsp;  <a href="https://open.spotify.com/album/6OyEXjdNwx5tBp7KdyeVZA?si=S9DrROllQqaDDtTkW9CAGA" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://www.youtube.com/watch?v=UlIDylhQQ8E&list=OLAK5uy_kv-cEJ1Un87LV_kgdpTULimbU2s9XiCKY" target="_blank" rel="noopener noreferrer">YouTube</a></h4>

<ol class="track-list">
    <li onclick="loadContent('bekannelse')">Poetisk trosbekännelse <a href="https://open.spotify.com/track/2JkUnMb6hKoUKR4gbkhSZP?si=1a3c43aa1a724030" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/UlIDylhQQ8E?si=YErmm9714HNYGe4J" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('markvardig')">Den märkvärdige mannen <a href="https://open.spotify.com/track/3cfz4FO3fDh2kkhS2PGydi?si=07fe7e2328184749 target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/YZtkVU6IN2w?si=uMw1R7zxk0vxDV_P" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('kyssen')">Kyssen <a href="https://open.spotify.com/track/63bZaRhGeuOzVpk3QnqpGN?si=e9e5ca13b4884d87" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/5nbapw89k1s?si=EOKPA38gEFXjVdmH" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('spinnrock')">Pigan vid spinnrocken <a href="https://open.spotify.com/track/6qzgEMRlXgfcvs1VgxLyFf?si=d27cf53c71c140b3" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/_aZqoNHeSV4?si=wlKSWGTZn1xigt2B" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('allatider')">Älskande i alla tider <a href="https://open.spotify.com/track/3KUiHsFSNr7joU00CTQECQ?si=7b1fbfc884734d3e" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/akfGybmUBfE?si=ourrvYDF6bBvJUxo" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('allablirlika')">Alla blir lika i nöden <a href="https://open.spotify.com/track/75rzvPQHkCIFlGOZvvwJ3b?si=a5580680ebff4722" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/-OREJGznhXY?si=zkh5AxB8iH4xJy6g" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('rofvar')">En röfvarhistoria <a href="https://open.spotify.com/track/2f7YR1L4IcmW6rKrqXpKof?si=3d42df8e8b954d2b" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/5Cy2vxyCHNs?si=ZcG7sF-1fEXX8ZFT" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('trost')">Trösteord till en vän, som fått korgen <a href="https://open.spotify.com/track/3Dyd166sgZx3qyB3R02cT2?si=6ca56053f4114b3f" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/AALgrpj7HAg?si=VXxmJlkJ9BWJfcNN" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('fullmanen')">Sång till fullmånen <a href="https://open.spotify.com/track/26kJj3HzqWPdoSGIKy5yqB?si=da445c938e4946ac" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/N8g4aOsILuQ?si=uAqDc2bPpnY3FsM1" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('askan')">Åskan <a href="https://open.spotify.com/track/4VdBdBcu5FWTtx2ckcNQat?si=2c8d70309397460f" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/2pEaZtNFiM4?si=1oASgtudlp6Xgyy-" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('arkadien')">Äfven jag var i Arkadien! <a href="https://open.spotify.com/track/3Wvk9WSwJ89dtU1sVOVqdY?si=68bd49298e89449e" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/pnq2FUc_k9E?si=J4_33l2f_4CzkaHd" target="_blank" rel="noopener noreferrer">YouTube</a></li>
</ol>

        <h4>Freyja - Översatt och ev. anpassat</h4>
        <ul class="track-list">
    <li onclick="loadContent('curious')">A Most Curious Man <a href="https://open.spotify.com/album/3s1Uo7e2hBPePTMFnVBD87?si=swlHKs6vQb-E_fCqCllSXQ" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/e0oPOQgJJnE?list=OLAK5uy_m1yq9HFySzDga8FUCW3LBqLguBNaYbWJQ" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li onclick="loadContent('laughingface')">Laughing Face / Broken core <a href="https://open.spotify.com/album/2qWDrq6tfxgdj4mXOv8D6O?si=DX-sNYG6SumsJMrEshb-0A" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/hdPF5gH-FCg?list=OLAK5uy_moGryysVfMh6r_p5h3E7ojyhPdkvBa7Sw" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    <li>I cannot say why <a href="https://open.spotify.com/album/7FOdLpD2MHeE4aNcUz94nz?si=6kuTWKDxQn-lu4p-2_l7DQ" target="_blank" rel="noopener noreferrer">Spotify</a>   <a href="https://youtu.be/_Jatog3dewk?list=OLAK5uy_mp1WIUONL9xzsoe65LpIZS0WGYmN6zWEE" target="_blank" rel="noopener noreferrer">YouTube</a></li>
    </ul>
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

    if (section === "bekannelse") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Poetisk trosbekännelse</h2>
<p class="lyrics">Aldrig min lyra till klagan jag stämt;
<br>Hvarför mitt hjärta betunga?
<br>Kan jag ej sjunga om kärlek och skämt,
<br>Vill jag långt hellre ej sjunga.
<br>Kärleken lefnadens middag gör säll,
<br>Munterhet endast förljufvar dess kväll.
<br>
<br>Aldrig jag satte min ära uti
<br>Tårar att pressa, som mången.
<br>Skäl till att gråta, det finna nog vi
<br>Utan att ta det ur sången.
<br>Glad och förnöjd emot himmeln jag ser;
<br>Solen där uppe – hon äfven – ju ler.
<br>
<br>Aldrig det sorgliga kallar jag på,
<br>Sorgen väl kommer objuden.
<br>Skämtet och Löjet, de gästerna gå
<br>Likasom flyktiga ljuden.
<br>Gripa dem – blifve mitt sträfvande här!
<br>Själfva min möda belöningen är.
<br>
<br>Brottsligt det vore att törnströ min stråt,
<br>Diktade kval till att kvida.
<br>O, det finns mycket att fröjda sig åt!
<br>Allt har sin glädtiga sida.
<br>Smärtan, så bitter hon tyckes också,
<br>Ofta i grunden är löjlig ändå.
<br>
<br>Lefve då skämtet! i skämtet jag själf!
<br>Dödsängeln susar med vingen;
<br>Snart står jag bortom den stygiska älf,
<br>Hvad som där väntar, vet ingen.
<br>Detta blott vet jag, och tacksam jag är:
<br>Sången och Kärleken vänta mig <i>här</i>.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "markvardig") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Den märkvärdige mannen</h2>
            <p class="lyrics">Jag känner en märkvärdig man,<br>
Som världen sin dyrkan bör unna.<br>
Allt tänkbart den människan kan,<br>
Åtminstone <i>tror han sig kunna</i>.<br>
En märkvärdig man – det är sant!<br>
Men bara en smula – pedant.<br>
<br>
   Om själfva Guds ljus är han karg,<br>
Änskönt man för intet kan få det,<br>
Men, fast en hushållare arg,<br>
Han slösar med lärdomsförrådet.<br>
En märkvärdig man – det är sant!<br>
Men bara en smula pedant.<br>
<br>
   Du vet väl, att jorden är rund,<br>
Att prick öfver i du bör sätta;<br>
Men vill du det veta i grund,<br>
Så kan han, som <i>nytt</i>, det berätta.<br>
En märkvärdig man – det är sant!<br>
Men bara en smula pedant.<br>
<br>
   En knut du helt säkert kan slå,<br>
Ett ljus du väl äfven kan snyta?<br>
Men om du till honom vill gå,<br>
Lektioner ej skola dig tryta.<br>
En märkvärdig man – det är sant!<br>
Men bara en smula pedant.<br>
<br>
   Han medger, att skaparn är vis,<br>
En visare likväl han känner.<br>
<i>Hvem</i>, säger han icke precis,<br>
Men han och hans <i>Jag</i> äro vänner.<br>
En märkvärdig man – det är sant<br>
Men bara en smula – pedant.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "kyssen") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Kyssen</h2>
            <p class="lyrics">  Långt man går hos vackra könet<br>
Genom stöld och tjufven.<br>
Bröder, jag gjort detta rönet<br>
Utan att bestraffad bli.<br>
<br>
  Ack! jag minns med hvilken pina<br>
Hilmas söta mun jag såg,<br>
Denna ros, den lilla, fina,<br>
Hvilken halfutsprucken låg.<br>
<br>
  Både ljuft och smärtsamt nöje<br>
Jag utaf dess åsyn njöt;<br>
Hur den öppnades till löje,<br>
Hur den allvarsam sig slöt!<br>
<br>
  För en kyss, en enda liten,<br>
Intet pris mig varit drygt.<br>
Men hur häftig var aptiten,<br>
Sinnet var dock än för blygt.<br>
<br>
  Ändtligen beslöt jag tigga,<br>
Föll på knä och bad så ömt, –<br>
Men den hårda lät mig ligga,<br>
Log och flydde; – ve, fördömdt!<br>
<br>
  »Stjäla är då bästa viset!»<br>
Tänkte jag – och tror det mest;<br>
Ty allt sedan paradiset<br>
Är förbjudna frukten bäst.<br>
<br>
  Nu iag sökte blott att komma<br>
Åt att pröfva på mitt mod.<br>
Slutligen jag såg min blomma,<br>
Hur hon ensam, lutad stod.<br>
<br>
  Eldad utaf längtans stunder,<br>
Sprang jag oförsiktigt fram.<br>
Hon likväl – ack, hvilket under! –<br>
Ej mitt bullrande förnam.<br>
<br>
  Först när mina läppar trycktes<br>
Emot hennes, spratt hon till.<br>
Men likväl – så det mig tycktes –<br>
Stod hon ganska gärna still.<br>
<br>
  Sedan dess jag stal beständigt,<br>
Ärligheten var förbi.<br>
Alltid gick det så behändigt,<br>
Som hon <i>velat</i> röfvad bli.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "spinnrock") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Pigan vid spinnrocken</h2>
            <p class="lyrics">   Surr, surr!<br>
Trögt går rocken,<br>
Vindt och snedt.<br>
   Fnurr, fnurr!<br>
Aldrig töcken<br>
Har jag sett.<br>
<br>
   Surr, surr!<br>
Jämt han mullrar<br>
Liksom frun.<br>
   Fnurr, fnurr!<br>
Så ej bullrar<br>
Dombasun.<br>
<br>
   Surr, surr!<br>
Jag vill smörja’n<br>
Friska tag.<br>
   Fnurr, fnurr!<br>
Till en början<br>
Gäspar jag.<br>
<br>
   Surr, surr!<br>
Tidigt oppe,<br>
Sent i säng.<br>
    Fnurr, fnurr!<br>
Lefnadsloppe’<br>
Flyg och fläng.<br>
<br>
   Surr, surr!<br>
Diska, skura,<br>
Laka se’n.<br>
    Fnurr, fnurr!<br>
Äta sura<br>
Strömmingen.<br>
<br>
   Surr, surr!<br>
Slut blir striden<br>
Dock i höst.<br>
   Fnurr, fnurr!<br>
Flyttningstiden<br>
Är min tröst.<br>
<br>
   Surr, surr!<br>
Första gället<br>
Hanen ger.<br>
   Fnurr, fnurr!<br>
Vid sängstället<br>
Frun jag ser.<br>
<br>
   Surr, surr!<br>
»Upp då, Britta,<br>
Skynda nu!»<br>
   Fnurr, fnurr!<br>
Fan besitta<br>
Sådan fru!<br>
<br>
   Surr, surr!<br>
Denna vakan<br>
Morgon, kväll,<br>
   Fnurr, fnurr!<br>
För brudlakan<br>
Åt mamsell!<br>
<br>
   Surr, surr!<br>
»Spinn dem fina!»<br>
– Frun har sagt –<br>
   Fnurr, fnurr!<br>
»Mamsell Mina<br>
Håller vakt.»<br>
<br>
   Surr, surr!<br>
Hvad eländen<br>
För en slaf!<br>
   Fnurr, fnurr!<br>
Nu gick änden<br>
Tvärt utaf!<br>
<br>
   Surr, surr!<br>
Tårar rinna<br>
Som en älf.<br>
   Fnurr, fnurr!<br>
Hon kan spinna<br>
Åt sig själf!<br>
<br>
   Surr, surr!<br>
Jag väl klandra<br>
Må min lott,<br>
   Fnurr, fnurr!<br>
Som åt andra<br>
   Spinner blott.<br>
<br>
   Surr, surr!<br>
Ack, min Anders,<br>
Full af list,<br>
   Fnurr, fnurr!<br>
Gick åt fanders,<br>
Blef gardist!<br>
<br>
   Surr, surr!<br>
Ensam står jag<br>
På min stig.<br>
   Fnurr, fnurr!<br>
Snart så går jag,<br>
Dränker mig.<br>
<br>
   Surr, surr!<br>
Frun hörs larma<br>
Inne – jo!<br>
   Fnurr, fnurr!<br>
Ack, jag arma<br>
Får ej ro!<br>
<br>
   Surr, surr!<br>
Kaffetåren<br>
Skall nu på.<br>
   Fnurr, fnurr!<br>
Knappt jag får en<br>
Droppe då.<br>
<br>
   Surr, surr!<br>
Anders lilla,<br>
Kom igen!<br>
   Fnurr, fnurr!<br>
Det går illa<br>
För din vän.<br>
<br>
   Surr, surr!<br>
Knapp förstjänsten,<br>
Magert bröd.<br>
   Fnurr, fnurr!<br>
Denna tjänsten<br>
Blir min död.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "allatider") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Krig och fred.</h2>
            <p class="lyrics">   Älskande i alla tider<br>
Litet smågnabb haft till sed,<br>
Men de börja dessa strider<br>
För att blott få stifta fred,<br>
I försoningskyssen såren<br>
En gudomlig balsam få;<br>
Sköna äro fredsvillkoren,<br>
Ty de vinna bägge två.<br>
<br>
   Äfven jag följt det exemplet, –<br>
Anden längtar efter krig, –<br>
Ofta öppnas Janustemplet,<br>
Än af Hilma, än af mig.<br>
Att jag kyssar tar för många,<br>
Är ej sällan krigsorsak;<br>
Hon vill blott ge små, men långa<br>
Äro mera i min smak.<br>
<br>
   Nu är freden uppsagd. Båda<br>
Fly vi för hvarandra då.<br>
Denna fejd är utan våda,<br>
Gjorde kungar äfvenså! –<br>
Butter tystnad, endast bruten<br>
Stundom af en liten pik,<br>
Minen sur och blicken sluten,<br>
Detta bjuder vår taktik.<br>
<br>
   Men i kriget, som vi föra,<br>
Tunga mödor ock vi fått;<br>
Att så ond mig låtsa göra,<br>
Tro mig, det är icke godt;<br>
Att en marmorköld sig gifva,<br>
När ens blod kan brinna opp!<br>
Snart vår död det skulle blifva,<br>
Hade vi om fred ej hopp.<br>
<br>
   Slutligen blir det omöjligt,<br>
Att betvinga känslan mer,<br>
Och det sorgliga blir löjligt,<br>
Och den buttra munnen ler.<br>
Fåfängt söka anletsdragen<br>
Komma i ett vresigt skick,<br>
Kärlek lyser, klar som dagen,<br>
Ur hvar rörelse och blick.<br>
<br>
   Som parlamentärer sändas<br>
Våra heta suckar ut.<br>
Ömt vi nalkas, kriget ändas,<br>
Stillestånd görs opp till slut.<br>
Lilla handen Hilma gifver<br>
Som en underpant därtill,<br>
Och jag freden underskrifver<br>
Med en kyss – så lång jag vill.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "allablirlika") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Alla bli lika i nöden</h2>
            <p class="lyrics">   En kung med sin dotter sig en gång begaf<br>
På resor till främmande länder,<br>
Och länge han plöjde det vilda haf;<br>
Men hör bara nu hvad som händer!<br>
<br>
   En afton så kläder sig himmelen röd,<br>
En stormvind begynner att ryta.<br>
Och skutan tar läck, och med största nöd<br>
Den ännu på vågen kan flyta.<br>
<br>
   Vid pumpen stå alla, – ja, kungen också;<br>
Ty alla bli lika i nöden.<br>
Den sköna prinsessan syns darrande stå<br>
Med kinder så bleka som döden.<br>
<br>
   Nu börjar det knaka i master och tåg,<br>
Och segelbitarna ryka; –<br>
Nu kommer en fräsande, skyhög våg,<br>
Och skeppet begynner att dyka.<br>
<br>
   Den höga prinsessan slöt ögonen till;<br>
Ej mer de förmådde att gråta.<br>
Med händerna knäppta hon from och still<br>
Beger sig i brudsängen våta.<br>
<br>
   Men Herran vill icke prinsessans fördärf,<br>
En frälsande båtsman han sänder.<br>
Den Kongliga Höghet han är så djärf<br>
Att gripa med beckiga händer.<br>
<br>
   På vågornas rygg med den bleknade mö<br>
Han börjar förträffligt att rida.<br>
Men hastigt en våg till en obebodd ö<br>
Uppkastar på stranden dem vida.<br>
<br>
   Prinsessan snart börjar att repa sig smått<br>
Vid båtsmannens omsorg och myser, –<br>
Men när hon kan tala, så hviskar hon blott:<br>
»Min ljuflige båtsman! – jag fryser.»<br>
<br>
   Ej eld var till hands, och kavajen var blöt; –<br>
Hvad månde den ljuflige göra?<br>
Jo, varmt han prinsessan i famnen slöt,<br>
Och misshag lät icke hon höra.<br>
<br>
   När natten var Öfver, vid båtsmannens arm<br>
Hon börjar att vandra och ropa.<br>
De funno en grotta, så kall och arm,<br>
Samt bodde där tätt tillhopa.<br>
<br>
   Men båtsmannen blyg till prinsessan steg opp,<br>
Och hon steg till båtsmannen neder.<br>
På obebodd ö under många års lopp<br>
Han ljuflighet henne bereder.<br>
<br>
   Den Kongliga Höghet mot båtsmannen ler,<br>
Som frälst från kölden och döden;<br>
Och obebodd ö blef befolkad allt mer;<br>
Ty alla bli lika – i nöden.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "rofvar") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>En röfvarhistoria</h2>
            <p class="lyrics">  En riddare drog<br>
Igenom en skog<br>
Och såg bland dess åldriga stammar<br>
En tärna, så skön;<br>
Den blomstrande mön<br>
Hans eldfängda hjärta anammar.<br>
<br>
  Som turturn han kvad<br>
Och knäföll och bad,<br>
Att det månde stenar beveka:<br>
»Mitt hjärta jag mist,<br>
Du tog det, för visst,<br>
Att grymt med det samma få leka.»<br>
<br>
  Men skogsjungfrun log:<br>
»Drag aldrig i skog,<br>
Du finner hur lätt man blir röfvad!»<br>
Och munter och yr<br>
Med rofvet hon flyr,<br>
Men riddarn red hem, så bedröfvad.<br>
<br>
  Men åter helt snart<br>
Han vågar en fart<br>
Att taga revanche på den sköna.<br>
Hur brinner hans blod,<br>
Hur stiger hans mod,<br>
När henne han ser i det gröna!<br>
<br>
  »Dock – anfallsvis må<br>
Till väga jag gå!<br>
Jag var en pultron här om dagen!» <br>
Han gör, som han sagt.<br>
O, kärlekens makt!<br>
Allt mattare blir han afslagen.<br>
<br>
  Han segrar till slut, <br>
Och flickan brast ut<br>
I tårar, af ånger bedröfvad.<br>
Men riddaren log:<br>
»Gack aldrig i skog!<br>
Du funnit, hur lätt man blir röfvad.»</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "trost") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Trösteord till en vän, som fått korgen</h2>
            <p class="lyrics">  Broder! nyss fördärfvet nära,<br>
Står du räddad med din – korg.<br>
Barnskrik skall dig ej besvära,<br>
Icke split och horn och sorg.<br>
Lämna frieri't åt andra!<br>
Själf är du för god därtill.<br>
Icke dem jag just vill klandra,<br>
Men jag dig berömma vill.<br>
<br>
  Ack! man födes ju till repet,<br>
Lika som till – vigselring.<br>
Hal och artig, det är knepet,<br>
Annat allt gör ingenting;<br>
Ty hvad gagnar i den vägen<br>
Hjärta väl och karakter,<br>
Om man är på ord förlägen<br>
Och sig ej att smickra lär?<br>
<br>
  Nej, man krusa skall och buga,<br>
Förren ett osällt ja man får,<br>
Och så full den sköna ljuga,<br>
Som i henne nånsin går.<br>
Då jag segern skall förklara<br>
Uppå älskarns sida visst;<br>
Rättfram får man aldrig vara,<br>
Nej, min broder, list mot list!<br>
<br>
  Därför, när en karl får korgen,<br>
Tänker jag: en redlig man!<br>
Ty mig detta är en borgen,<br>
Att han icke hyckla kan.<br>
Intet huskors bör få trycka<br>
Ned en själ, som handlar så.<br>
Han är värd sin stora lycka,<br>
Han är värd att – korgen få.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

     if (section === "fullmanen") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Sång till fullmånen</h2>
            <p class="lyrics">  Trefliga prostfar! jag griper i lyran,<br>
Eldad af drufvornas jäst,<br>
Dig för att prisa i saliga yran,<br>
Den jag nu erfar som bäst.<br>
Sakta, försiktigt, som jag, du dig höjer,<br>
Klotrund och däsig; lull, lull!<br>
Kaka af maka sig alltid förnöjer!<br>
Du, liksom jag, är nu – full.<br>
<br>
  Herdar, herdinnor! Er gudfar anländer,<br>
Inviger lunden till lek.<br>
Alla I Bacchi och Cyprias fränder,<br>
Börjen ert pimpel och smek!<br>
Hjältar af månskenet, hela paraden!<br>
Nu blir att visa sig rask,<br>
Klagen på ödet! och sucken! och baden<br>
Fälten med tårarnas slask!<br>
<br>
  Här vill jag sitta och endast betrakta<br>
Gubben i hela sin front.<br>
Hur han marscherar så makligt och sakta<br>
Öfver den blå horisont!<br>
Säkert det går; ty han känner sin bana,<br>
Äfven i fyllan, allt nog;<br>
Likaså säkert som jag utaf vana<br>
Hittar till närmaste krog.<br>
<br>
  Plirögd och salig hit neder han blickar,<br>
Myser så småsäll och nöjd.<br>
Sviker mig ögat? jag tror, att han nickar<br>
Åt mig från svindlande höjd!<br>
Gissar jag rätt? törs jag väl proponera<br>
Brorskål? – en ära så stor!<br>
Åter du nickar, du tycks acceptera? –<br>
Skål då, min himmelska bror!<br>
<br>
  Ack, hvilken nolla i margfaldig styckjom<br>
Är mot herr bror jag likväl!<br>
Så, till exempel, min styrka i dryckjom<br>
Vida är känd, och med skäl:<br>
Hvad är dock den mot din himmelska skalles?<br>
O, jag mitt bräckliga mull!<br>
Trettio nätter du rumlar inalles,<br>
Innan du riktigt blir full.<br>
<br>
  Käftarna pösa ju mera jag dricker,<br>
Liljorna flykta sin kos,<br>
Och den förrädiska supskylten spricker<br>
Ut på min jordiska nos.<br>
Ständigt förblifver <i>din</i> färg dock densamma:<br>
Smäktande, liljeblek, ljus.<br>
Aldrig din älskvärda kind står i flamma,<br>
Oaktadt tusentals rus.<br>
<br>
  Hade jag blott din hejdundrande strupa<br>
Och din jungfruliga hy!<br>
Käraste vänner, hvad jag skulle supa!<br>
Då blef min födelse ny;<br>
Alla supbröder förmörka jag skulle,<br>
Likasom du gör med soln.<br>
Ha! när de lågo där slagne och fulle,<br>
Sutte jag kapprak på stoln.<br>
<br>
  Näsvisa lymlar ej då skulle peka<br>
Uppå min näsa, som nu.<br>
Hvilken som såge på kinden, den bleka,<br>
Tänkte då: »Nykter är du!»<br>
Mången rödbrusig kokett, som med vånda<br>
Dricker sin ättika, fy!<br>
Skulle med kyssar till räkning mig stånda,<br>
Endast hon finge min hy.<br>
<br>
  Ända på visan! Till västliga krogen<br>
Skyndar min gynnare sig.<br>
Litet af pannan blott syns bakom skogen,<br>
Afsked den nickar åt mig.<br>
Redan så tidigt? God natt! jag beklagar!<br>
Glöm ej din jordiska vän!<br>
Dock, har ej fara! om trettio dagar<br>
Råk's vi väl – fulla igen.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "askan") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Åskan</h2>
            <p class="lyrics">   Må solsken, doft och västanväder<br>
Fritt vara älskares begär!<br>
Men åskan allra mest mig gläder,<br>
När hos min rädda mö jag är.<br>
<br>
   I solen hör hon till de blyga<br>
Och undan som dess stråle far.<br>
Hur blickar och sefirer smyga,<br>
Med schalen stänger hon en hvar.<br>
<br>
   Jag knappt får sitta henne nära,<br>
Dess hand jag sällan fatta får, –<br>
Och skulle jag en kyss begära,<br>
Hon rodnar, blir så stött och – går.<br>
<br>
   Men åker Tor uti det höga,<br>
Och fästets blå i eld är bytt,<br>
Då minnes hon sin blyghet föga<br>
Och smyger till det bröst, hon flytt.<br>
<br>
   Den höga, hvita oskuldspannan<br>
Hon lutar emot mig, så huld.<br>
Jag löser lockar från hvar annan<br>
Och leker fritt med deras guld.<br>
<br>
   Och ömma blicken, som plär fara<br>
Liksom ett stjärnskott snabb förbi,<br>
Nu söker den mitt öga bara<br>
Att hämta styrka däruti.<br>
<br>
   Jag känner, huru barmen svallar,<br>
Och hur mot mitt dess hjärta slår.<br>
Men komma där för täta knallar,<br>
Jag lika många famntag får.<br>
<br>
   Att kvalmet ännu mer ej öka,<br>
Hon kastar schalen, lossar band;<br>
Och länder får min blick besöka,<br>
Som sågos knappt af solens brand.<br>
<br>
   Jag ej behöfver handen leta;<br>
I min den hvilar, mjuk och späd,<br>
När blixtarna bli allt för heta,<br>
Bli mina kyssar heta med.<br>
<br>
   Och sinom tusen får jag trycka,<br>
Att kind, att hals blir purpurröd.<br>
Hon talar blott om kärleks lycka<br>
Och hur en man är kvinnans – stöd.<br>
<br>
   Men ack! när Tor har slutat striden,<br>
Blir Frejas dyrkan blyg också;<br>
Om åskan räckte hela tiden,<br>
Det kunde mycket hända då!</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "arkadien") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Äfven jag var i Arkadien!</h2>
            <p class="lyrics">   Till Fannys rum jag smög så sakta,<br>
Som endast älskaren förmår.<br>
Så, när man himmeln vill betrakta,<br>
Försiktigt man på jorden går.<br>
<br>
   O, sömnens gud! åt dig allena<br>
Min lofsång för hvad här jag såg!<br>
I slummer sänkt, den änglarena<br>
Till hälften satt, till hälften låg.<br>
<br>
   Af denna ljufva anblick tjusad,<br>
Jag fastläst stod, men tanken flög<br>
Och njöt, allt mer och mer berusad,<br>
När blicken ut på upptäckt smög.<br>
<br>
   Dess milda anda höjde barmen,<br>
Och vågor jag i lugnet fann.<br>
Dess kind var lutad emot armen,<br>
Och midt i snön en ros där brann.<br>
<br>
   Kring halsen lockarna sig göto,<br>
En skymning blond, likt sommarns natt,<br>
Ur kindens gropar löjen bröto,<br>
På pannan fridens ängel satt.<br>
<br>
   Till hälften öppen munnen myste,<br>
Likt mogen sommar frisk och glad.<br>
Bland dess koraller härligt lyste<br>
Af pärlor fram en liten rad.<br>
<br>
   Men plötsligt läpparna sig rörde,<br>
Och kärleksrikt de svällde fram.<br>
Mitt namn jag sakta hviskas hörde,<br>
Och i ett haf af fröjd jag sam.<br>
<br>
   Jag kunde mig ej längre styra,<br>
Ett altar jag för kyssen fann,<br>
Och, gripen af en salig yra,<br>
Jag böjde mig – och offret brann.<br>
<br>
   Nu borde väl den sköna vaknat,<br>
Men den, som vaknade, var – jag.<br>
Det var – en dröm, som mer jag saknat,<br>
Än verklighetens små behag.</p>
<p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "curious") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>A Most Curious Man</h2>
            <p class="lyrics"><i>Min översättning av <b>Den märkvärdiga mannen</b></i><br><br>
I know a most curious man,<br>
Whom surely the world should admire.<br>
Whatever a mortal one can,<br>
He claims to possess or acquire.<br>
 A curious man — that is clear!<br>
 Yet just a small pedant, I fear.<br>
<br>
Of Heaven’s own light he is sparing,<br>
Though none may obtain it for free;<br>
Yet learning he scatters unsparing,<br>
As if it were boundless as sea.<br>
 A curious man — that is clear!<br>
 Yet just a small pedant, I fear.<br>
<br>
You know that the earth is quite round,<br>
And dots must be set over “i”;<br>
But should you desire it profound,<br>
He’ll teach it as something gone by.<br>
 A curious man — that is clear!<br>
 Yet just a small pedant, I fear.<br>
<br>
A knot you can certainly tie,<br>
A candle you know how to trim;<br>
But go there and humbly apply,<br>
And lessons will flow out from him.<br>
 A curious man — that is clear!<br>
 Yet just a small pedant, I fear.<br>
<br>
He grants that the Maker is wise,<br>
Yet one who is wiser he knows;<br>
Whom exactly he never supplies —<br>
But he and his “Self” are quite close.<br>
 A curious man — that is clear!<br>
 Yet just a small pedant, I fear.</p>
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }

    if (section === "laughingface") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Laughing Face / Broken Core</h2>
            <p class="lyrics"><i>Baserad på <b>Mitt konterfej</b></i><br><br>
Oh what a spectacle—look at me now<br>
A painted smile, take a bow<br>
A charming face, a clever line<br>
A harmless fool by design<br>
<br>
They say I shine, they say I glow<br>
Irresistible in the show<br>
But every glance that falls my way<br>
Never sees what hides beneath the play<br>
<br>
I hesitated—should I appear?<br>
Or scatter this image far and near?<br>
A thousand hearts set into flame<br>
For someone they can’t ever claim<br>
<br>
 It’s only natural, isn’t it so?<br>
 To love the mask, but never know<br>
 The cost of watching, wanting more<br>
 A laughing face—a broken core<br>
<br>
I can’t help it, I play my part<br>
A single role, a borrowed heart<br>
You hold my image, day and night<br>
In waking thoughts and dreams so bright<br>
<br>
You call me warmth, you call me light<br>
But something in me died from sight<br>
What once was softened by a gaze<br>
Now stands alone in endless haze<br>
<br>
There was a time—reflections kind<br>
Mirrors lit by another mind<br>
Her eyes would shape what I could be<br>
Turn desert bones to living sea<br>
<br>
But death came through and broke the glass<br>
And all those gentle visions passed<br>
Now shadows settle in my face<br>
And laughter learns to take their place<br>
<br>
<i>So I joke—because I must<br>
Turn my sorrow into dust<br>
Feed them laughter, keep them fed<br>
While something in me stays half-dead</i><br>
<br>
 It’s only natural—don’t you see?<br>
 The brighter mask, the less of me<br>
 A thousand smiles the world adores<br>
 But grief is locked behind the doors<br>
<br>
If they could read the ink I write—<br>
A thorn for pen, and tears for light<br>
They’d thank the silence they were given<br>
To live untouched by what I’m living</p>
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
        `;
    }





    if (section === "stubbe") {
        content.innerHTML = `
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
            <h2>Titel</h2>
            <p>Texten...</p>
            <p class="back" onclick="loadContent('songs')">← Tillbaka</p>
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

            <p>2026-04-08 Mailat Lennar Waslings son</p>

            <p>2026-04-10 'Borup' anlände med posten</p>

            <p>2026-04-10 Mailat kulturansvarig på Aftonbladet (i brist på adress till arkivet) om möjligheter att få tag på det som publicerats där en gång i tiden</p>

            <p>2026-04-11 Förlorade visor Del 1 släppt</p>

            <p>2026-04-12 Länkar till sånger</p>
        `;
    }
   
}


    window.onload = function() {
    loadContent('intro');
    };