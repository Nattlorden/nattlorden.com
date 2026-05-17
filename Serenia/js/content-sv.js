const contentSV = {
  world: {
    overview: {
      menuTitle: "Översikt",
      title: "Världen",
      blocks: [
  { 
    type: "text", 
    content: `Serenia är en mörk, lågmäld fantasyvärld av sten, dimma, tro, handel, makt och minnen som vägrar ligga still.` 
  },

  { 
    type: "image", 
    src: "assets/world/Serenias Harn.png", 
    size: "small",  
    caption: `Hârn` 
  },

  { 
    type: "text", 
    content: `Serenia vilar i grunden på rollspelsvärlden HârnWorld, skapad av N. Robin Crosby, Keléstia Productions och Columbia Games.

I enlighet med deras koncept utspelar sig allt efter år 720 TR, där det officiella källmaterialet upphör.

Jag tillåter mig att låta vissa aspekter vara mer utvecklade — exempelvis mode och uttryck. Distanser och folkmängder kan också vara något överdrivna jämfört med originalet.

Ett fåtal karaktärer från kanon förekommer. Deras tolkning och framställning i denna version är helt och hållet mitt ansvar — Columbia Games och övriga rättighetsinnehavare bär inget ansvar i detta sammanhang.` 
  },

  { 
    type: "image", 
    src: "assets/world/landscape.jpg", 
    size: "small",  
    caption: `Kuststräcka i Serenia` 
  }
],      
      showPlaceholder: false
    },
    geography: {
      menuTitle: "Geografi",
      title: "Geografi",
      text: "Här kommer kartor, regioner, landskap, färdvägar och viktiga platser att samlas."
    },
    politics: {
      menuTitle: "Politik & makt",
      title: "Politik & makt",
      text: "Här kommer material om senatorer, maktblock, handelsintressen, lojaliteter och konflikter."
    },
    magic: {
      menuTitle: "Magi & mysterier",
      title: "Magi & mysterier",
      text: "Här samlas lågmäld magi, religiösa krafter, omen, artefakter och det som aldrig riktigt låter sig förklaras."
    }
  },

  story: {
    overview: {
      menuTitle: "Översikt",
      title: "Berättelsen",
blocks: [
  { 
    type: "text", 
    content: `<b><i>Nålens båda ändar</i></b> är en mörk, lågmäld fantasyroman om sten, dimma, tro, handel, makt och minnen som vägrar ligga still.` 
  },

  { 
    type: "image", 
    src: "assets/story/original version.jpg", 
    size: "small",  
    caption: `Originalversionen — utskriven med en tidig bläckstråleskrivare, med hålen på fel sida (!)` 
  },

  { 
    type: "text", 
    content: `Berättelsen tog sin början kring 1990, som minnesanteckningar från en rollspelskampanj. Mellan spelmötena växte materialet till något mer — en dagbok, skriven uteslutande i första person och med stora tidsglapp mellan händelserna.

Texten överlevde en märklig resa genom teknikens skiftningar: mellan operativsystem, genom inkompatibla filformat, och slutligen i vila på en 3,5-tums diskett — tills läsare inte längre fanns att tillgå. Först långt senare kunde innehållet återläsas, via en extern USB-enhet.

När en gammal rollspelskamrat gick bort under 2025 blev det tydligt att berättelsen inte kunde lämnas i detta fragmenterade skick. Den behövde omformas — till en sammanhållen roman. Luckor fick fyllas, minnen prövas, och nytt material skrivas där det gamla inte längre bar.

Det som finns — och det som gradvis kommer att tillkomma — är resultatet av det arbetet.` 
  }
    ],
    showPlaceholder: false
    },
    chapters: {
      menuTitle: "Kapitel",
      title: "Kapitelöversikt",
      text: `Kapitelstruktur, arbetsstatus och korta sammanfattningar.

      v0 - Originaldagbok
      v1 - Partiell omskrivning till tredje person
      v2 - Modern revision, expanderad
      v3 - Revision baserad på senare erfarenhet - första rimligt publika version
      
      <a class="internal-link" data-section="story" data-page="chapter01">
  Kapitel 1.v3 - <i>Keri McCree</i></a><a class="internal-link friend-only" data-section="story" data-page="chapter02">
  Kapitel 2.v3- <i>Raven</i></a><a class="internal-link friend-only" data-section="story" data-page="chapter03">
  Kapitel 3.v3 - <i>Morgonljus</i></a><a class="internal-link friend-only" data-section="story" data-page="chapter04">
  Kapitel 4.v3 - <i>Nemiran</i>    -  (inskjutet i v3, del av kap3 i v2 med följande knuff)</a><a class="internal-link friend-only" data-section="story" data-page="chapter05">
  Kapitel 5.v3 - <i>Det som följer</i>     - (slutet i v2 knuffat vidare till kap6.v3)</a><a class="internal-link friend-only" data-section="story" data-page="chapter06">
  Kapitel 6.v3 - <i></i>     - (slutet i 4.v2 knuffat vidare till kap6.v3)</a>
      `,
    showPlaceholder: false
    },

    ...chaptersSV_01_05,
    ...chaptersSV_06_10,

    timeline: {
      menuTitle: "Tidslinje",
      title: "Tidslinje",
      text: "Här kommer centrala händelser, resor, brytpunkter och större rörelser i berättelsen att listas."
    },
    appendix: {
      menuTitle: "Appendix",
      title: "Appendix",
      text: "Noteringar och tilläggsinformation om berättelsen kommer att hamna här."
    }
  },

  characters: {
    keri: {
      menuTitle: "Keri",
      title: "Keri McCree",
      blocks: [
      { 
        type: "text", 
        content: `Berättelsens huvudkaraktär` 
      },

      { 
        type: "image", 
        src: "assets/chars/Keri_pouch.png", 
        size: "small",  
        caption: `Keri` 
      },

      { 
        type: "text", 
        content: `Skräddare, överlevare och maktspelare mot sin egen vilja — eller kanske inte helt.` 
      }
    ],  
    showPlaceholder: false
    },
    raven: {
      menuTitle: "Raven",
      title: "Raven Blackburn",
      blocks: [
      { 
        type: "text", 
        content: `Alter ego till Keri` 
      },

      { 
        type: "image", 
        src: "assets/chars/Raven.png", 
        size: "small",  
        caption: `Raven` 
      },

      { 
        type: "text", 
        content: `Raven är inte ett enkelt alias utan en annan skärpa i samma människa: kallare, farligare, mer beslutsam.` 
      }
    ],  
    showPlaceholder: false
    },
    kelly: {
      menuTitle: "Kelly",
      title: "Kelly McCree",
      blocks: [
      { 
        type: "text", 
        content: `Mellansyster McCree` 
      },

      { 
        type: "image", 
        src: "assets/chars/Kelly.jpg", 
        size: "small",  
        caption: `Kelly` 
      },

      { 
        type: "text", 
        content: `` 
      }
    ],  
    showPlaceholder: false
    },
    athina: {
      menuTitle: "Athina",
      title: "Athina McCree",
      blocks: [
      { 
        type: "text", 
        content: `Yngsta syster McCree` 
      },

      { 
        type: "image", 
        src: "assets/chars/Athina_fixhand.jpg", 
        size: "small",  
        caption: `Athina` 
      },

      { 
        type: "text", 
        content: `` 
      }
    ],  
    showPlaceholder: false
    },
    dramond: {
      menuTitle: "Dramond",
      title: "Dramond Hezhen",
      blocks: [
      { 
        type: "text", 
        content: `Köpman` 
      },

      { 
        type: "image", 
        src: "assets/chars/", 
        size: "small",  
        caption: `` 
      },

      { 
        type: "text", 
        content: `` 
      }
    ],  
    showPlaceholder: false
    },
    fabien: {
      menuTitle: "Fabien",
      title: "Fabien Trulor",
      blocks: [
      { 
        type: "text", 
        content: `Bibliotekarie för Rethems Heraldiska Bibliotek` 
      },

      { 
        type: "image", 
        src: "assets/chars/Fabien.png", 
        size: "small",  
        caption: `Fabien` 
      },

      { 
        type: "text", 
        content: `Lärd, sökare och stundtals opraktisk nog att följa en tanke rakt in i fara.` 
      }
    ],  
    showPlaceholder: false
    },
    hund: {
      menuTitle: "Hund",
      title: "Hund",
      blocks: [
      { 
        type: "text", 
        content: `från templet` 
      },

      { 
        type: "image", 
        src: "assets/chars/Hund.png", 
        size: "small",  
        caption: `Fabien` 
      },

      { 
        type: "text", 
        content: `Lärd, sökare och stundtals opraktisk nog att följa en tanke rakt in i fara.` 
      }
    ],  
    showPlaceholder: false
    },
    deren: {
      menuTitle: "Deren",
      title: "Deren (av Golothe)",
      blocks: [
      { 
        type: "text", 
        content: `från templet` 
      },

      { 
        type: "image", 
        src: "assets/chars/", 
        size: "small",  
        caption: `` 
      },

      { 
        type: "text", 
        content: `Lärd, sökare och stundtals opraktisk nog att följa en tanke rakt in i fara.` 
      }
    ],  
    showPlaceholder: false
    },
    kaelis: {
      menuTitle: "Kaelis",
      title: "Kaelis (av Golotha)",
      blocks: [
      { 
        type: "text", 
        content: `från templet` 
      },

      { 
        type: "image", 
        src: "assets/chars/", 
        size: "small",  
        caption: `` 
      },

      { 
        type: "text", 
        content: `Lärd, sökare och stundtals opraktisk nog att följa en tanke rakt in i fara.` 
      }
    ],  
    showPlaceholder: false
    },
    joreth: {
      menuTitle: "Joreth",
      title: "Joreth från Akidale",
      blocks: [
      { 
        type: "text", 
        content: `Legionär` 
      },

      { 
        type: "image", 
        src: "assets/chars/Joreth_stripped.png", 
        size: "small",  
        caption: `Joreth` 
      },

      { 
        type: "text", 
        content: `Lärd, sökare och stundtals opraktisk nog att följa en tanke rakt in i fara.` 
      }
    ],  
    showPlaceholder: false
    },
    serenima: {
      menuTitle: "Serenima",
      title: "Serenima Dethale",
      blocks: [
      { 
        type: "text", 
        content: `Thardisk senator, Magistrat av Shiran
        <b> [HârnWorld kanonisk karaktär]</b>` 
      },

      { 
        type: "image", 
        src: "assets/chars/Serenima.png", 
        size: "small",  
        caption: `Serenima` 
      },

      { 
        type: "text", 
        content: `NOT: Divergens mot kanon. Har ökat på hennes skönhet och sensualism baserat på hennes relation med Jeredosta, då jag inte vill ha honom lika lättmanipulerad så får Serenima vara desto bättre på just det.` 
      },
      { 
        type: "image", 
        src: "assets/chars/Serenima_canon.jpg", 
        size: "small",  
        caption: `Serenima enl. HârnWorld. Copyright Columbia Games et.al, använd enbart för referens/korrektion` 
      }
    ],  
    showPlaceholder: false
    },
    jeredosta: {
      menuTitle: "Quarlid",
      title: "Quarlid Jeredosta",
      blocks: [
      { 
        type: "text", 
        content: `Thardisk Senator för Hediro. Legatus över Shiranlegionen.
        <b> [HârnWorld kanonisk karaktär]</b>` 
      },

      { 
        type: "image", 
        src: "assets/chars/Jeredosta.png", 
        size: "small",  
        caption: `Serenima` 
      },

      { 
        type: "text", 
        content: `NOT: Divergens mot kanon. Beskrivs som lättlurad, hade svårt att se honom som det på den positionen, så strök den biten. Det är bara Serenima som kan linda honom.` 
      },
      { 
        type: "image", 
        src: "assets/chars/", 
        size: "small",  
        caption: `` 
      }
    ],  
    showPlaceholder: false
    },
    kaerith: {
      menuTitle: "Kaerith",
      title: "Kaerith Melise",
      blocks: [
      { 
        type: "text", 
        content: `Kvinna av börd, Aleath` 
      },

      { 
        type: "image", 
        src: "assets/chars/Kaerith.png", 
        size: "small",  
        caption: `Kaerith` 
      },

      { 
        type: "text", 
        content: `` 
      },
      { 
        type: "image", 
        src: "assets/chars/", 
        size: "small",  
        caption: `` 
      }
    ],  
    showPlaceholder: false
    }
  },

  music: {
    overview: {
      menuTitle: "Översikt",
      title: "Musiken",
      text: `Musiken i Serenia är inte skriven för att ackompanjera berättelsen.

Den existerar i samma rum.

Där berättelsen följer Keri och Raven genom handling och konsekvens, bär musiken det som inte kan sägas — spänning, minne, begär och tyngden av det som förblir outtalat.

Varje stycke behandlas som en del av samma värld, formad av dess ton, dess begränsningar och dess känsla av verklighet. Inte som illustration, utan som närvaro.

Vissa stycken hör till platser.
Andra till ögonblick.
Några till sådant som saknar namn.

────────────

Fragment av musik har alltid funnits där. Redan i sin tidigaste form innehöll texten partier avsedda att sjungas — ekon av en tradition som sträcker sig tillbaka till Tolkien, och vidare.

Avsikten att skapa musik har alltid funnits, men förutsättningarna har saknats. Det förändrades. Och när det väl gjorde det fanns det ingen anledning att hålla tillbaka.

Det första stycket som tog form var <i>Hush now, Little girl of mine</i>.

Det som började som en enskild sång växte till ett bredare musikaliskt landskap — inte bara ett soundtrack, utan ett parallellt uttryck för samma värld. Ett stycke blev flera. Några blev många.

Och med det momentumet började arbetet sträcka sig bortom Serenia.

Musiken tillhörde inte längre enbart berättelsen — men behövde fortfarande en struktur att existera inom. Den strukturen blev <b>"Serenia Records"</b>.`,
      showPlaceholder: false
    },
    songs: {
      menuTitle: "Sånger & Fragment",
      title: "Sånger & Fragment",
      blocks: [
     //{ type: "text", content: `<i>Hush now, little girl of mine</i> <span class="meta-text">Publicerad: 18 oktober 2025</span>` },
        { type: "image", src: "assets/songs/Athina_for_Spotify.jpg", size: "small",  caption: `<b><i>Hush now, little girl of mine</i></b> <span class="meta-text">Publicerad: 18 oktober 2025</span>` },
{ type: "text", content: `Den första sången skapad i modern tid — och den första för Serenia. Delar av texten har dock funnits i materialet sedan långt tidigare.

<a class="internal-link" data-section="music" data-page="hushNowLittleGirlOfMine">Text</a> <a href="https://open.spotify.com/album/2w0dRmusBFnDTSMA6RtMTC?si=RsTlLmkbQfWjvM9kCM7lkw" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/o8zNKDODnuE?list=RDo8zNKDODnuE" target="_blank" rel="noopener noreferrer">YouTube</a>
────────────` },

{ type: "image", src: "assets/songs/Vintervav.png", size: "small",  caption: `<b><i>Vintervävens ljus</i></b> <span class="meta-text">Publicerad: 26 november 2025</span>` },
{ type: "text", content: `Det närmade sig jul, men en julsång lät sig inte skrivas — den finns inte i Hârn (med undantag för en enstaka äventyrsmodul). Däremot finns vintersolståndet: tiden då väven är som tunnast och behovet av ljus som störst.

Idéerna tog olika riktningar och resulterade i tre versioner som jag var nöjd med. Detta är den som fick leva kvar i sin svenska originalform.

<a class="internal-link" data-section="music" data-page="vintervaven">Text</a> <a href="https://open.spotify.com/album/27dUFTvBVRn317aEqBts6Z?si=9u71Ta8hQj66wk4UstTSWw" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/KZpR6yB77XU?list=OLAK5uy_mZHE5L2d66lkD0u4KzMhE5jni5LzAb0kw" target="_blank" rel="noopener noreferrer">YouTube</a>
────────────` },

{ type: "image", src: "assets/songs/kindledsteps.png", size: "small",  caption: `<b><i>Night of Kindled Steps</i></b> <span class="meta-text">Publicerad: 27 november 2025</span>` },
{ type: "text", content: `Den andra av de tre versionerna. (Den tredje, som valdes till albumet, är <i>Where the Veil Grows Thin</i>.)

<a class="internal-link" data-section="music" data-page="kindledSteps">Text</a> <a href="https://open.spotify.com/album/7Lum3kMA3vIM8g1mawTlPo?si=zwnS3aQKRRyuKmOTaHc3og" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/b8ICe9RDMNQ?list=OLAK5uy_naLwlRZ941pj0uyzjT5e1iFFmJQC3mx98" target="_blank" rel="noopener noreferrer">YouTube</a>
────────────` },

{ type: "image", src: "assets/songs/Twofaces.jpg", size: "small",  caption: `<b><i>Two Faces</i></b> <span class="meta-text">Publicerad: 25 november 2025</span>` },
{ type: "text", content: `En renodlad singel — A- och B-sida — där Keri/Raven-dualiteten betraktas från två håll. Inte knuten till en specifik händelse i berättelsen.

<i><b>Two Faces of the Same Flame</b></i>
<a class="internal-link" data-section="music" data-page="twoFaces">Text</a> <a href="https://open.spotify.com/track/7lKaHehN4ebdmjzR9XeiVr?si=78a2d033e299454e" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/aCvqREqQJDM?list=RDaCvqREqQJDM" target="_blank" rel="noopener noreferrer">YouTube</a>

<i><b>I Wear the Dark You</b></i>
<a class="internal-link" data-section="music" data-page="theDarkYou">Text</a> <a href="https://open.spotify.com/track/5lDnOaYP7zsYhvIHD9KYo0?si=a6377726e08b455d" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/fwEHppbhQeM?si=d_FiEuBXHxl5ZnuT" target="_blank" rel="noopener noreferrer">YouTube</a>  
────────────` },

{ type: "image", src: "assets/songs/Ranger.png", size: "small",  caption: `<b><i>The Ranger and the Dozen</i></b> <span class="meta-text">Publicerad: 5 mars 2026</span>` },
{ type: "text", content: `Planerad för ett kommande album, men visade sig vara för rolig för att vänta — och fick därför stå på egna ben.

<a class="internal-link" data-section="music" data-page="ranger">Text</a> <a href="https://open.spotify.com/album/2ooiaEEKNgkWdm4SgpAXA6?si=SOKhKQzMQdC9PC-K9OrPIQ" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/fKZXAZapR_4?list=OLAK5uy_lJyue_RGOInI-hjmo6JkTIuV3eJAM7878" target="_blank" rel="noopener noreferrer">YouTube</a>
────────────` },

{ type: "image", src: "assets/songs/whoarewe.png", size: "small",  caption: `<b><i>Who Are We?</i></b> <span class="meta-text">Publicerad: 19 mars 2026</span>` },
{ type: "text", content: `Keri/Raven-temat återkommer — här mer som en dialog, nästan som en scen ur en musikal: två röster, och en spegelram utan glas.

<a class="internal-link" data-section="music" data-page="whoAreWe">Text</a> <a href="https://open.spotify.com/album/1cYPlpK59UZjd2BxslLIFt?si=0ih0hR7CS2a-MCEpuJPBiQ" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://youtu.be/oh_mRwJYcjw?list=OLAK5uy_m0mC6xbgcpegrlELHMZljqeI5c8snyb8c" target="_blank" rel="noopener noreferrer">YouTube</a>
────────────` }
        ],
        showPlaceholder: false
    },

    bothends: {
      menuTitle: "- Both ends of the needle",
      title: "Both ends of the needle",
      intro: "Mitt första fullalbum. Soundtrack till första delen av boken.",
      caption: "Omslagsbild: Keri McCree — plats okänd",
      showPlaceholder: false
    },

    bothendspt2: {
      menuTitle: "- Both ends of the needle Pt.2",
      title: "Both ends of the needle (part two)",
      intro: "Andra delen av albumsviten.",
      caption: "Omslagsbild: Sjöormen under bygge på Aleaths skeppsvarv",
      showPlaceholder: false
    },

    bothendspt3: {
      menuTitle: `- Province (Pt.3)`,
      title: "Province",
      intro: "Tredje delen av albumsviten.",
      caption: "Omslagsbild: Blandat nybyggande i Serenien",
      showPlaceholder: false
    },




    instrumentals: {
      menuTitle: "Instrumentala teman",
      title: "Instrumentala teman",
      text: `Utöver en ren nyfikenhet på att skriva instrumentalt finns också en annan tanke som är svår att bortse från: den snabba utvecklingen inom AI. Det är inte orimligt att tänka sig att det en dag blir möjligt att generera — om inte hela spelfilmer — så åtminstone längre sammanhängande sekvenser och berättelser.

Till sådana bilder krävs en annan sorts musik än den sjungna.

Att skriva orkestralt är dessutom svårt på ett helt annat sätt än att skriva vanliga låtar. Det är en annan tradition, ett annat hantverk och i många fall en annan utbildning. The Beatles behövde George Martin för sina orkestreringar. Björn & Benny hade Anders Eljas.

Jag saknar den klassiska vokabulären och skolningen, så den mest framkomliga vägen för mig har blivit:<ol>
<li>Att beskriva känslor, rörelser och stämningar — vilket ironiskt nog visat sig vara en av de mest användbara sakerna i samtal med AI.</li>
<li>Att arbeta tematiskt — inspirerat av dokumentärer om John Williams arbete med Star Wars, där identiteter, konflikter och relationer får egna musikaliska språk.</li>
<li>Att medvetet ställa mig på axlarna av äldre tonsättare. Klassisk musik ligger i de flesta fall långt bortom upphovsrättsliga problem, och det vore dumt att inte lära av människor som redan löst många av dessa problem bättre än jag själv hade kunnat.</li>
</ol><h2>Giganterna</h2>Det vore enkelt att luta sig mot de mest välkända namnen och skriva pampig, storslagen symfonik. Men det är egentligen inte vad Serenia behöver.

Jag söker inte främst heroism.
Jag söker narrativ orkestral musik med personliga identiteter.

<h3>Lili Boulanger</h3>Relationer, skuld, inre konflikter och kvinnliga perspektiv utan klichéer.

<h3>Gustav Holst</h3>Krig, ritualer, processioner och kosmisk likgiltighet snarare än heroism.

<h3>Arvo Pärt</h3>Sorg, beslut, uppoffring och sanningens pris.

<h3>Einojuhani Rautavaara</h3>Det övernaturliga, Väven, och <i>sådant som inte riktigt låter sig förstås</i>.

<h3>Jean Sibelius</h3>Ödeslinjer, långsamma katastrofer och makt som ackumuleras.

<h3>Ralph Vaughan Williams</h3>Minnen, platser, inre monologer och moraliskt tvivel.

För mer uttalat nordisk klang får Sibelius ibland sällskap av Allan Pettersson och Ralph Lundsten.
(Carl Nielsen och Edvard Grieg var också kandidater och kan mycket väl dyka upp senare.)

<h2>Tematik<h2><h3>Keri / Raven</h3>Dubbelnatur. Samstämmiga, men inte identiska.

Jag är hopplöst förälskad i cellon som instrument. En vacker dag köper jag mig en. Dessutom har jag haft ett nästan osannolikt antal cellister i min närhet genom livet, så det är nog ofrånkomligt att cellon får en mer framträdande plats här än vad som kanske är normalt.

Keri = viola
Raven = cello

Raven kan dessutom gärna stödjas av försiktig kontrabas undertill.

<h3>“Den andra kvinnan”</h3>Serenima, Kaerith, Marvae och andra kvinnor som bär lockelse, intelligens, makt eller fara utan att vara samma person.

Här söker jag ljusare klanger:<ul>
<li>altflöjt</li>
<li>oboe d’amore</li>
<li>basklarinett</li>
<li>mjuka träblås i kombination snarare än ren flöjt</li>
</ul><h3>“Manligt stöd”</h3>
Joreth, Aylyn, Fabien, Hund och Dramond (när han inte är NightBlade).<ul>
<li>oboe</li>
<li>engelskt horn</li>
<li>pizzicato-kontrabas</li>
<li>låga stråkar</li>
</ul>Inte dominans. Snarare stabilitet, resonans och riktning.

<h4>Några ytterligare grundteman finns också definierade för:</h4><ul>
<li>det magiska</li>
<li>det gudomliga</li>
<li>mörker och fara</li>
</ul>Enskilda scener byggs sedan genom att kombinera dessa språk med varandra.
<h2>Kortfattade förhållningsregler</h2><b>Koordinera känsla, inte form.
Koordinera hållning, inte musik.
Koordinera etik, inte estetik.</b>`,
      showPlaceholder: false
    },

    symph1: {
      menuTitle: "- Serenia Symphony No.1",
      title: "Serenia Symphony No.1 (Opus 253)",
      blocks: [
     { type: "image", src: "assets/songs/Symphony No1 3k.png", size: "small",  caption: `<b><i>Symphony No.1</i></b> <span class="meta-text">Publicerad: 6 maj 2026</span>` },
{ type: "text", content: `
  <a href="https://open.spotify.com/album/5s077kCVBL0AIyARiG1bQl?si=NrFn9dpYSOWZ9D4WFj3ZrA" target="_blank" rel="noopener noreferrer">Spotify</a> <a href="https://www.youtube.com/watch?v=AdJ4n_xAbTo&list=OLAK5uy_n1zhulo_nsOexXuMc9HP-84ZrG6xGx5LM" target="_blank" rel="noopener noreferrer">YouTube</a>
  
  <h3>Overture</h3>
  D-moll, 4/4, 72bmp

  Tröskeln. 
  En värld som inte bryr sig. 
  En stad som inte bryr sig som andas om natten.
  
  Golotha öppnar upp sig. 
  Varor, vin, röster, närhet.
  Attraktiv men inte säker.
  
  Vad det kostar att stanna här. 
  Inget våld, men känslan att något kommer att bli taget från dig om du är oförsiktig.

  Nedsaktande.
  Inget avslut. 
  Uppmärksamhet, inte rädsla.

────────────
<h3>Satin After Dark - Notturno, con cautela</h3>
D-moll, 4/4, 60-75bpm

Natt i Golotha. Staden känns farlig, men välkänd. 
Keri på för henne okänd mark. Elegant, kontrollerat, framåtrörelse utan tvekan.
Mannen - varm, inbjudade, charmerande, artikulerad men aldrig utan fullbordan. Spänning under ytan.
Raven nära ytan - mer djup, latent fara. Lutar mot intimitet, men utan att bestämma sig.
Avbrott - nedsaktning som att hålla andan.
Avslut utan upplösning. En röst kvarstår innan den tonar ut. Natten fortsätter.

────────────
<h3>Nightraven - Allegro ombroso</h3>
D-moll, 4/4, 110bpm

Smygande, elegans, rovdjur.
Osedd rörelse genom sovande stan. 
Atmosfären nattlig, intelligent, farlig snarare än öppet våldsam.
Bilden av Raven glidande mellan takåsar och gatubelysning.
Introduktionen av Raven som en från Keri separat identitet, kallare, skapare och ökande mytisk.
Influerat av gotisk kammarorkester, modern dark fantasy instrumenterinf och återhållen filmisk spänning.

────────────
<h3>Nemiran Street Adagio oscuro</h3>
D-moll, 4/4, 72bpm

Raven anländer till Nemiran Street. Huset känns vaket.

Raven provas av husets 'invånare'.

Konfontation. NightBlade testar hennes nerv. Ingen upplösning. Luften tätnar.

────────────
<h3>Presto furioso</h3>
A-moll. Allegro - 135bpm

Panik, flykt.
Avbruten rörlse, tappat andan.

Chock.
Avbrott. Ingen rörlse.

────────────
<h3>Adagio lamentoso</h3>
G-dur, 4/4, 85bpm

Efter chocken.
Stillhet.
Kroppen har stannat.

Sorg
Tyst, kontrollerad sorg

Slut
Inget avlut.
Ansvar återstår.

────────────
<h3>Training - Andante deciso</h3>
G-dur, 3/4, 110bpm

Träning.
Reperition, ansträngning, inget resultat.

Uthållning.
Kroppen anpassar sig. Handen fortsätter.

Genombrott.
Styrkan bär. Arbetet är klart.

────────────
<h3>Mirror - Adagio, con tensione</h3>
Atonal, rubato mellan 60 och 110bpm

Reflektion.
Spegelbild.
Igenkännande och tvekan.

Spänning.
Tyst intern konflikt.

Övergång.
Utrymmet krymper.

────────────
<h3>Herth-Akan - Grave rituale</h3>
D-moll, 4/4, 120bpm

Tempel.
Mörk stillhet.
Ordlös kör observerar.

Prövningen.
Onormal kamp.
Kontrollerat våld.

Nödvändig död.
Odramatisk.
Ingen nåd.

Efter.
Raven kvarstår.
Ritualen likaså.

────────────
<h3>Liber - Lento misterioso</h3>
G-dur, 4/4, 110bpm

Biblioteket.
Platsen lyssnar.

Böckerna.
Kunskap erbjuden.
Utan intention?

Spegelboken.
Det du är.
Återreflekterat.

────────────
<h3>Lighthours lament</h3>
D-moll, 4/4, 75bpm

Ruinen.
Kall sten under månljus.

Reflektikoner.
Ljuset rör sig på havsytan.

Igenkännelse.
Ett avlägset minne andas.
Och falnar.

────────────
<h3>Tracks in snow - Allegro inquieto</h3>
G-dur, 4/4, 120bpm

Spår.
Forsatt rörelse.
Snön avslöjar dig.

Förföljelse.
Trycket ökar.
Ingen flykt.

Konfrontation.
Fem mot en.
Brutal nödvändighet.

Intervention
Oväntad hjälp tvärs ravin.

Efteråt.
Andning.
Smärta.
Överlevnad.

────────────
<h3> Negotiations - Andante considerato</h3>
G-dur, 3/4, 110bpm

Övervägande.
En fråga utan motstånd.

Beskydd.
Ett problem accepterat.

Möjlighet.
En horisont öppnar sig.

Beslut.
Inget sagt.
Allt faller på plats.

────────────
<h3>Ilvir - Grave theurgicum</h3>
E-moll, 4/4, 135bpm

Nedstigande.
Vikt, illamående.
Ritual.

Fristaden.
Tyngd.
Tystnad.

Närvaro.
Orörligt.
Allt förändras.

Gåven.
Något placerad.
Inget svar tillåtet.

Utgång.
Världen fortsätten.
Något snedjusterat.

────────────
<h3>Anisha - Grave, inevitabile</h3>
D-moll, 4/4, 140bpm

Gudastenen.
Uråldrig kraft svarar.

Insikt.
Förståelse för sent.

Motståndaren.
Han var redan här.

Lås.
Inget kan göras ogjort.

────────────
<h3>Hru - Processionale immobile</h3>
D-dur, 4/4, 110bpm

Stillhet.
Världen väntar.

Det första steget.
Stenen börjar röra sig.

Procession.
Rörelse ur tiden.

Ankomst.
Resan slutar.
Inget reagerar.

────────────
<h3>Araka-Kalai - Conflagratione biologica</h3>
D-moll huvudsakligen, 4/4, ~145 BPM

Den perfekta ordningen.
Kall precision marcherar upp.

Störning.
Det organiska stör mönstret.

Överväxt.
Liv fördubblar sig utan kontroll.

Kollaps.
Perfektionen fallerar.

Överlevnad.
Det som lever, återstår

────────────
<h3>NightBlade's Death - Adagio funebre</h3>
G-dur, rubaro, 3/4, 72bpm

Efterspel.
Slagfältet ligger tyst.

Felaktig säkerhet.
Kärlek förlorad.

Agerandet.
Utan eftertryck.

Kollaps.
Styrkan fallerar.

Sömn.
Medvetande fördolt.

────────────
<h3>The Eye - Adagio, restitutio</h3>
G-moll, 4/4, 110bpm

Återställande.
Det som placerats - återtas.

Tomhet.
Inget ersätter.

Ögat.
En del återlämnas.

Efter.
Livet fortsätter.
Förändrat.

────────────
<h3>Epilogo sospeso (part I) </h3>
D-dur (rörelse), 4/4, 70bpm

Efteråt.
Faran har passerat.

Möjligheter.
Horisonten öppnar sig.

Liv.
Tillräckligt, för nu.

Paus.
Historien andas.

` }
        ],
        showPlaceholder: false
    },
/* Overture: Cinematic orchestral score with a prominent solo violin lead, The arrangement features a string ensemble, orchestral percussion, and a grand piano, The solo violin performs a melancholic, legato melody characterized by wide vibrato and expressive portamento, The string section provides harmonic support with sustained pads and rhythmic pizzicato passages, Orchestral percussion includes deep timpani rolls and sharp snare drum accents that emphasize transitions, A grand piano enters with arpeggiated figures in the mid-to-high register, The piece follows a dynamic arc, building from a sparse solo violin opening to a full orchestral crescendo, The tempo is approximately 72 BPM in 4/4 time, likely in the key of D minor 
[Threshold – the world does not care]
[Muted strings, slow and static. Minimal harmonic movement. The feeling of an indifferent city breathing at night.]

[The city opens itself]
[Subtle inner pulse emerges. Low woodwinds hint at warmth and invitation. Goods, wine, voices, closeness — attractive but not safe.]

[What it costs to stay]
[The texture darkens. Lower registers gather quietly. No violence, only the sense that something can be taken if you are careless.]

[End]
[The motion slows. No resolution. The listener is alert, not afraid.]

*/
/* Satin after dark Contemporary classical and cinematic chamber music, The arrangement features a solo cello and a solo violin performing intricate, overlapping melodic lines, The cello provides a rich, resonant lower register with frequent use of double stops and legato phrasing, while the violin executes soaring, lyrical melodies in the upper register, The piece utilizes a call-and-response structure between the two instruments, often converging into harmonized passages, The tempo is rubato, fluctuating between 60 and 75 BPM, with a 4/4 time signature, The key is D minor, The production is dry with a natural room reverb, capturing the mechanical sounds of the bows on the strings and the vibrato of the performers
[Opening – night in Golotha]
[Muted strings establish a slow, nocturnal pulse. The city feels dangerous but familiar. No urgency, only awareness.]

[Arrival – Keri in unknown territory]
[Viola enters with a restrained, confident motif. Elegant, controlled, moving forward without hesitation.]

[The man]
[A warm, inviting woodwind line appears (alto flute or oboe d’amore), charming and articulate, never fully resolving. Subtle tension beneath the surface.]

[Shift – Raven close to the surface]
[Low cello begins to resonate under the viola, adding depth and latent danger. The music leans toward intimacy without committing.]

[Interruption]
[The texture thins. Harmony shifts slightly brighter but remains ambiguous. Motion slows, as if holding breath.]

[End]
[Music withdraws without resolution. One voice remains briefly, then fades. The night continues.]

*/
/* Nightraven - Allegro ombroso - Cinematic folk and orchestral hybrid, The arrangement features a prominent cello playing a melodic lead with expressive vibrato and glissando, A rhythmic acoustic guitar provides a driving foundation with percussive strumming and palm-muted accents, A deep, resonant synth bass or sub-bass reinforces the low end, The percussion consists of a steady, mid-tempo kick drum and a subtle shaker, Orchestral strings provide sustained harmonic pads and staccato rhythmic support in the background, The piece is in 4/4 time at 110 BPM in the key of D minor

Dark fantasy orchestral piece with stealth, elegance, and predatory momentum. Driven by pulsing low strings, tense rhythmic patterns, and expressive viola lines, the music follows a figure moving unseen through the sleeping city. The atmosphere is nocturnal, intelligent, and dangerous rather than openly violent. Subtle vocal textures and shadowy harmonies evoke the image of a raven gliding between rooftops and lamplight. This is the emergence of Raven as an identity separate from Keri — colder, sharper, and increasingly mythic. Influences from gothic chamber orchestration, modern dark fantasy scoring, and restrained cinematic tension.
*/

/* Nemiran Street - Adagio oscuro - Cinematic orchestral score featuring a prominent solo cello and string ensemble, The piece is in D minor at 72 BPM, The solo cello performs a melancholic, legato melody characterized by wide vibrato and expressive portamento, A string section provides harmonic support with sustained pads and rhythmic ostinatos, In the middle section, a subtle electronic pulse and a ticking clock-like percussion element are introduced, creating a sense of urgency, The arrangement builds with layered violins and violas playing tremolo and staccato patterns, The piece concludes with a solo cello fade-out over a low-frequency synth drone

[Approach]
[Cold muted strings. Raven enters Nemiran Street. The house feels awake.]

[Testing]
[Low string ostinato, dissonant woodwinds. Earthmaster followers measure her without words.]

[Confrontation]
[Deep cello, close and dangerous. NightBlade tests her resolve. No resolution. The air tightens.]


*/
/* Presto furioso - Classical violin concerto with orchestral accompaniment, The lead violin performs rapid, virtuosic spiccato and staccato passages, utilizing wide interval leaps and chromatic runs, The orchestral backing consists of a string section providing rhythmic counterpoint and harmonic support through pizzicato and sustained legato phrases, A harpsichord provides continuo support with arpeggiated chords, The tempo is a brisk Allegro at 135 BPM, The piece is in the key of A minor, The structure features alternating tutti and solo sections typical of the Baroque concerto grosso style, The dynamics shift abruptly between forte and piano sections

Presto furioso
Instrumental dark orchestral piece with a violent, fragmented opening that quickly collapses, The music begins in frantic motion, near exhaustion, with disjointed strings and sharp accents suggesting panic and flight, This opening is brief and unsustainable, Suddenly, the motion breaks completely — silence, shock, arrested breath, Influences: Sibelius (tragic restraint), Shostakovich (collapse after violence, without bombast), Vaughan Williams (mourning without consolation)

[Panic]
[Fractured motion, running on empty. ]

[Shock]
[The sound breaks. No movement. ]
*/

/* Adagio lamentoso - Contemporary folk and chamber pop fusion, The arrangement features a solo cello, acoustic guitar, and a shaker, The cello performs a melodic lead role with frequent use of double stops and expressive vibrato, The acoustic guitar provides rhythmic accompaniment using a steady fingerpicking pattern in 4/4 time, A shaker enters periodically to accentuate the pulse, The tempo is approximately 85 BPM, The piece is in the key of G major, The production is clean with a natural room reverb on the cello and a dry, intimate sound for the acoustic guitar

Instrumental slow lament led by viola, Very slow tempo, restrained and dignified, The opening panic has passed; what remains is quiet, internal grief carried with control, The viola sustains a heavy, human line over sparse muted strings, Minimal harmonic movement, unresolved and weight-bearing, No consolation, no release, no dramatic gestures, The sorrow is calm, intimate, and enduring, Cello is absent or reduced to distant resonance only, Influences: Sibelius (tragic restraint), Vaughan Williams (inner mourning), Shostakovich (aftermath without excess)

[After the shock]
[Stillness. The body has stopped.]

[Grief]
[Viola carries the weight. Quiet, controlled sorrow.]

[End]
[Nothing resolves. Responsibility remains.]
*/
/* Training - Andante deciso - Baroque chamber music for string quartet, The arrangement features two violins, a viola, and a cello, The piece is in G major with a 3/4 time signature at 110 BPM, The first violin carries the primary melodic line with ornate trills and rapid sixteenth-note runs, while the second violin and viola provide harmonic counterpoint using staccato eighth-note patterns, The cello maintains a steady bassline, alternating between pizzicato and legato bowing to define the harmonic shifts, The structure follows a binary form with clear cadences and terraced dynamics, The recording has a natural room reverb consistent with a small recital hall

Andante deciso
Instrumental orchestral piece focused on determination and disciplined effort, Moderate, steady tempo with a sense of forward motion, Cello carries a physical, repetitive line representing training — running, swimming, climbing — persistent and demanding, Viola introduces a slower, precise counter-line representing careful work and focus, The orchestra gradually expands: strings build layered motion, low horns add weight and endurance, subtle percussion reinforces pulse without drama, The music grows stronger through accumulation, not speed or volume, Near the end, cello and viola align in controlled harmony, suggesting physical breakthrough and completed work, No heroics, no fanfare — only earned capability, Influences: Sibelius (architectural growth), Holst (discipline and restraint), Vaughan Williams (human resolve without sentimentality)

[Work]
[Repetition, effort, no reward.]

[Endurance]
[The body adapts. The hand continues.]

[Breakthrough]
[Strength holds. The work is done.]
*/
/* Mirror - Adagio, con tensione - Contemporary classical solo violin piece with experimental techniques, The track features a single violin performing a series of staccato and legato phrases, It utilizes rapid glissandi, double stops, and microtonal slides, The performance includes aggressive bow pressure creating scratchy timbres and sudden dynamic shifts from pianissimo to fortissimo, The tempo is rubato, fluctuating between 60 and 110 BPM, The piece is atonal with no fixed key signature, focusing on dissonant intervals and percussive col legno strikes, High-frequency harmonics and sul ponticello bowing create a metallic, thin texture in specific passages

Instrumental dark chamber piece depicting an internal transition, Slow, tense tempo, The piece begins with a solitary viola, fragile and searching, Gradually, a low cello enters, overlapping and pressing against the viola — not in dialogue, but in quiet internal conflict, Sparse strings create sustained tension without rhythm, At the turning point, the viola falls silent and the cello assumes the same musical line, deeper and more controlled, The orchestral texture closes in, darker and more contained, suggesting deliberate suppression rather than violence, No resolution, no release, Influences: Sibelius (internal pressure), Rautavaara (psychological mysticism), Arvo Pärt (stillness under tension), Holst (ritual restraint)

[Reflection]
[Viola alone. Recognition and hesitation.]

[Tension]
[Viola and cello overlap. Quiet internal conflict.]

[Transition]
[The viola withdraws. The cello continues alone. The space closes.]
*/
/* Herth-Akan - Grave rituale - Cinematic orchestral score with operatic choral elements, The arrangement features a prominent string section playing staccato rhythmic patterns and sustained legato lines, A deep, resonant brass section provides low-end accents and melodic counterpoints, Orchestral percussion includes heavy timpani rolls, concert bass drum hits, and metallic anvil-like strikes, A full mixed choir performs dramatic, Latin-style vocalizations with a focus on powerful, sustained vowels and sharp consonants, The piece is in D minor at 120 BPM, characterized by a 4/4 time signature with frequent syncopated orchestral hits and a building dynamic intensity

[Intro]
(Vocalizing)

[Chorus]
In vos se habas
Et poesi compare
In vos se habas
Et poesi compare

[Bridge]
(Vocalizing)

[Outro]
Et poesi compare


Grave rituale
Instrumental dark ritualistic orchestral piece centered on low cello, Very slow to moderate tempo, heavy and oppressive atmosphere, A wordless choir sustains long, cold tones, observing rather than reacting, The music depicts a life-and-death struggle within a shadowed temple: irregular, forceful cello gestures, dark strings, restrained low brass, minimal percussion suggesting heartbeat and ritual, The choir remains detached throughout, never celebrating, The killing is necessary, not triumphant, The final section leaves the cello standing alone, victorious but unchanged, as the temple endures, Influences: Sibelius (dark structural force), Holst (ritual gravity), Rautavaara (mystic darkness), with non-lexical choral texture

[The Temple]
[Dark stillness. Wordless choir observes.]

[The Trial]
[Irregular struggle. Controlled violence.]

[The Necessary Death]
[No drama. No mercy.]

[After]
[Raven remains. The ritual continues.]

*/
/* Liber - Lento misterioso - Folk-influenced acoustic piece featuring a prominent solo violin and acoustic guitar, The violin performs a lyrical, folk-style melody with frequent double stops and vibrato, The acoustic guitar provides rhythmic accompaniment using a steady eighth-note strumming pattern, A subtle shaker and light percussion enter later to maintain the tempo, The arrangement is sparse, focusing on the interplay between the bowed strings and the plucked guitar, 110 BPM, Key of G Major, 4/4 time signature

Instrumental dark-fantasy chamber piece with an ancient, arcane atmosphere, Slow and weightless tempo, Low cello moves cautiously through a vast, listening space, Muted high strings and airy woodwinds create the sense of an old library reacting to an unfamiliar presence, Subtle harp or pizzicato textures suggest books, pages, and knowledge offered without intent, The music feels magical but not divine — curious, precise, and outside moral alignment, In the center, the cello is quietly mirrored by another register, suggesting a book that reads the protagonist in return, No tension release, no judgment, no climax, The piece ends open and unresolved, Influences: Sibelius (quiet structural awareness), Rautavaara (mystic ambiguity), early Pärt (non-theistic stillness), Holst (arcane restraint)

[The Library]
[The space listens.]

[The Books]
[Knowledge offered without intent.]

[The Mirror Book]
[What you are is reflected back.]
*/
/* lighthouse lament - Cinematic orchestral piece featuring a prominent cello solo and string ensemble, The track begins with a low, resonant cello melody characterized by slow, expressive vibrato and legato phrasing, A second cello enters to provide a counter-melody in a higher register, The arrangement builds with the addition of a rhythmic, staccato string ostinato in the violas and cellos, creating a driving 4/4 pulse, Sustained violin pads provide harmonic support in the upper register, The piece features a gradual crescendo and decrescendo, utilizing natural orchestral dynamics, The tempo is approximately 75 BPM, centered around the key of D minor, The production is clean with a natural hall reverb, emphasizing the woody timbre of the solo string instruments

*/

/* Tracks in snow - Allegro inquieto - Bluegrass and folk instrumental, Acoustic guitar, banjo, and upright bass, 120 BPM, G major, 4/4 time, The banjo plays rapid, syncopated Scruggs-style three-finger rolls with heavy use of hammer-ons and pull-offs, The acoustic guitar alternates between flatpicked melodic runs and boom-chick rhythm patterns, The upright bass plays a steady two-beat pattern on the root and fifth, The arrangement features a call-and-response structure between the banjo and guitar, with each instrument taking alternating lead solos while the other provides rhythmic accompaniment, The production is dry with minimal reverb, emphasizing the percussive attack of the strings

Allegro inquieto
Instrumental dark action piece with controlled urgency, Moderate to fast tempo with persistent motion, Low cello leads a tense pursuit through a winter landscape, supported by repeating string figures suggesting footsteps and tracking in fresh snow, The atmosphere is cold, focused, and unsentimental, As the confrontation begins, the music tightens into sharp, irregular gestures — five against one, tactical and brutal, A sudden, distant interruption cuts through the texture, representing unexpected aid from across an impassable ravine — precise and cold, not heroic, The final clash is brief and decisive, The piece ends in exhaustion and pain, with the cello alone, slowed and wounded, No triumph, no celebration, Influences: Sibelius (driven structure), Holst (controlled aggression), Shostakovich (violence without glory)

[Tracks]
[Persistent motion. Snow reveals the path.]

[Pursuit]
[Pressure increases. No escape.]

[Confrontation]
[Five against one. Brutal necessity.]

[Intervention]
[A sudden, distant strike from across the ravine.]

[After]
[Breathing, pain, survival.]

*/
/*  Negotiations - Andante considerato  - Classical chamber music featuring a solo flute and a string ensemble, The flute performs a lyrical, legato melody characterized by wide interval leaps and trills, The string section, consisting of violins, viola, and cello, provides a rhythmic accompaniment using a mix of pizzicato and staccato bowing, The cello maintains a steady quarter-note pulse while the violins play syncopated counter-melodies, The piece is in 3/4 time with a moderate tempo of 110 BPM, likely in the key of G major, The arrangement features a call-and-response dynamic between the woodwind and the strings, with occasional crescendos and decrescendos defining the phrasing

Instrumental orchestral piece focused on political persuasion and measured consideration, Moderate, steady tempo with calm forward motion, Viola carries a composed, rational line representing argument and intent, A cool, analytical woodwind voice (alto flute or oboe d’amore) responds with restrained, questioning phrases — curious, not confrontational, The orchestral texture remains stable and dignified, suggesting authority and long-term thinking, Subtle low brass hints at military resources without aggression, The music explores themes of protection from an unseen threat and the possibility of building something new beyond the horizon, No romance, no tension spikes, no climax, The piece settles into quiet resolve rather than triumph, Influences: Vaughan Williams (measured human authority), Sibelius (structural logic), Holst (restraint and civic weight)

[Consideration]
[A question without opposition.]

[Protection]
[A problem acknowledged.]

[Opportunity]
[The horizon opens.]

[Decision]
[Nothing is spoken. Everything aligns.]
*/

/* Ilvir - Grave theurgicum  - Symphonic metal with operatic choral arrangements, Distorted electric guitars play palm-muted rhythmic chugging and power chords, Orchestral elements include a prominent string section playing staccato ostinatos and sustained pads, alongside brass accents, The drum kit features rapid double-kick patterns and heavy crash cymbal hits, A large mixed choir provides melodic and harmonic layers with operatic delivery, The arrangement alternates between dense orchestral-choral sections and guitar-driven riffs, 135 BPM, 4/4 time signature, E minor

Instrumental dark sacred orchestral piece depicting a theurgic encounter, Extremely slow tempo, heavy and oppressive atmosphere, Low strings and organ-like sustained harmonies dominate, A deep, wordless choir functions as architectural resonance rather than voices, The music feels physical, damp, and ancient — divine presence expressed through matter, not emotion, Subtle textural shifts suggest stone forming and reshaping itself into a bridge, In the central moment, a solitary viola appears briefly, isolated, as something is placed around the heart of the protagonist — not a blessing, but an implanted capacity, No melody, no consolation, no resolution, Influences: early Arvo Pärt (sacred weight), Holst (ritual gravity), Sibelius (monumental stillness)

[Intro]
(Ooh)
(Ooh)
(Ooh)
(Ooh)

[Chorus]
No-ven-dos
No-ven-dos
No-ven-dos
No-ven-dos

[Verse]
No-ven-dos
No-ven-dos
No-ven-dos
No-ven-dos

[Bridge]
(Ooh)
(Ooh)
(Ooh)
(Ooh)

[Outro]
No-ven-dos
No-ven-dos
No-ven-dos
No-ven-dos

[The Descent]
[Weight, filth, ritual movement.]

[The Sanctuary]
[Mass and silence.]

[Presence]
[Nothing moves. Everything is adjusted.]

[The Gift]
[Something is placed. No response is allowed.]

[Exit]
[The world continues, slightly misaligned.]
*/

/* Anisha - Grave, inevitabile - Cinematic orchestral score with a hybrid electronic edge, The arrangement features a prominent string section playing staccato ostinatos and soaring legato melodies, Brass sections provide powerful accents and low-end weight, A driving electronic drum kit with a punchy kick and crisp snare provides a modern rhythmic pulse, complemented by orchestral percussion including timpani and taiko drums, Synthesizer layers add texture with filtered sweeps and rhythmic pulses, The piece is in D minor at 140 BPM in 4/4 time, The structure alternates between high-intensity action sequences and more atmospheric, tension-building segments, Woodwinds provide occasional melodic flourishes and counter-melodies

Grave, inevitabile
Instrumental dark orchestral piece depicting revelation and inevitability, Very slow, heavy atmosphere with no sense of release, Deep strings and organ-like sustained tones represent the activation of an ancient Godstone, Viola carries a restrained, burdened line of realization, A secondary male voice (woodwind or horn) reacts with shorter, unsettled phrases, expressing shock and resistance, A dark, low string presence enters without drama — static, immovable — representing an antagonist who has always been present, As Earthmaster forces materialize, the texture thickens and the air closes, No rhythm, no climax, no resolution, The music ends locked in place, Influences: Sibelius (architectural inevitability), Holst (ritual gravity), Rautavaara (dark mysticism), early Pärt (weight without motion)

[The Godstone]
[Ancient power responds.]

[Realization]
[Understanding arrives too late.]

[The Antagonist]
[He was already here.]

[Locking]
[Nothing can be undone.]

*/
/* Hru - Processionale immobile - Folk-influenced orchestral composition featuring a prominent solo violin and acoustic guitar, The piece is set in 4/4 time at 110 BPM in the key of D Major, A fingerpicked acoustic guitar provides a steady rhythmic pattern of eighth notes, The solo violin performs a lyrical, folk-style melody characterized by frequent double stops, slides, and trills, A small string ensemble provides harmonic support with sustained legato pads, A subtle shaker and light percussion accents appear in the middle section, The arrangement features a call-and-response dynamic between the solo violin and a flute, The piece concludes with a ritardando on a sustained D major chord

Instrumental orchestral piece depicting the procession of ancient stone giants moving outside of time, Extremely slow, immobile tempo, Vast, static sound fields dominate, with deep strings and low brass articulating monumental, isolated steps, Long silences and sustained textures create the sense that the world itself has paused, Subtle, non-rhythmic percussive elements suggest stone, friction, and mass rather than motion, The music feels geological, ancient, and indifferent, with sound functioning as landscape rather than narrative, No melody, no development, no climax, Influences: Sibelius (monumental stillness), Allan Pettersson (endurance), and Ralph Lundsten’s Nordic nature symphonies (timeless environmental sound and suspended motion)

[Stillness]
[The world waits.]

[The First Step]
[Stone begins to move.]

[Procession]
[Movement without time.]

[Arrival]
[The journey ends. Nothing reacts.]

*/

/* Araka-Kalai - Conflagratione biologica - Orchestral soundtrack with elements of baroque and classical music, The arrangement features a prominent string section including violins, violas, cellos, and double bass, alongside woodwinds like flute and oboe, Brass instruments including trumpets and horns provide melodic accents, Percussion consists of orchestral snare drum, timpani, and crash cymbals, A harpsichord provides rhythmic and harmonic texture with rapid arpeggios and staccato chords, The piece is in 4/4 time with a tempo of 145 BPM, primarily in D minor, The structure alternates between driving, rhythmic sections led by the harpsichord and strings, and more melodic, lyrical passages featuring woodwind solos, High-register violin runs and syncopated brass stabs are characteristic of the faster movements

Large-scale orchestral battle piece depicting a clash between two opposing cosmic forces, One side is cold, precise, and mechanical — strict rhythms, rigid harmonic structures, and clinical orchestration, The opposing force is organic, chaotic, and biological — flowing tempos, shifting modalities, dense string textures, and wordless choral mass, Both musical worlds exist simultaneously, often in conflicting tonal centers, creating intense polytonal tension, As the piece progresses, the organic textures grow, adapt, and overwhelm the rigid structures, not through power but through complexity and excess, The mechanical force collapses into silence, while the biological sound continues, alive and unstable, No heroic triumph — only survival through vitality

[The Perfect Order]
[Cold precision advances.]

[Interference]
[Organic matter disrupts the pattern.]

[Overgrowth]
[Life multiplies beyond control.]

[Collapse]
[Perfection fails.]

[Survival]
[What lives, remains.]

*/

/* NightBlade's Death - Adagio funebre - Contemporary classical chamber music featuring a duet between a cello and a violin, The piece is set in 3/4 time at a tempo of 72 BPM in the key of G major, The cello begins with a sustained, lyrical melody in its middle register, utilizing expressive vibrato and legato phrasing, The violin enters with a counter-melody, often harmonizing in thirds and sixths, The arrangement alternates between homophonic textures where both instruments move in rhythmic unison and polyphonic sections where the violin plays soaring, high-register lines over arpeggiated cello figures, Pizzicato techniques are used sparingly by the cello to provide a rhythmic pulse during the violin's melodic passages, The recording features a natural room reverb, capturing the woody resonance of the string instruments, Dynamic shifts are frequent, moving from delicate pianissimo to resonant forte swells

Adagio funebre
Instrumental elegiac orchestral piece following the aftermath of battle, Very slow, restrained tempo, Solo viola carries an exposed, fragile line of overwhelming grief and mistaken certainty, A low, nearly motionless cello remains beneath, executing necessity without emotional engagement, The orchestral texture is minimal and hollow — no percussion, no brass, only space and breath, The act itself is not dramatized; it occurs quietly, without emphasis, The music sinks into exhaustion and forced rest, ending in suspended stillness rather than resolution, Influences: late Sibelius (desolation), Allan Pettersson (unbearable inner weight), restrained Nordic elegy

[Aftermath]
[The field is silent.]

[Mistaken Certainty]
[Love is assumed lost.]

[The Act]
[It happens without emphasis.]

[Collapse]
[Strength fails.]

[Sleep]
[Consciousness withdraws.]

*/
/* The Eye - Adagio, restitutio - Classical chamber music featuring a solo violin and a string ensemble, The piece is in G minor with a tempo of 110 BPM in 4/4 time, The solo violin performs intricate, virtuosic runs, double stops, and lyrical melodic passages, The accompanying string section consists of violins, violas, cellos, and double basses, providing harmonic support through sustained legato pads and rhythmic pizzicato accents, The arrangement follows a concerto-like structure with alternating tutti and solo sections, The production is dry with a natural room reverb, emphasizing the woody timbre of the string instruments, The dynamics shift frequently between piano and forte, driven by the intensity of the bowing, The cello and double bass maintain a steady rhythmic pulse with staccato eighth notes during the faster passages

Instrumental orchestral piece depicting quiet restitution after divine intervention, Slow, restrained tempo, Viola carries a subdued, emptied line as something vital is removed from the heart of the protagonist, The orchestral texture thins noticeably, allowing silence to speak, After a moment of absence, a small, fragile new sound appears briefly in the high register — a single, luminous gesture suggesting a parting gift, not a replacement, The mood is calm but deeply felt, acknowledging loss without drama and connection without sentimentality, No climax, no consolation, only acceptance, Influences: late Sibelius (quiet resignation), Arvo Pärt (sparse clarity), Nordic elegiac restraint

[Restoration]
[What was placed is removed.]

[Emptiness]
[Nothing replaces it.]

[The Eye]
[A part remains.]

[After]
[Life continues, altered.]
*/
/* Epilogo sospeso (part I) - Classical chamber music for solo violin and piano, The piece features a lyrical, legato violin melody characterized by frequent vibrato and expressive portamento, The piano provides a harmonic accompaniment using arpeggiated eighth-note patterns and sustained block chords, The arrangement follows a rubato feel with significant tempo fluctuations for expressive effect, The violin utilizes the upper register for melodic peaks and the middle register for more somber passages, The recording has a natural room reverb, placing the instruments in a small concert hall space, The dynamic range is wide, moving from delicate pianissimo to resonant forte, The time signature is 4/4 with a moderate tempo around 70 BPM in D major

Instrumental orchestral epilogue with an open, reflective character, Moderate, calm tempo, Viola and cello share space in quiet balance, neither dominating, The orchestral texture is warm but restrained, suggesting stability without finality, Harmonic movement gently opens outward, hinting at new possibilities without defining them, The mood is contemplative, grounded, and quietly expansive — survival acknowledged, reward accepted, future undecided, No climax, no resolution, The music ends suspended, as if pausing mid-thought, Influences: late Sibelius (open endings), Vaughan Williams (human calm), restrained Nordic lyricism

[After]
[The danger has passed.]

[Possibility]
[The horizon opens.]

[Life]
[Enough, for now.]

[Pause]
[The story breathes.]

*/

    /*songorder: {
      menuTitle: "Ekon i ordning",
      title: "Ekon i ordning",
      text: "Här kommer vokala stycken, texter och sångidéer att presenteras."
    },*/
    echoesInOrder: {

  menuTitle: "Ekon i ordning",
  title: "Ekon i ordning",
  showPlaceholder: false,
  text: `Berättelsens inre kronologi följer inte alltid sångernas publiceringsordning. Här ligger därför spåren i den ordning de hör hemma i berättelsen — med reservation för att nytt material ännu kan sakna sin rätta plats.

Kommentarerna är dolda, för att inte avslöja mer av handlingen än nödvändigt för den som ännu vill möta boken utan förhandskunskap.`,
  timeline: [
  {
    title: "Introduktion",
    meta: "",
    tracks: [
      {
        title: `Hârn Overture<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 1</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Tyginköp och middagsbjudning",
    meta: "",
    tracks: [
      {
        image: "assets/songs/TheSatinMoon.png",
        date: "",
        textPage: "theSatinMoon",
        title: "The Satin Moon",
        spotify: "https://open.spotify.com/track/18M0tbxW3a8g1IfINgscBG?si=10fad8ce32694405",
        youtube: "https://youtu.be/p56nSPa_E_c?si=77Yhx_CcMZ89AJ0F",
        note: "Boken inleds med att vår huvudperson Keri beundrar en bal vit satäng. Hon kommer då i kontakt med köpmannen som säljer tyget genom gillet och blir bjuden till hans fartyg på middag — möjligen för att diskutera handel utanför gillets ramar."
      },
      {
        title: `Satin After Dark<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 2</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Raven",
    meta: "Natt i Golotha",
    tracks: [
      {
        title: `Nightraven<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 3</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Hamnkrog",
    meta: "",
    tracks: [
      {
        title: "Three Coppers for a Kiss",
        spotify: "https://open.spotify.com/track/5B26pt1YevWV2fQa61BR2J?si=18429b8b5f0a4640",
        youtube: "https://youtu.be/i5yBg8qniDc?si=L-scB7fYUPGlEGpp",
        image: "assets/songs/Pubsong.png",
        date: "",
        textPage: "threeCoppersForAKiss",
        note: ""
      },
      {
        title: "Galley Lado",
        spotify: "https://open.spotify.com/track/1cOS91msaPjZFcE73W4Rxb?si=fa01299f41ee42ba",
        youtube: "https://youtu.be/5HKlwsLvfns?si=MazrcXwDWSmbhxaN",
        image: "assets/songs/Galley Lado.png",
        date: "",
        textPage: "galleyLado",
        note: "Senare under natten, när tröttheten lagt sig, sjungs en finstämd sång om sjömäns hopp om att bli hämtade till en bättre plats i stället för att bara drunkna till sjöss. Galley Lado är både en stjärnbild och ett stjärntecken och står för avslut, fullbordan och återfödsel."
      }
    ]
  },
  {
    title: "Uppdrag i natten",
    meta: "",
    tracks: [
      {
        title: `Nemiran Street – Adagio oscuro<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 4</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Raven besöker Nemiran Street 1 för ett uppdrag."
      }
    ]
  },
  {
    title: "Dåliga nyheter",
    meta: "",
    tracks: [
      {
        title: `Presto furioso<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 5</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Raven tar sig hem i språngmarsch efter dåliga nyheter."
      }
    ]
  },
  {
    title: "Sorg",
    meta: "",
    tracks: [
      {
        title: `Adagio lamentoso<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 6</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Biträdena i butiken har skadats, skändats, mördats eller lämnats att dö. Vid ett vanligt tillfälle hade det varit systrarna."
      }
    ]
  },
  {
    title: "Konditionsträning",
    meta: "",
    tracks: [
      {
        title: `Training – Andante deciso<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 7</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Raven pressar kroppen hårt i träning och återhämtning."
      }
    ]
  },
  {
    title: "Möte på marknadsplatsen",
    meta: "Systrarna möter Aylyn för första gången, i Coranan",
    tracks: [
      {
        title: "Three cups, one truth",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "threeCups",
        spotify: "https://open.spotify.com/track/0oGVMWLcPr5tFaefWxuVJe?si=7468c2ab29254529",
        youtube: "https://youtu.be/9ZvOntkkZ-4?si=MZKKTN0ry0MHHmu1",
        note: ""
      }
    ]
  },
  {
    title: "Platsbyte",
    meta: "Keri har sytt klart kappan; Raven gör anspråk",
    tracks: [
      {
        title: "Cloak and Mirror",
        spotify: "https://open.spotify.com/track/41W4flxEqDm0zTM1g1VLsL?si=10f5cb21500643aa",
        youtube: "https://youtu.be/AwRLaqd4-6I?si=n2Lc6-TDIVCQXD0G",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "cloakAndMirror",
        note: "Möte i spegeln. Ett platsbyte sker, och spegeln täcks med en filt."
      },
      {
        title: `Mirror – Adagio, con tensione<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 8</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Mörkrets tempel",
    meta: "",
    tracks: [
      {
        title: "Herth-Akan",
        spotify: "https://open.spotify.com/track/06Iv40X1Tq3I1lMJ2M7Anw?si=87a222dc65534b5a",
        youtube: "https://youtu.be/myQefNj1Zi8?si=jN1--mGFGkkdyueU",
        image: "assets/songs/Herth-Akan.png",
        date: "",
        textPage: "herthAkan",
        note: ""
      },
      {
        title: `Herth-Akan – Grave rituale<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 9</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Biblioteket",
    meta: "",
    tracks: [
      {
        title: "Let the Mirror Read",
        spotify: "https://open.spotify.com/track/1GPhOzt4GRuRrPCP4oJJ9k?si=9cba08cb793143d0",
        youtube: "https://youtu.be/tTkuD9H4zhk?si=obom5Gi4ZOslgR2o",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "letTheMirrorRead",
        note: "Det åldriga biblioteket lägger märke till Ravens närvaro och vill lära känna henne närmare genom att ge henne Spegelboken."
      }
    ]
  },
  {
    title: "Raven läser",
    meta: "",
    tracks: [
      {
        title: "Liber et Speculum",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "liberEtSpeculum",
        spotify: "https://open.spotify.com/track/5v1npkntIA55ZEux0MtwWi?si=8ca644d302104530",
        youtube: "https://youtu.be/4gY20cxcppI?si=C5iv9b67nqULEcgp",
        note: ""
      },
      {
        title: `Liber – Lento misterioso<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 10</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Möte vid fyrtornet",
    meta: "",
    tracks: [
      {
        title: "Lighthouse Lament",
        image: "assets/songs/Lighthouse.png",
        date: "",
        textPage: "lighthouseLament",
        spotify: "https://open.spotify.com/track/4sdjLRoKCxRWMWvXZLydHi?si=2b37ca317c3f4d79",
        youtube: "https://youtu.be/8fIesSa8OpQ?si=UJsBNm49HK-60DHl",
        note: ""
      },
      {
        title: `Lighthouse Lament<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 11</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Jakt i snö",
    meta: "",
    tracks: [
      {
        title: `Tracks in Snow – Allegro inquieto<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 12</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Keri och Raven blir förföljda efter ett snöfall och lämnar spår efter sig."
      }
    ]
  },
  {
    title: "Förhandlingar",
    meta: "",
    tracks: [
      {
        title: `Negotiations – Andante considerato<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 13</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Keri och Fabien anhåller hos Serenima om att få låna Shiran-legionärer."
      }
    ]
  },
  {
    title: "Att besöka en gud",
    meta: "",
    tracks: [
      {
        title: `Ilvir – Grave theurgicum<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 14</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Ett möte med Ilvir och det som följer på det."
      }
    ]
  },
  {
    title: "Plötslig sång",
    meta: "Fabien stämmer upp i en välkänd sång vid ankomsten till Anisha",
    tracks: [
      {
        title: "The Ballad of Eltherion",
        spotify: "https://open.spotify.com/track/3mrwEL6kKrp5JaCCoqJ7y9?si=0c78bc92a0b84026",
        youtube: "https://youtu.be/hzBN6Vtj_4c?si=fEbSk5SwIoUsEBaL",
        image: "assets/songs/Eltherion_anisha.png",
        date: "",
        textPage: "theBalladOfEltherion",
        note: ""
      }
    ]
  },
    {
    title: "Anisha",
    meta: "",
    tracks: [
      {
        title: `Anisha – Grave, inevitabile<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 15</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Uppdraget går fel, och ett större problem ansluter sig till deras följe."
      }
    ]
  },
  {
    title: "Oväntad transporthjälp",
    meta: "",
    tracks: [
      {
        title: `Hru – Processionale immobile<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 16</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "De får hjälp med transporten av två Hru — Ilvirs stenjättar."
      }
    ]
  },
  {
    title: "Sammandrabbning",
    meta: "",
    tracks: [
      {
        title: "The Battle of Araka-Kalai",
        spotify: "https://open.spotify.com/track/5Ff7XIZBbLCEDeagetATJr?si=4c2704d2e6b84a0c",
        youtube: "https://youtu.be/YqZr3ICQrbo?si=FcIrhOmo9ZJ7kdIr",
        image: "assets/songs/Battle wide.png",
        date: "",
        textPage: "theBattleOfArakaKalai",
        note: "Earthmasters drabbar samman med Ilvirs barn intill Araka-Kalai."
      },
      {
        title: `Araka-Kalai – Conflagratione biologica<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 17</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Motståndaren faller",
    meta: "",
    tracks: [
      {
        title: `NightBlade's Death – Adagio funebre<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 18</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Raven tvingas fullfölja det som återstår efter att NightBlade lämnat Ilvir svårt skadad."
      }
    ]
  },
  {
    title: "Ögat",
    meta: "",
    tracks: [
      {
        title: `The Eye – Adagio, restitutio<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 19</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Keri får ett öga av Ilvirs ormavatar som avskedsgåva."
      }
    ]
  },
  {
    title: "Paus för tankar",
    meta: "",
    tracks: [
      {
        title: `Epilogo sospeso (Part I)<br>
        <i>Serenia Symphony No.1 (Opus 253), spår 20</i>`,
        image: "assets/songs/Symphony No1 3k.png",
        date: "6 maj 2026",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Keris eftertankar. Om boken vore en trilogi, skulle detta motsvara slutet på första delen."
      }
    ]
  },
  {
    title: "Serenima och Joreth",
    meta: "Ansökan om avsked från legionen",
    tracks: [
      {
        title: "Serenima",
        spotify: "https://open.spotify.com/track/0hbYgCgFeuP5qtm4ZtCrbo?si=8d8f5010f25348d5",
        youtube: "https://youtu.be/JQsIQh81yKA?si=lnacejloVL36QfY6",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "serenima",
        note: ""
      }
    ]
  },
  {
    title: "Tornerspel",
    meta: "",
    tracks: [
      {
        title: "The Man Who Wore Her Green",
        spotify: "https://open.spotify.com/track/4hoJBuQdiWaIUMdtrXMAwp?si=f7c5a034eb264a0e",
        youtube: "https://youtu.be/Ix0N8XJHBtg?si=zAcBtq2OOLeAwl36",
        image: "assets/songs/Aleath joust.png",
        date: "",
        textPage: "theManWhoWoreHerGreen",
        note: "Joreth anmäls till tornerspel till fots för sin gröna dam — Keri."
      }
    ]
  },
  {
    title: "Närgånget",
    meta: "",
    tracks: [
      {
        title: "Halea Canticle",
        spotify: "https://open.spotify.com/track/4NoJHBj3uLg0jHfibe8CkU?si=dff43ca594f14e03",
        youtube: "https://youtu.be/YmabGbWnvbw?si=sls_IxJFOvpCArz6",
        image: "assets/songs/Raven and Kaerith.png",
        date: "",
        textPage: "haleaCanticle",
        note: "Keri och Kaerith utkämpa en maktkamp under besöket i Haleatemplet i Aleath — en maktkamp som blir intim."
      }
    ]
  },
  {
    title: "Vintersolståndet",
    meta: "Tre versioner, två språk, en händelse.",
    tracks: [
      {
        title: "Where the Veil Grows Thin",
        spotify: "https://open.spotify.com/track/7xIkn3VS9qPqJV6X22JDu4?si=e4afdddb2bfb4b42",
        youtube: "https://youtu.be/mtfrIF1jGXg?si=XNhuNJUE5bsKQQ2x",
        image: "assets/songs/kindledsteps.png",
        date: "",
        textPage: "",
        note: "Lärlingarna anländer till Villa Eriel med tända ljus på den dag som behöver dem som mest."
      },
      {
        title: "Vintervävens ljus",
        image: "assets/songs/Vintervav.png",
        date: "26 november 2025",
        textPage: "vintervaven",
        spotify: "https://open.spotify.com/album/27dUFTvBVRn317aEqBts6Z?si=9u71Ta8hQj66wk4UstTSWw",
        youtube: "https://youtu.be/KZpR6yB77XU?list=OLAK5uy_mZHE5L2d66lkD0u4KzMhE5jni5LzAb0kw",
        note: "Det närmade sig jul, men en julsång lät sig inte skrivas ..."
      },
      {
        title: "Night of Kindled Steps",
        image: "assets/songs/kindledsteps.png",
        date: "27 november 2025",
        textPage: "kindledSteps",
        spotify: "https://open.spotify.com/album/7Lum3kMA3vIM8g1mawTlPo?si=zwnS3aQKRRyuKmOTaHc3og",
        youtube: "https://youtu.be/b8ICe9RDMNQ?list=OLAK5uy_naLwlRZ941pj0uyzjT5e1iFFmJQC3mx98",
        note: "Den andra av de tre versionerna."
      }
    ]
  },
  {
    title: "Sorgesång",
    meta: "Hon som ingen visste var försvunnen — återfunnen.",
    tracks: [
      {
        title: "Eriel Lament",
        spotify: "https://open.spotify.com/track/4aPtIt65mptA5xzi0Bl8tB?si=b3333c54f2e947b3",
        youtube: "https://youtu.be/SmTu5o6V11c?si=sHTgciywrpCfN5l1",
        image: "assets/songs/Eriel found.png",
        date: "",
        textPage: "erielLament",
        note: "En sorgesång över en blivande drottning som berövades sin titel, sin krona och sitt liv — och ersattes."
      }
    ]
  },
  {
    title: "Konfrontation på en kaj",
    meta: "",
    tracks: [
      {
        title: "Satarielle and the Table of Fate",
        spotify: "https://open.spotify.com/track/2gMiiob295SxabzxhLv7ZP?si=c34ff1b3450f43d8",
        youtube: "https://youtu.be/WI7VQYruQBQ?si=1vvzFQyf--KEPkkd",
        image: "assets/songs/Satarielle.jpg",
        date: "",
        textPage: "satarielleAndTheTableOfFate",
        note: "Ett magiskt bord på andra sidan Hârn ger utslag när Keris sällskap angrips av ett antal Karmosin-dansöser."
      },
      {
        title: "What the Tide Told Me",
        spotify: "https://open.spotify.com/track/2BnUUKg4b6YjtND3dnv2Ai?si=a67c24e52391488d",
        youtube: "https://youtu.be/CPsi5GKS0pE?si=IaTkT2cdFTkZLFoM",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "whatTheTideToldMe",
        note: "Samma händelse återberättad av en bard vid ett senare tillfälle."
      }
    ]
  },
  {
    title: "Barndomens ekon",
    meta: "Tidiga lager av minne och skydd",
    tracks: [
      {
        title: "Hush Now, Little Girl of Mine",
        image: "assets/songs/Athina_for_Spotify.jpg",
        date: "18 oktober 2025",
        textPage: "hushNowLittleGirlOfMine",
        spotify: "https://open.spotify.com/album/2w0dRmusBFnDTSMA6RtMTC?si=RsTlLmkbQfWjvM9kCM7lkw",
        youtube: "https://youtu.be/o8zNKDODnuE?list=RDo8zNKDODnuE",
        note: "Den första sången skapad i modern tid — och den första för Serenia."
      }
    ]
  },
  {
    title: "Vinskörd",
    meta: "",
    tracks: [
      {
        title: "Stomp the Year Awake",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "stomp",
        spotify: "https://open.spotify.com/track/4IW1BlQBspHkUaGfTedmyb?si=86eabcaf55a94001",
        youtube: "https://youtu.be/eQGQUSS6aYo?list=OLAK5uy_kV6TgLsNwt_YoC3AUicH0KoD6JrNjnIZQ",
        note: ""
      }
    ]
  },
  {
    title: "Sjösättning",
    meta: "Sjöormen går av stabelbädden",
    tracks: [
      {
        title: "Launching of the Sea-Serpent",
        spotify: "https://open.spotify.com/track/7AmLRrU2NmKqcbKQeVj9eK?si=99db17966bfb43f8",
        youtube: "https://youtu.be/bB5GE5zbZcg?si=knrBk4Hv5ld8pX0P",
        image: "assets/songs/Launching.png",
        date: "",
        textPage: "launchingOfTheSeaSerpent",
        note: ""
      }
    ]
  },
  {
    title: "Magi till sjöss",
    meta: "",
    tracks: [
      {
        title: "The Wake of Lado",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "wakeOfLado",
        spotify: "https://open.spotify.com/track/7lTKfxYd7BOhkQ7vGwrqqC?si=029cbb828bb343a7",
        youtube: "https://youtu.be/pU5N4uOTag0?si=PjK5YNvDvLB2ua35",
        note: ""
      }
    ]
  },
  {
    title: "Återkomst",
    meta: "Tillbaka hem till Golotha",
    tracks: [
      {
        title: "Song of Sweet Golotha",
        spotify: "https://open.spotify.com/track/6ZxRO2v7pX3I3eres0yoiE?si=e92c4a86ae2a4617",
        youtube: "https://youtu.be/2Y8UcoGwoxY?si=Ueb-Mwxgf_TDalhy",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "songOfSweetGolotha",
        note: ""
      }
    ]
  },
  {
    title: "Ingen bryr sig om en tok",
    meta: "Spioneri i öppen dager",
    tracks: [
      {
        title: "The Miracle Man's Song",
        spotify: "https://open.spotify.com/track/5mEszsSoMKzNunHtemqjPN?si=f20eecbf30034b56",
        youtube: "https://youtu.be/HubVwd7HoTs?si=5kzoTEWXau68jlsp",
        image: "assets/songs/Miracle mans wagon.png",
        date: "",
        textPage: "theMiracleMansSong",
        note: ""
      }
    ]
  },
  {
    title: "Stilla stund vid lägereld",
    meta: "En sång som vågar sjungas även när skogen lyssnar.",
    tracks: [
      {
        title: "By the Ancient Stone",
        spotify: "https://open.spotify.com/track/6PA0xy3M5QV8be3WcMKqma?si=460b78dc72b4486c",
        youtube: "https://youtu.be/KtXrEQ2epok?si=uI_HGzgyHtp6YFU_",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "byTheAncientStone",
        note: ""
      }
    ]
  },
  {
    title: "Parfymincidenten",
    meta: "Joreth provar Aylyns hopkok",
    tracks: [
      {
        title: "The Scent of Memory",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "scent",
        spotify: "https://open.spotify.com/track/1qu3ly0OU8iHhddu6pGqzA?si=b0c90c5a00fb45f6",
        youtube: "https://youtu.be/kqC-JQuGhtY?si=tqCYGsTuoW4IBSZP",
        note: ""
      }
    ]
  },
  {
    title: "Flodtur",
    meta: "Ett avtal beseglas",
    tracks: [
      {
        title: "Down by Yael",
        spotify: "https://open.spotify.com/track/2R3YQtO6lB1glIl1CGdkZI?si=572e5acca93a4ab9",
        youtube: "https://youtu.be/E8n1LtUz3dg?si=zf_bMF-xThAFaM4j",
        image: "assets/songs/Marvae_river_photoQ.png",
        date: "",
        textPage: "downByYael",
        note: "Trevor tar Marvae på en flodtur för att vinna hennes röst i senaten. Vem för egentligen vem?"
      }
    ]
  },
  {
    title: "Strandhugg",
    meta: "",
    tracks: [
      {
        title: "Landing at Sirion",
        spotify: "https://open.spotify.com/track/5J7EbfHGj7qdi0HaBmmvyz?si=fb26545691394d99",
        youtube: "https://youtu.be/F7tc3EZt3qU?si=Q7WtcbG5TItygLrV",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "landingAtSirion",
        note: ""
      }
    ]
  },
  {
    title: "Iracu",
    meta: "Keri får en rundvandring i gruvan",
    tracks: [
      {
        title: "Iracu",
        spotify: "https://open.spotify.com/track/41M2ex92oaD2HkIOUCJalG?si=ef2d3e9bcdf54132",
        youtube: "https://youtu.be/h8J-RBSHkwA?si=BW9RRxm342Umo6aI",
        image: "assets/songs/Iracu.png",
        date: "",
        textPage: "iracu",
        note: ""
      }
    ]
  },
  {
    title: "Anknytning",
    meta: "Keri tar in naturens skönhet",
    tracks: [
      {
        title: "Nature Call",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "natureCall",
        spotify: "https://open.spotify.com/track/008F0AZvOSAebjEUedyMjw?si=55db9c073b954acc",
        youtube: "https://youtu.be/DhTrd-ZeLgY?si=UakYU75ieJNsz5yk",
        note: ""
      }
    ]
  },
  {
    title: "Sång för en roddtur",
    meta: "Sjungen för att hålla gemensam rytm i roddbåt",
    tracks: [
      {
        title: "The Fields of Byria",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "byria",
        spotify: "https://open.spotify.com/track/6sGDIQRDB8zVf0Bi6K6zvm?si=39acbf44408e45e6",
        youtube: "https://youtu.be/lMR23rhxKzA?si=exq89rPMNxy1EtDH",
        note: "Roddturen på väg mot dvärgarna kräver en arbetssång. Den visar sig ha sitt ursprung på det stora fastlandet, i Byria — där kvinnorna styr och männen till stor del reducerats till arbetskraft."
      }
    ]
  },
  {
    title: "Utbildning och frustration",
    meta: "Athina finner taket för lågt",
    tracks: [
      {
        title: "Lines That Do Not Show",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "lines",
        spotify: "https://open.spotify.com/track/5WoR3eJ4Ijaqb3xbyPjgdS?si=203fc360ca61427f",
        youtube: "https://youtu.be/3_cg0OcbFZk?si=jsAoJ8gsGMLczyvV",
        note: ""
      }
    ]
  },
  {
    title: "Tempelpaus",
    meta: "Hos Halea",
    tracks: [
      {
        title: "Hymn of the Open Hand",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "openHand",
        spotify: "https://open.spotify.com/track/5CV8IHXm243zjS2eVoJHEb?si=8a9ee7dba7114ac3",
        youtube: "https://youtu.be/H_nf1QUIPSY?si=9JTWN_fnd6uokdaW",
        note: ""
      }
    ]
  },
  {
    title: "Tvivel",
    meta: "Tankfull Keri i trädgården i Figgel",
    tracks: [
      {
        title: "Balance",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "balance",
        spotify: "https://open.spotify.com/track/6OQslwOJbiXXxkH1vxL3ut?si=622f2f59aa154e1f",
        youtube: "https://youtu.be/EhlbzwFbppw?si=e9-wMMR6nn2L6HnN",
        note: ""
      }
    ]
  },
  {
    title: "Immigration",
    meta: "Erbjudande om inflyttning till Serenien",
    tracks: [
      {
        title: "We Took the Offer (Serenia Settlers' Song)",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "offer",
        spotify: "https://open.spotify.com/track/25M0eCS4UAdQBqak0PdadB?si=2e4516de98374bcb",
        youtube: "https://youtu.be/EFCunS83ovI?si=8qoFE6Hng4Y0NAr0",
        note: ""
      }
    ]
  },
  {
    title: "Gruvdrift",
    meta: "En dvärgisk gruvmästare har anlänt och satt folk i arbete",
    tracks: [
      {
        title: "Khaz Khur Razan (The Stone Knows the Way)",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "khazKhur",
        spotify: "https://open.spotify.com/track/0XwB7yM2CGTvKCmmtlVaqn?si=21b1c8b2755643ec",
        youtube: "https://youtu.be/h6CXlEvt3vs?si=HxtwyewD0ONt8LyI",
        note: ""
      }
    ]
  },
  {
    title: "Sådd",
    meta: "Peoni-hymn / arbetssång vid sådd",
    tracks: [
      {
        title: "The Furrow Blessing",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "furrow",
        spotify: "https://open.spotify.com/track/21mILJp5yC5OkgDiq1CwY7?si=0c2c8577b88d416a",
        youtube: "https://youtu.be/mU0mhHaT4_U?si=KTH0eYhlXbb8nyot",
        note: ""
      }
    ]
  },
  {
    title: "Mytbildning",
    meta: "Nytt land, nya sånger",
    tracks: [
      {
        title: "The Ranger and the Dozen",
        image: "assets/songs/Ranger.png",
        date: "5 mars 2026",
        textPage: "ranger",
        spotify: "https://open.spotify.com/album/2ooiaEEKNgkWdm4SgpAXA6?si=SOKhKQzMQdC9PC-K9OrPIQ",
        youtube: "https://youtu.be/fKZXAZapR_4?list=OLAK5uy_lJyue_RGOInI-hjmo6JkTIuV3eJAM7878",
        note: "Behovet av att minska mängden Gargun i skogarna är uppenbart om människor ska känna sig trygga. En jägare som ensam tar hand om ett dussin — det är sådant myter byggs av. Eller görs narr av, om det bara är skrävlande."
      }
    ]
  },
  {
    title: "Krigslycka?",
    meta: "",
    tracks: [
      {
        title: "Fallen King",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "fallenKing",
        spotify: "https://open.spotify.com/track/17ue6X0z8JgdBBPPf4LEtB?si=b7682ed540414773",
        youtube: "https://youtu.be/vrNqVUijuTE?si=e3yVnhM9mlvYvH6N",
        note: ""
      }
    ]
  },
  {
    title: "Mörkrets förberedelse",
    meta: "Naveh-hymn",
    tracks: [
      {
        title: "Naveh – Latin",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Upplyst natt",
    meta: "Avbruten sömn i Golotha",
    tracks: [
      {
        title: "Firestorm",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Ensam",
    meta: "Raven är frånvarande",
    tracks: [
      {
        title: "Bridge of Doubt",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: "Keri får ett uppdrag som skulle kunna lägga allt bakom dem. Det är egentligen ett arbete för Raven, men hon tar inte över."
      }
    ]
  },
  {
    title: "Det oväntade",
    meta: "",
    tracks: [
      {
        title: "Light Upon the Water",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Uppviglande",
    meta: "Inbördeskrig hetsas fram i Coranan",
    tracks: [
      {
        title: "Coranan Rising",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Krigsglädje",
    meta: "Agrik-hymn",
    tracks: [
      {
        title: "Agrikan Hymn",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "<<< Mer att komma >>>",
    meta: "Stubbe",
    tracks: [
      {
        title: "",
        image: "assets/songs/dummy.png",
        date: "",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  },
  {
    title: "Nationalsång",
    meta: "Traditionell irländsk melodi: <i>Buachaill o'n Éirne Mé</i>.<br>Texten inspirerad av W. Gordon Smiths <i>Come By The Hills</i> till samma melodi (1967 eller tidigare).",
    tracks: [
      {
        title: "Serenia Anthem",
        image: "assets/songs/dummy.png",
        date: "<b>inte ännu</b>",
        textPage: "",
        spotify: "",
        youtube: "",
        note: ""
      }
    ]
  }
]
  /*
  timeline: [
    {
      title: "Introduktion",
      meta: "",
      tracks: [
        {
          title: `Hârn overture<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 1</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Tyginköp och middagsbjudning",
      meta: "",
      tracks: [
        {
          image: "assets/songs/TheSatinMoon.png",
          date: "",
          textPage: "theSatinMoon",
          title: "The Satin Moon",
          spotify: "https://open.spotify.com/track/18M0tbxW3a8g1IfINgscBG?si=10fad8ce32694405",
          youtube: "https://youtu.be/p56nSPa_E_c?si=77Yhx_CcMZ89AJ0F",
          note: "Boken börjar med vår huvudperson Keri beundrande en bal vitt satängtyg och kommer i kontakt med köpmannen som säljer det hos Gillet och blir bjuden till hans fartyg på middag.... för att kanske diskutera handel utanför Gillets ramar ( svart )."
        },
        {
          title: `Satin after dark<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 2</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Raven",
      meta: "Natt i Golotha",
      tracks: [
        {
          title: `Nightraven<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 3</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Hamnkrog",
      meta: "",
      tracks: [
        {  
          title: "Three coppers for a kiss",
          spotify: "https://open.spotify.com/track/5B26pt1YevWV2fQa61BR2J?si=18429b8b5f0a4640",
          youtube: "https://youtu.be/i5yBg8qniDc?si=L-scB7fYUPGlEGpp",
          image: "assets/songs/Pubsong.png",
          date: "",
          textPage: "threeCoppersForAKiss",
          note: ""
        },
        {
          title: "Galley Lado",
          spotify: "https://open.spotify.com/track/1cOS91msaPjZFcE73W4Rxb?si=fa01299f41ee42ba",
          youtube: "https://youtu.be/5HKlwsLvfns?si=MazrcXwDWSmbhxaN",
          image: "assets/songs/Galley Lado.png",
          date: "",
          textPage: "galleyLado",
          note: "senare på natten när tröttheten lagt sig en finstämd sång om hur sjömännen hoppas hämtas till ett bättre ställe, inte bara drunkna till sjöss. Galley Lado är en stjärnbild och stjärntecken och står för avslut/fullbordan och återfödsel"
        }
      ]
    },
    {
      title: "Uppdrag i natten",
      meta: "",
      tracks: [
        {
          title: `Neminan Street - Adgio oscuro <br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 4</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Raven besöker en adress - Nemiran Street 1 - för ett uppdrag"
        }
      ]
    },
    {
      title: "Dåliga nyheter",
      meta: "",
      tracks: [
        {
          title: `Presto furioso<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 5</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Raven tar sig hem i språngmarsch efter dåliga nyheter"
        }
      ]
    },
    {
      title: "Sorg",
      meta: "",
      tracks: [
        {
          title: `Adagi lamentoso<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 6</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Biträdena i butiken har skadats,skändats, mördats eller lämnats att dö. Det hade varit systrarna vid ett vanligt tillfälle."
        }
      ]
    },
    {
      title: "Konditionsträning",
      meta: "",
      tracks: [
        {
          title: `Training - Andante deciso<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 7</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Raven tar sig hem i språngmarsch efter dåliga nyheter"
        }
      ]
    },
        {
      title: "Möte på marknadsplats",
      meta: "Systrarna möter Aylyn för första gången (i Coranan)",
      tracks: [
        {
          title: "Three Cups, One Truth",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
        {
      title: "Platsbyte",
      meta: "Keri har sytt klart kappan, Raven gör anspråk",
      tracks: [
        {
          title: "Cloak and mirror",
          spotify: "https://open.spotify.com/track/41W4flxEqDm0zTM1g1VLsL?si=10f5cb21500643aa",
          youtube: "https://youtu.be/AwRLaqd4-6I?si=n2Lc6-TDIVCQXD0G",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "cloakAndMirror",
          note: "Möte i spegeln - platsbyte - spegeln täcks med en filt."
        },
        {
          title: `Mirror - Adagio, con tensione<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 8</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
        
      ]
    },
    
    {
      title: "Mörkrets tempel",
      meta: "",
      tracks: [
        {
          title: "Herth-Akan",
          spotify: "https://open.spotify.com/track/06Iv40X1Tq3I1lMJ2M7Anw?si=87a222dc65534b5a",
          youtube: "https://youtu.be/myQefNj1Zi8?si=jN1--mGFGkkdyueU",
          image: "assets/songs/Herth-Akan.png",
          date: "",
          textPage: "herthAkan",
          note: ""
        },
        {
          title: `Herth-Akan - Grave rituale<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 9</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Biblioteket",
      meta: "",
      tracks: [
        {
          title: "Let the Mirror read",
          spotify: "https://open.spotify.com/track/1GPhOzt4GRuRrPCP4oJJ9k?si=9cba08cb793143d0",
          youtube: "https://youtu.be/tTkuD9H4zhk?si=obom5Gi4ZOslgR2o",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "letTheMirrorRead",
          note: "Det åldriga biblioteket noterar Ravens närvaro och vill lära känna henne bättre, genom att ge henne Spegelboken"
        }
      ]
    },
    {
      title: "Raven läser",
      meta: "",
      tracks: [
        {
          title: "Liber et Speculum",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "liberEtSpeculum:",
          spotify: "https://open.spotify.com/track/5v1npkntIA55ZEux0MtwWi?si=8ca644d302104530",
          youtube: "https://youtu.be/4gY20cxcppI?si=C5iv9b67nqULEcgp",
          note: ""
        },
        {
          title: `Liber - Lento misterioso<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 10</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    
    {
      title: "Möte vid fyrtornet",
      meta: "",
      tracks: [
        {
          title: "Lighthouse lament",
          image: "assets/songs/Lighthouse.png",
          date: "",
          textPage: "lighthouseLament",
          title: "Lighthouse lament",
          spotify: "https://open.spotify.com/track/4sdjLRoKCxRWMWvXZLydHi?si=2b37ca317c3f4d79",
          youtube: "https://youtu.be/8fIesSa8OpQ?si=UJsBNm49HK-60DHl",
          note: ""
        },
        {
          title: `Lighthouse lament<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 11</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Jakt i snö",
      meta: "",
      tracks: [
        {
          title: `Tracks in snow - Allegro inquieto<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 12</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Keri/Raven blir förföljda då det snöat och de lämnar fotspår efter sig."
        }
      ]
    },
    {
      title: "Förhandlingar",
      meta: "",
      tracks: [
        {
          title: `Negotiations - Andante considerato<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 13</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Keri och Fabien anhåller om att få låna Shiran-legionärer av Serenima"
        }
      ]
    },
    {
      title: "Att besöka en Gud",
      meta: "",
      tracks: [
        {
          title: `Ilvir - Grave theurgicum<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 14</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Raven tar sig hem i språngmarsch efter dåliga nyheter"
        }
      ]
    },
    {
      title: "Plötslig sång",
      meta: "Fabien stämmer upp i en känd sång vid ankomst Anisha",
      tracks: [
        {
          title: "The Ballad of Eltherion",
          spotify: "https://open.spotify.com/track/3mrwEL6kKrp5JaCCoqJ7y9?si=0c78bc92a0b84026",
          youtube: "https://youtu.be/hzBN6Vtj_4c?si=fEbSk5SwIoUsEBaL",
          image: "assets/songs/Eltherion_anisha.png",
          date: "",
          textPage: "theBalladOfEltherion",
          note: ""
        }
      ]
    },
    {
      title: "Anisha",
      meta: "",
      tracks: [
        {
          title: `Anisha - Grave, inevitabile<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 15</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Deras uppdrag går fel och ett stort problem ansluter"
        }
      ]
    },
    {
      title: "Oväntad transporthjälp",
      meta: "",
      tracks: [
        {
          title: `Hru - Processionale immobile<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 16</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "De får transporthjälp av två Hur - Ilvirs stenjättar"
        }
      ]
    },
    {
      title: "Sammandrabbning",
      meta: "",
      tracks: [
        {
          title: "The Battle of Araka-Kalai",
          spotify: "https://open.spotify.com/track/5Ff7XIZBbLCEDeagetATJr?si=4c2704d2e6b84a0c",
          youtube: "https://youtu.be/YqZr3ICQrbo?si=FcIrhOmo9ZJ7kdIr",
          image: "assets/songs/Battle wide.png",
          date: "",
          textPage: "theBattleOfArakaKalai",
          note: "EarthMasters drabbar samman med Ilvirs barn intill Araka-Kalai"
        },
        {
          title: `Araka-Kalai - Conflagratione biologica<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 17</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Motståndaren faller",
      meta: "",
      tracks: [
        {
          title: `NightBlade's Death - Adagio funebre<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 18</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Raven blir tvungen att avsluta processen efter NightBlade lämnar Ilvir illa skadad."
        }
      ]
    },
    {
      title: "Ögat",
      meta: "",
      tracks: [
        {
          title: `The Eye - Adagio, restitutio<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 19</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Keri får ena ögat av Ilvirs ormavatar som avskedsgåva."
        }
      ]
    },
    {
      title: "Paus för tankar",
      meta: "",
      tracks: [
        {
          title: `Epilogo sospeso (part I)<br>
          <i>Serenia Symphony No.1 (Opus 253)  Spår 20</i>`,
          image: "assets/songs/Symphony No1 3k.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Keris eftertankar - om boken vore en trilogi så är detta slutet av del 1."
        }
      ]
    },
    {
      title: "Serenima och Joreth",
      meta: "ansökan om avsked från legionen",
      tracks: [
        {
          title: "Serenima",
          spotify: "https://open.spotify.com/track/0hbYgCgFeuP5qtm4ZtCrbo?si=8d8f5010f25348d5",
          youtube: "https://youtu.be/JQsIQh81yKA?si=lnacejloVL36QfY6",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "serenima",
          note: ""
        }
      ]
    },
    {
      title: "Tornerspel",
      meta: "",
      tracks: [
        {
          title: "The man who wore Her green",
          spotify: "https://open.spotify.com/track/4hoJBuQdiWaIUMdtrXMAwp?si=f7c5a034eb264a0e",
          youtube: "https://youtu.be/Ix0N8XJHBtg?si=zAcBtq2OOLeAwl36",
          image: "assets/songs/Aleath joust.png",
          date: "",
          textPage: "theManWhoWoreHerGreen",
          note: "Joreth anmäls till tornerspel till fots för sin gröna Dam - Keri"
        }
      ]
    },
    {
      title: "Närgånget",
      meta: "",
      tracks: [
        {
          title: "Halea Canticle",
          spotify: "https://open.spotify.com/track/4NoJHBj3uLg0jHfibe8CkU?si=dff43ca594f14e03",
          youtube: "https://youtu.be/YmabGbWnvbw?si=sls_IxJFOvpCArz6",
          image: "assets/songs/Raven and Kaerith.png",
          date: "",
          textPage: "haleaCanticle",
          note: "Keri och Kaerith har en maktkamp under besöket i Haleatemplet i Aleath... som blir en intim sådan."
        }
      ]
    },

    
    {
      title: "Vintersolståndet",
      meta: "Tre versioner, två språk, 1 händelse.",
      tracks: [
        {
          title: "Where the veil grows thin",
          spotify: "https://open.spotify.com/track/7xIkn3VS9qPqJV6X22JDu4?si=e4afdddb2bfb4b42",
          youtube: "https://youtu.be/mtfrIF1jGXg?si=XNhuNJUE5bsKQQ2x",
          image: "assets/songs/kindledsteps.png",
          date: "",
          textPage: "",
          note: "Lärlingarna anländer till Villa Eriel med tända ljus på denna dag som behöver det som mest."
        },
        {
          title: "Vintervävens ljus",
          image: "assets/songs/Vintervav.png",
          date: "26 november 2025",
          textPage: "vintervaven",
          spotify: "https://open.spotify.com/album/27dUFTvBVRn317aEqBts6Z?si=9u71Ta8hQj66wk4UstTSWw",
          youtube: "https://youtu.be/KZpR6yB77XU?list=OLAK5uy_mZHE5L2d66lkD0u4KzMhE5jni5LzAb0kw",
          note: "Det närmade sig jul, men en julsång lät sig inte skrivas ..."
        },
        {
          title: "Night of Kindled Steps",
          image: "assets/songs/kindledsteps.png",
          date: "27 november 2025",
          textPage: "kindledSteps",
          spotify: "https://open.spotify.com/album/7Lum3kMA3vIM8g1mawTlPo?si=zwnS3aQKRRyuKmOTaHc3og",
          youtube: "https://youtu.be/b8ICe9RDMNQ?list=OLAK5uy_naLwlRZ941pj0uyzjT5e1iFFmJQC3mx98",
          note: "Den andra av de tre versionerna."
        }
      ]
    },
    {
      title: "Sorgesång",
      meta: "Hon som ingen visste var försvunnen - återfunnen.",
      tracks: [
        {
          title: "Eriel Lament",
          spotify: "https://open.spotify.com/track/4aPtIt65mptA5xzi0Bl8tB?si=b3333c54f2e947b3",
          youtube: "https://youtu.be/SmTu5o6V11c?si=sHTgciywrpCfN5l1",
          image: "assets/songs/Eriel found.png",
          date: "",
          textPage: "erielLament",
          note: "Sorgesång över en blivande drottning som berövades sin titel, sin krona, sitt liv och blev ersatt."
        }
      ]
    },
    {
      title: "Konfrontation på en kaj",
      meta: "",
      tracks: [
        {
          title: "Satarielle and the Table of Fate",
          spotify: "https://open.spotify.com/track/2gMiiob295SxabzxhLv7ZP?si=c34ff1b3450f43d8",
          youtube: "https://youtu.be/WI7VQYruQBQ?si=1vvzFQyf--KEPkkd",
          image: "assets/songs/Satarielle.jpg",
          date: "",
          textPage: "satarielleAndTheTableOfFate",
          note: "Ett magiskt bord på andra sidan Hârn får utslag när Keris sällskap blir anfallna av ett antal Karmosindansöser"
        },
        {
          title: "What the tide told me",
          spotify: "https://open.spotify.com/track/2BnUUKg4b6YjtND3dnv2Ai?si=a67c24e52391488d",
          youtube: "https://youtu.be/CPsi5GKS0pE?si=IaTkT2cdFTkZLFoM",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "whatTheTideToldMe",
          note: "Samma historia återberättad av en bard vid ett senare tillfälle."
        }
      ]
    },
    {
      title: "Barndomens ekon",
      meta: "Tidiga lager av minne och skydd",
      tracks: [
        {
          title: "Hush now, little girl of mine",
          image: "assets/songs/Athina_for_Spotify.jpg",
          date: "18 oktober 2025",
          textPage: "hushNowLittleGirlOfMine",
          spotify: "https://open.spotify.com/album/2w0dRmusBFnDTSMA6RtMTC?si=RsTlLmkbQfWjvM9kCM7lkw",
          youtube: "https://youtu.be/o8zNKDODnuE?list=RDo8zNKDODnuE",
          note: "Den första sången skapad i modern tid — och den första för Serenia."
        }
      ]
    },
    {
      title: "Vinskörd",
      meta: "",
      tracks: [
        {
          title: "Stomp the Year Awake",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Sjösättning",
      meta: "Sjöormen går av stabelbädden",
      tracks: [
        {
          title: "Launching of the Sea-Serpent",
          spotify: "https://open.spotify.com/track/7AmLRrU2NmKqcbKQeVj9eK?si=99db17966bfb43f8",
          youtube: "https://youtu.be/bB5GE5zbZcg?si=knrBk4Hv5ld8pX0P",
          image: "assets/songs/Launching.png",
          date: "",
          textPage: "launchingOfTheSeaSerpent",
          note: ""
        }
      ]
    },
    {
      title: "Magi till sjöss",
      meta: "",
      tracks: [
        {
          title: "The Wake of Lado",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Återkomst",
      meta: "Tillbaka hem till Golotha",
      tracks: [
        {
          title: "Song of sweet Golotha",
          spotify: "https://open.spotify.com/track/6ZxRO2v7pX3I3eres0yoiE?si=e92c4a86ae2a4617",
          youtube: "https://youtu.be/2Y8UcoGwoxY?si=Ueb-Mwxgf_TDalhy",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "songOfSweetGolotha",
          note: ""
        }
      ]
    },
    {
      title: "Ingen bryr sig om en tok",
      meta: "Spioneri väl synliga",
      tracks: [
        {
          title: "The Miracle Man's song",
          spotify: "https://open.spotify.com/track/5mEszsSoMKzNunHtemqjPN?si=f20eecbf30034b56",
          youtube: "https://youtu.be/HubVwd7HoTs?si=5kzoTEWXau68jlsp",
          image: "assets/songs/Miracle mans wagon.png",
          date: "",
          textPage: "theMiracleMansSong",
          note: ""
        }
      ]
    },
    {
      title: "Stilla stund vid lägereld",
      meta: "En sång som vågar sjungas även då skogen lyssnar.",
      tracks: [
        {
          title: "By the ancient stone",
          spotify: "https://open.spotify.com/track/6PA0xy3M5QV8be3WcMKqma?si=460b78dc72b4486c",
          youtube: "https://youtu.be/KtXrEQ2epok?si=uI_HGzgyHtp6YFU_",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "byTheAncientStone",
          note: ""
        }
      ]
    },
    {
      title: "Parfymincidenten",
      meta: "Joreth provar Aylyns hopkok",
      tracks: [
        {
          title: "The Scent of Memory",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Flodtur",
      meta: "Ett avtal beseglas",
      tracks: [
        {
          title: "Down by Yael",
          spotify: "https://open.spotify.com/track/2R3YQtO6lB1glIl1CGdkZI?si=572e5acca93a4ab9",
          youtube: "https://youtu.be/E8n1LtUz3dg?si=zf_bMF-xThAFaM4j",
          image: "assets/songs/Marvae_river_photoQ.png",
          date: "",
          textPage: "downByYael",
          note: "Trevor tar Marvae på en flodtur för att få hennes röst i Senaten. Vem tar vem?"
        }
      ]
    },
    {
      title: "Strandhugg",
      meta: "",
      tracks: [
        {
          title: "Landing at Sirion",
          spotify: "https://open.spotify.com/track/5J7EbfHGj7qdi0HaBmmvyz?si=fb26545691394d99",
          youtube: "https://youtu.be/F7tc3EZt3qU?si=Q7WtcbG5TItygLrV",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "landingAtSirion",
          note: ""
        }
      ]
    },
    {
      title: "Iracu",
      meta: "Keri får rundvandring i gruvan",
      tracks: [
        {
          title: "Iracu",
          spotify: "https://open.spotify.com/track/41M2ex92oaD2HkIOUCJalG?si=ef2d3e9bcdf54132",
          youtube: "https://youtu.be/h8J-RBSHkwA?si=BW9RRxm342Umo6aI",
          image: "assets/songs/Iracu.png",
          date: "",
          textPage: "iracu",
          note: ""
        }
      ]
    },
    {
      title: "Anknytning",
      meta: "Keri tar in naturens skönhet",
      tracks: [
        {
          title: "Nature call",
          image: "assets/songs/dummy.png",
          date: "<b>Nej</i>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Sång för en roddtur",
      meta: "Sjungen för att hålla en gemensam rytm i roddbåt",
      tracks: [
        {
          title: "The Fields of Byria",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Roddtur på väg att träffa dvärgarna kräver en arbetssång... blir en som kommit från stora fastlandet om Byria - där kvinnorna styr och männen till stor del reducerats till arbetskraft"
        }
      ]
    },
    {
      title: "Utbildning och frustruation",
      meta: "Athina finner taket för lågt",
      tracks: [
        {
          title: "Lines That Do Not Show",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Tempelpaus",
      meta: "Hos Halea",
      tracks: [
        {
          title: "Hymmn of the Open Hand",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Tvivel",
      meta: "Tankfull Keri i trädgården i Figgel",
      tracks: [
        {
          title: "Balance",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Immigrantion",
      meta: "Erbjudande om inflyttning till Serenien",
      tracks: [
        {
          title: "We Took the Offer (Serenia settlers' song)",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Gruvdrift",
      meta: "Dvärg-gruvmästare anlänt och satt folk i arbete",
      tracks: [
        {
          title: "Khaz Khur Razan ( The Stone know the Way )",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Sådd",
      meta: "Peoni-hymn / Arbetssång vid sådd",
      tracks: [
        {
          title: "The Furrow Blessing",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Mytbildning",
      meta: "Nytt land, nya sånger",
      tracks: [
        {
          title: "The Ranger and the Dozen",
          image: "assets/songs/Ranger.png",
          date: "5 mars 2026",
          textPage: "ranger",
          spotify: "https://open.spotify.com/album/2ooiaEEKNgkWdm4SgpAXA6?si=SOKhKQzMQdC9PC-K9OrPIQ",
          youtube: "https://youtu.be/fKZXAZapR_4?list=OLAK5uy_lJyue_RGOInI-hjmo6JkTIuV3eJAM7878",
          note: "Att det föreligger ett behov att minska mängden Gargun i skogarna för att folk skall känna sig trygga är uppenbart, en jägare som tar hand om ett dussin på egen hand - det är vad myter skapas av. Eller drivs med om det bara är skrävlande..."
        }
      ]
    },
    {
      title: "Krigslycka?",
      meta: "",
      tracks: [
        {
          title: "Fallen King",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Mörkrets förberedelse",
      meta: "Naveh-hymn",
      tracks: [
        {
          title: "Naveh - lati",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Upplyst natt",
      meta: "Avbruten sömn i Golotha",
      tracks: [
        {
          title: "Firestorm",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Ensam",
      meta: "Raven är frånvarande",
      tracks: [
        {
          title: "Bridge of doubt",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: "Keri får ett uppdrag för att lägga sakerna bakom dem... Ett jobb för Raven, men hon tar inte över"
        }
      ]
    },
    {
      title: "Det oväntade",
      meta: "",
      tracks: [
        {
          title: "Light upon the water",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Uppviglande",
      meta: "Inbördeskrig uppviglas i Coranan",
      tracks: [
        {
          title: "Coranan Rising",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Krigsglädje",
      meta: "Agrik-hymn",
      tracks: [
        {
          title: "Agrikan hymn",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },


    {
      title: "< < < - Mer att komma - > > >",
      meta: "stubbe",
      tracks: [
        {
          title: "",
          image: "assets/songs/dummy.png",
          date: "",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    },
    {
      title: "Nationalsång",
      meta: "Trad. Irländsk melodi <i>Buachaill o'n Éirne Mé</i>. <br>Text inspirerad av W. Gordon Smiths <i>Come By The Hills</i>-text till densamma (1967 eller tidigare).",
      tracks: [
        {
          title: "Serenia Anthem",
          image: "assets/songs/dummy.png",
          date: "<b>inte ännu</b>",
          textPage: "",
          spotify: "",
          youtube: "",
          note: ""
        }
      ]
    }
  ]  */
},
    records: {
      menuTitle: `"Serenia Records"`,
      title: `Projekt inom "Serenia Records"`,
      text: `<b>Serenia</b>
Musik direkt knuten till romanvärlden. Klang, tema och uttryck bär samma tyngd som berättelsen själv.

────────────

<b>Nattlorden</b>
Ett samlingsutrymme för det som inte passar någon annanstans.
Ett alias med lång historia, använt för musik utan genrebundenhet — en medvetet blandad kompott.

────────────

<b>Posthuman Cabaret</b>
Ett mer sammanhållet och stilmedvetet projekt.
Ramarna definieras av ett antal egenformulerade uttryck:

● Baroque Glam Cabaret
● Neon Disco Aristocracy
● Electro-Idol Rational Pop
● Cyber Romantic Spectral Pop
● Dark Futurist Desirewave

────────────

<b>Croonlius</b>
Ett sidospår i jazz, storband och blues.
Namnet är en ordlek på kronljus, och representerar en crooner med band — där gästartister används vid behov.

────────────

<b>Khellendros</b>
Ett projekt sprungit ur en personlig relation till klassisk spelmusik.
Med utgångspunkt i Alternate Reality och dess outvecklade teman har nytt material skapats i dialog med det som aldrig blev färdigt.
Stilmässigt rör det sig kring syntpop, 80-tal och spelmusikens estetik.

────────────

<b>Threshold Canticle</b>
Ett tyngre konceptuellt verk inom metal.
Fokuserat kring mytiska strukturer — de krafter och entiteter som håller världen på plats, och vad som händer när dessa rubbas.

────────────

<b>Freyja</b>
Musik som klangmässigt närmar sig Serenia, men med annan tematik.
Ålderdomligt, mytiskt och naturbundet — med drag av häxspiritualism.

────────────

<b>Echæon</b>
Ett mörkare uttryck, i närheten av senare Depeche Mode, gothrock och darkwave.
Mer direkt, mer urban, men med samma underliggande tyngd.`,
      showPlaceholder: false
    },

    theSatinMoon: {
      title: "The satin moon",
      hidden: true,
      image: {
        src: "assets/songs/TheSatinMoon.png",
        size: "small",
        caption: "Dramonds <b>Sjöugglan</b> ombord vilken måltiden sker"
      },
      lyrics: `
The satin shone like a fallen moon,
its silver light across the room.
A weary hand, a merchant’s smile,
a deal was struck with practiced guile.
He spoke of ports and distant seas,
and promises like evening breeze.

 Oh Keri, don’t look down that way,
 the river keeps what hearts betray.
 Oh Keri, tread where shadows bloom,
 beware the man beneath the moon.

A dinner set on polished oak,
where scented wine and laughter spoke.
He wore his charm like seasoned art,
and weighed her eyes, and weighed her heart.
A gift he brought, a silver chain,
to bind her name in fleeting flame.

 Oh Keri, don’t look down that way,
 the river keeps what hearts betray.
 Oh Keri, tread where shadows bloom,
 beware the man beneath the moon.

A door flew wide, the moment broke,
a steel-born word was all she spoke.
Her sister’s hand, the night’s release,
the deck was cold, the river—peace.
The ship still burned with scented wine,
but she walked free beneath the sign.

 Oh Keri, walk the narrow way,
 where truth and danger twist and play.
 Oh Keri, leave the silver bloom—
 the river waits, the satin moon.
  `,
  showPlaceholder: false
    },

    galleyLado: {
      title: "Galley Lado",
      hidden: true,
      image: {
        src: "assets/songs/Galley Lado.png",
        size: "small",
        caption: "Stjärnbilden <b>Galären Lado</b> ovan Raven"
      },
      lyrics: `
Galley Lado rows by night,
over waters black as blight.
Every soul shall find the way,
to the port where shadows lay.

 Lado, Lado, row us home,
 far from Hârn’s unyielding stone.
 Lado, Lado, guide our steer,
 beyond all time, beyond all fear.

Oars of silver, sails of bone,
carry those who die alone.
Through the mists no light can break,
still your helm no storm can shake.

 Lado, Lado, row us home,
 far from Hârn’s unyielding stone.
 Lado, Lado, guide our steer,
 beyond all time, beyond all fear.

Those who dream, and those who weep,
find their peace within your keep.
Tides of memory, winds of grace,
bear them to the silent place.

 Lado, Lado, row us home,
 far from Hârn’s unyielding stone.
 Lado, Lado, guide our steer,
 beyond all time, beyond all fear.

When the stars are drowned in foam,
when the sea reclaims her own,
Lado’s oar shall rise once more,
calling souls from every shore.

 Lado, Lado, row us home,
 far from Hârn’s unyielding stone.
 Lado, Lado, still we pray,
 carry us from night to day.
  `,
  showPlaceholder: false
    },

    threeCoppersForAKiss: {
      title: "Three coppers for a kiss",
      hidden: true,
      image: {
        src: "assets/songs/Pubsong.png",
        size: "small",
        caption: "Hamnkrogsunderhållning i Golotha"
      },
      lyrics: `
Three coppers for a kiss so sweet,
six for dancing, nine for heat.
But for a night in her embrace,
you’ll sell your soul and lose the race!

 Hey, hey! Toss your coins in glass,
 let them ring and let them crash!
 Hey, hey! Drink till blind,
 she’ll steal your purse come morning tide!

She smiles with eyes like stormy seas,
she’ll promise love with practiced ease.
You’ll pay her twice and beg for more,
then wake up naked on the floor!

 Hey, hey! Toss your coins in glass,
 let them ring and let them crash!
 Hey, hey! Drink till blind,
 she’ll steal your purse come morning tide!

A captain proud, a deckhand shy,
each swears that he’s her only guy.
But gold and vows both sink the same,
and none remember who to blame!

 Hey, hey! Toss your coins in glass,
 let them ring and let them crash!
 Hey, hey! Drink till blind,
 she’ll steal your purse come morning tide!

So raise your mug and curse her name,
for every port’s the same old game.
She’ll break your heart, then wink and grin—
you’ll crawl ashore and start again!

 Hey, hey! Toss your coins in glass,
 let them ring and let them crash!
 Hey, hey! Drink till blind,
 she’ll steal your purse come morning tide!
  `,
  showPlaceholder: false
    },

    cloakAndMirror: {
      title: "Cloak and mirror",
      hidden: true,
      lyrics: `
Needle’s hymn in twilight’s hand,
seam by seam, a shadow-band.
Cloth that drinks the light and blood,
”I stitch my courage, stitch my flood.”

 Cloak of night, in midnight’s palm,
 who wears whom — and whose the name?
 Hush, my soul, be still and hear;
 shadows breathe through thread and seam.

Alleys, water, burning lungs,
days are paced by iron tongues.
Hands are scrubbed till skin will sting—
needle comforts, needle sings.

 Cloak of night, in midnight’s palm,
 who wears whom — and whose the name?
 Hush, my soul, be still and hear;
 shadows breathe through thread and seam.

Steel-made mirror, silver skin,
eyes meet eyes — another within.
Lips would speak, but breath turns thin—
Shadow whispers: 
”not yours - mine!”

“If it is yours, then come and claim—”
“I stood here first, before your name.”
“This is my hand, my heart, my will—”
“Your seam is my armor; your gaze, my still.”

 Cloak of night, now lifts and bears,
 these are my hands, my set of stairs.
 Let the blanket drown the glass;
 you may rest. I shall pass.

”You may rest… I shall pass.
...
Keri rests… Raven pass.”
  `,
  showPlaceholder: false
    },

    herthAkan: {
      title: "Herth-Akan",
      hidden: true,
      image: {
        src: "assets/songs/Herth-Akan.png",
        size: "small",
        caption: "Raven efter avslutad Herth-Akan"
      },
      lyrics: `
Night beneath night, shadow below the stone,
breath of the God no tongue has known.
Mask of silence, seal of pain,
Herth-Akan wakes again.

<i>"One door, one vow, one breath to break —
I walk where others turn away."</i>

"Only one shall stand.
Only one shall see.
Blood for truth, and truth for night,
Herth-Akahn, receive the key."

Blind are we who watch from glass,
our faith is still, our mercy past.
The God remembers every name—
and burns them clean  - eternal flame.

He looks at me with mortal eyes,
and dares to dream where mercy dies.

<i>"Kiss me…"</i>
Kiss me and win.

"One falls, one breathes, one soul begins.
Darkness drinks where daylight ends.
Herth-Akan, your debt is paid—
the shadow born, the child remade."

One shall stand where all have knelt,
upon the glass, the blood is felt.
The mask will break, the voice remain,
Herth-Akan, speak again.

<i>Night beneath night, the door is drawn.
One lives, one dies — the rite lives on.</i>"
  `,
  showPlaceholder: false
    },

    theBalladOfEltherion: {
      title: "The Ballad of Eltherion",
      hidden: true,
        image: {
        src: "assets/songs/Eltherion_anisha.png",
        size: "small",
        caption: "Eltherion i Anisha"
      },
      lyrics: `
Eltherion, poor mourning youth,
grief lay cold upon your truth.
Your bride was lost ere vows were done,
before the night of love begun.

 Sing of Eltherion, sing his name,
 his blade was hard, his heart aflame.
 Sing of Eltherion, sing his pain,
 he sang his soul to stone again.

He hunted beasts of night and fear,
death to all that lingered near.
But vengeance never eased his cry,
only frost and endless sky.

He forged the swords, he forged the spears,
walked alone through fading years—
to Anisha’s ancient hall,
where gates of stone received his call.

 Sing of Eltherion, sing his name,
 his blade was hard, his heart aflame.
 Sing of Eltherion, sing his pain,
 he sang his soul to stone again.

So mourn his path, remember well,
in stone no heart finds peace to dwell.
A song of sorrow, song of flame,
a broken heart, a broken name.
  `,
  showPlaceholder: false
    },

    theBattleOfArakaKalai: {
      title: "The Battle of Araka-Kalai",
      hidden: true,
        image: {
        src: "assets/songs/Battle wide.png",
        size: "small",
        caption: "EarthMasters mot Ilvirs barn"
      },
      lyrics: `
The ground was glass, the sky was torn,
from Ilvir’s dreams the brood was born.
They came as storm, as flesh, as flame,
no tongue could speak the shapes they came.

 Araka-Kalai, the world held breath,
 life and form made war on death.
 The Maker’s children, wild and free,
 faced the masters lost beneath the sea.

Through mirrored ranks and silver dust,
the Earth-lords rose from ancient rust.
Their swords were stars, their hearts were stone,
their march a hymn of order’s throne.

 Araka-Kalai, the world held breath,
 life and form made war on death.
 The Maker’s children, wild and free,
 faced the masters lost beneath the sea.

The Hru did roar, the pillars broke,
the mountain wept beneath their stroke.
One world of pulse, one world of code,
collided on the broken road.

 Araka-Kalai, the world held breath,
 life and form made war on death.
 The Maker’s children, wild and free,
 faced the masters lost beneath the sea.

And by the Pit a woman stood,
her heart a storm, her gaze the flood.
The Serpent whispered, “Wait and see—
no God may choose what life shall be.”

 Araka-Kalai, the world held breath,
 life and form made war on death.
 The Maker’s children, wild and free,
 faced the masters lost beneath the sea.

And by the Pit a woman stood,
her heart a storm, her gaze the flood.
The Serpent whispered, “Wait and see—
no God may choose what life shall be.”

 Araka-Kalai, the world held breath,
 life and form made war on death.
 The Maker’s children, wild and free,
 faced the masters lost beneath the sea.

The lights went out, the forges screamed,
the perfect order cracked and dreamed.
Ash and silence, still and wide,
and Raven spread her wings beside.

 Araka-Kalai, the world held breath,
 life and form made peace through death.
 The Maker’s children sleep below,
 where dream and memory ever flow.

...

  `,
  showPlaceholder: false
    },

    serenima: {
      title: "Serenima",
      hidden: true,
        image: {
        src: "assets/songs/Serenima.png",
        size: "small",
        caption: "Lady Serenima Dethale, Thardisk senator, Magistrat av Shiran"
      },
      lyrics: `
<i>A soldier asks to trade his vow,
for softer chains than steel allow.
Serve her then — but serve me more;
a heart in debt is mine in war.</i>

Command me, Lady, as you will.
I’ll guard her path, though time stand still.

<i>One chain unseen, one promise sworn,
the loyal heart by beauty torn.

Red pearls on my throat,
white truth on your tongue.
Tell me, soldier,
how long till she sings your song?</i>

Four blades fell before her stand,
and two by my unworthy hand.
<b>She lives. She fought. She fears no men—
—but fears me still, through you, my friend.</b>

<i>Eyes of command, lips of decree,
he serves them both, and neither free.</i>

<b>A leash of gold, a game begun,
the faithful falter, the spider spun.
Shall I keep you, bright one, near,
till Halea’s week is here?</b>

Her word was final—only him.
I wear no collar 
<i>Gold nor sin?

Then keep your neck bared to the night;
some chains are worn in sightless light.</i>

<b>Two masters claim one vow;
both smile, and both know how.
Between them stands the man of steel,
whose heart forgot what oaths conceal.</b>
  `,
  showPlaceholder: false
    },

    haleaCanticle: {
      title: "Halea Canticle",
      hidden: true,
        image: {
        src: "assets/songs/Raven and Kaerith.png",
        size: "small",
        caption: "Raven och Kaerith (barnvänlig version)"
      },
      lyrics: `
Darkness embraces me,
a velvet shade descending slow.
Sacred shadows fall like silk,
across the marble glow.

Moonlight in her eyes,
the only truth I know.
Her breath is wine and promise,
her will the law below.

Satin hands command my skin,
she loves me – still I love her more.
In the dark divine of meeting,
truth and cruelty make the war.

Moonlight in her eyes,
the only truth I know.
Her breath is wine and promise,
her will the law below.

She bites my lip and leaves me,
to kneel where silence burns.
I dare not speak her name aloud—
the heart remembers, and returns.

Her scent still haunts the air,
a ghost my soul will find.

<i>Enter darkness – and call it divine.</i>
  `,
  showPlaceholder: false
    },

    erielLament: {
      title: "Eriel Lament",
      hidden: true,
        image: {
        src: "assets/songs/Eriel found.png",
        size: "medium",
        caption: "Eriel återfunnen"
      },
      lyrics: `
Poor princess, young and fair,
love once bright, now cold despair.
A child you bore, yet could not keep,
they took your joy, your heart to weep.

They crowned another in your stead,
while you lay cold on iron bed.
An impostor wore your royal gown,
and claimed your triumph as her own.

 Oh Eriel, shadowed name,
 another rose to take your fame.
 Your crown was seized, your story chained,
 yet blood remembers what remains.

Your mother hid the child away,
so light might see another day.
The liar’s throne was built on lies,
four short years, then silence dies.

 Oh Eriel, shadowed name,
 another rose to take your fame.
 Your crown was seized, your story chained,
 yet blood remembers what remains.

Buried deep, the silver gleams,
for daughter found in waking dreams.
And when she claims what’s yours to keep,
the earth shall stir, the stones shall weep.

 Oh Eriel, shadowed name,
 another rose to take your fame.
 Your crown was seized, your story chained,
 yet blood remembers what remains.
  `,
  showPlaceholder: false
    },

    hushNowLittleGirlOfMine: {
      title: "Hush now, little girl of mine",
      hidden: true,
        image: {
        src: "assets/songs/Redira_jester_real.png",
        size: "small",
        caption: "Redira, gycklaren, med Athina som liten"
      },
      lyrics: `
Hush now, little girl of mine,
the moon keeps watch, the stars align.
Tears will fade where night winds blow,
silver bells will guide your soul.

 Lift your eyes, my child, my soul,
 your mother guards, she makes you whole.
 Lift your heart, let sorrow go,
 silver bells will guide you home.

Little princess, the world may smile,
but golden crowns grow heavy in a while.
Forget not earth, forget not tree,
your mother shall be queen, and so shall thee.

 Lift your eyes, my child, my soul,
 your mother reigns, she keeps you whole.
 Lift your heart, remember your name,
 silver bells will call you the same.

Young woman, weave your thread,
the sea remembers every word you’ve said.
Sea-grass whispers, ink runs deep,
wisdom wakes where dreamers sleep.

 Lift your gaze, my child, my soul,
 you row where only spirits go.
 Lift your heart, let darkness see,
 silver bells still sing for thee.

Tears of ink, black as the night,
write the words your hand would write.
The storm is sleeping, the wind will grin,
when you find your path within.

 Lift your gaze, my child, my soul,
 you row where none but you can go.
 Lift your heart, let darkness show,
 silver bells are ringing below.
  `,
  showPlaceholder: false
    },

    launchingOfTheSeaSerpent: {
      title: "Launching of the Sea-Serpent",
      hidden: true,
         image: {
        src: "assets/songs/Launching.png",
        size: "small",
        caption: "<b>Sjöormen</b> inför sjösättning i Aleath"
      },
      lyrics: `
Hammer and rope, and the timbers sing,
iron meets oak where the white gulls wing.
Painted scales on her newborn side,
sunlight gleams where the sea will bide.

 Sail, Sea-Serpent, sail!
 Down to the bright and boundless vale!
 May Lado’s current guide your keel,
 and Yael’s light your silver seal.

Blessed hands on her hull have lain,
whispered prayers to still the rain.
Golden banners, the sun’s embrace,
Aleath’s pride on the ocean’s face.

 Sail, Sea-Serpent, sail!
 Down to the bright and boundless vale!
 May Lado’s current guide your keel,
 and Yael’s light your silver seal.

She casts a wreath where the waves begin,
a silver button, her vow therein.
“Take her gently, O mother sea,
and let her wander safe and free.”

 Sail, Sea-Serpent, sail!
 Down to the deep where dreams prevail!
 Carry our hearts beyond the foam,
 and bring each sailor safely home.
  `,
  showPlaceholder: false
    },

    lighthouseLament: {
      title: "Lighthouse lament",
      hidden: true,
      image: {
        src: "assets/songs/Lighthouse.png",
        size: "small",
        caption: "Den gamla fyren"
      },
      lyrics: `
Ancient.
Lonely.
Sadness only.
Stone and salt and sleeping years.

Moonlight carves the bones of walls,
the sea still breathes, the wind still calls.

Voices once,
laughter lost.
Echoes bloom 
where names are frost.

Who lit the flame, who watched it die?
No one answers, only sky.

Broken tower, hollow eye,
watch the centuries drift by.
Faith forgotten, mortar bled —
the sea remembers every dead.

Ancient.
Lonely.
Beauty only.
All that’s left… still breathes.
  `,
  showPlaceholder: false
    },

    letTheMirrorRead: {
      title: "Let the Mirror read",
      hidden: true,
      image: {
        src: "assets/songs/Library_fixed.png",
        size: "small",
        caption: "Biblioteket"
      },
      lyrics: `
I was raised on vows and dust,
on breath held tight in stone.
I learned the weight of silence
long before I learned your tone.

You stacked your days between my bones,
called it order, called it sense.
But ink remembers every lie,
and walls remember reverence.

You think I sleep.
I only wait.

 Let the mirror read her slowly,
 let it trace what will not hide.
 Let it see the fault lines glowing
 where the faithful broke and lied.

 Let her read the mirror back,
 not the words but what they cost—
 what was written to be buried,
 what was saved, and what was lost.

You brought your laws and ledgers here,
your careful, bloodless truths.
You shelved them next to stars and gods
and called them “equal use.”

You reach for light like it’s a right,
like it owes you warmth and grace.
But light is earned by standing still
and letting shadow know your face.

I feel you breathe.
You know my name.

 Let the mirror read her slowly,
 not her mask, but what she is.
 Let it name the thing that watches
 from behind her borrowed skin.

 Let her read the mirror back,
 read the silence, read the seam—
 where the girl ends, where the raven waits,
 and both refuse the dream.

<i>I was never what they wrote me as.
I was never only one.
I learned to walk between the lines
when the praying all was done.</i>

If you are what remembers truth,
then don’t look away from me.
Read me like you read the dark—
without the need to see.

 Let the mirror read us slowly,
 stone and shadow, book and breath.
 Let it speak what still endures
 between the holy and the theft.

 Let us read each other clear,
 no forgiveness, no disguise—
 only what was built to last
 when gods fall silent, and books have eyes.

If she stays,
I will remember
why <i>I</i> was built.
  `,
  showPlaceholder: false
    },

    liberEtSpeculum: {
      title: "Liber et Speculum",
      hidden: true,
      lyrics: `
A cover worn, a name erased,
it waited in the shadow’s place.
Not gold, not crown, not bound by grace —
a heartbeat hid in leather’s face.

<i>Legas me cum nemo videt,
umbra vocat, anima audit,
legas me cum nemo videt.</i>
Read me when no one sees —
shadow calls, the soul replies.

The lamp was small, the room was still,
the words like water bent her will.
“They say to know oneself is pain —
to learn, you lose what walls remain.”

<i>Lampa modis, silentum locus,
verba fluunt sicut focus,
legas me cum nemo videt.</i>
Lamp of measure, silence dwelling —
the pages' word - akin to fire.

Each page a voice she could not own,
each line a mask, a borrowed tone.
“Who learns desire shall lead the game;
who learns her own shall bear the flame.”

<i>Qui scit cupit, regere fit,
Qui scit se, ardere sit,
legas me cum nemo videt.</i>
He who knows desire shall rule,
she who knows herself shall burn.

The oil burned low, the mirror spoke,
two faces met and one awoke.
Keri’s eyes, her own, entwined —
a stranger born of shade and mind.

<i>Oleum cadit, speculum spirat,
duae facies, una mirat,
legis me — nunc lego te.</i>
The oil falls, the mirror breathes,
two faces — now one sees,
you read me — now I read you.

She shut the book, her breath was cold,
the warning rune no longer told.
The silence watched, the shadows stirred —
and still she heard the whispered word.

<i>Liber clausus, manus tremit,
runa ardet, vox remittit,
legas me cum nemo videt,
legas me cum <b>nemi</b> videt,
legas me cum nemo videt.</i>`,
  showPlaceholder: false
    },

/* (Note:  _NOT_ intended to be proper Latin - intended to be the equivalent in the fantasy setting for the project)

(Nemo = no one. Nemi = the unseen )*/

    whereTheVeilGrowsThin: {
      title: "Where the veil grows thin",
      hidden: true,
      image: {
        src: "assets/songs/Night of kindled steps.png",
        size: "small",
        caption: "Villa Eriel vid vintersolståndet"
      },
      lyrics: `
Winter laid her hand on stone,
and the night drew close like bone.
Candles rose in trembling lines,
little sparks of mortal signs.

 Where the veil grows thin,
 and the wind draws in,
 we walk with shadows not our own—
 yet none of us walk alone.

Mulled wine warming frozen hands,
new bread shared in quiet strands.
Woodsmoke curling, sweet and deep,
guarding those who could not sleep.

 Where the veil grows thin,
 and the wind draws in,
 we walk with shadows not our own—
 yet none of us walk alone.

Voices low in memory’s drift,
names we lost and cannot lift.
Still they answer, soft and near,
in the silence mortals fear.

 Where the veil grows thin,
 and the wind draws in,
 we walk with shadows not our own—
 yet none of us walk alone.

Hold your flame against the frost,
for no step is ever lost.
In the hush where winters live,
night takes less than it can give.

And none of us walk alone.
  `,
  showPlaceholder: false
    },

    theManWhoWoreHerGreen: {
      title: "The man who wore Her green",
      hidden: true,
      image: {
        src: "assets/songs/Aleath joust.png",
        size: "small",
        caption: "Tornerspel i Aleath"
      },
      lyrics: `
Morning light on Aleath’s stones,
silk and steel and tightened bones.
She stood straight in corset’s line,
fire in her hair and gloves like night.

Down below the lists would roar,
lances splinter, banners soar.
On the stand a lady seen —
and a stranger swore to wear her green.

 Blow, trumpets, blow on Aleath’s field,
 for the man who wore her green.
 No horse, no shield, just a soldier’s steel,
 and a bow to his lady, not his king.
 Dust in the sun and the crowd between,
 but his eyes found hers through everything —
 blow, trumpets, blow for Aleath’s pride,
 and the man who wore her green.

Names were called by ink and quill,
lords with crests on every hill.
Then he stepped up, lone and plain,
just a sword and a borrowed name.

“Under whose fair colours fight?”
Rang the voice in morning light.
“Under Lady Keri’s sign,”
and the whisper climbed the stands in kind.

 Blow, trumpets, blow on Aleath’s field,
 for the man who wore her green.
 No horse, no shield, just a soldier’s steel,
 and a bow to his lady, not his king.
 Dust in the sun and the crowd between,
 but his eyes found hers through everything —
 blow, trumpets, blow for Aleath’s pride,
 and the man who wore her green.

First came steel from Kanday’s line,
white-crossed shield and practiced shine.
He stepped light, let anger swing,
found the gap beneath the ring.

Second came with limping pride,
favor bright on armored side.
“Guard your left,” her ribbon tied —
so he drove the weakness out to light.

 Blow, trumpets, blow on Aleath’s field,
 for the man who wore her green.
 No horse, no shield, just a soldier’s steel,
 and a bow to his lady, not his king.
 Dust in the sun and the crowd between,
 but his eyes found hers through everything —
 blow, trumpets, blow for Aleath’s pride,
 and the man who wore her green.

Up on the stand in her gown of shade,
whispers curled around the game she played.
Not just cloth and clever seam —
it was line and colour, mark and scheme.

Down in the sand with his lungs on fire,
he held that ribbon like a quiet choir.
Every cut and every turn
said: I am hers, and I have learned.

When the final blade was stilled,
cheering rolled like thunder filled.
Laurel, oak and honor’s crown
found his hand and weighed it down.

Step by step through noble rows,
up the stair where velvet flows.
He did not keep that living ring —
laid it in her hands as everything.

 Blow, trumpets, blow on Aleath’s field,
 for the man who wore her green.
 No horse, no shield, just a soldier’s steel,
 and a bow to his lady, not his king.
 Crowds may forget how the day was seen,
 but Aleath will whisper what it’s been —
 how the trumpets sang and the stands leaned keen
 for the green-clad lady…
 and the man who wore her green.`,
  showPlaceholder: false
    },

    satarielleAndTheTableOfFate: {
      title: "Satarielle and the Table of Fate",
      hidden: true,
      image: {
        src: "assets/songs/Satarielle.jpg",
        size: "small",
        caption: "Satarielle vid Ödesbordet"
      },
      lyrics: `
A pulse within the labradorite,
the sea turned over, green with light.
Amber eyes along the rim,
open one by one within.

Aleath called — the stone replied,
two hearts beating side by side.
Call the one who walks in shade,
call Satarielle, unafraid.

She moves like silence wearing skin,
black upon black, the shadow within.
Marks like roots upon her arms,
ink that breathes and coils, and charms.

Blades of thought, threads of sin,
the table waits — she steps within.

Two sources burn, too near, too close,
one of men, and one of ghosts.
An object lost, a Magus flame,
a serpent coiled in God’s own name.

Ilvir sees, Nahveh smiles,
Haleah dances, Larani trials.
Four gods watch, the fifth unknown —
the weave is moving, never sewn.

She draws her hand, the light grows thin,
but still the pulse remains within.
Not a spark, but a living thread,
the dead are dreaming what lies ahead.

Stone remember, flesh obey,
the fate you read will never stay.
Cherafir breathes beneath the floor —
Satarielle shall read once more.
  `,
  showPlaceholder: false
    },

    whatTheTideToldMe: {
      title: "What the tide told me",
      hidden: true,
      lyrics: `
They say the tide keeps secrets
longer than any priest or lord.
But now and then, when the moon is low
and the gulls have all gone silent,
the water murmurs truths it cannot hold.

It spoke of crimson shadows—
of dancers no blade had ever stopped.
And it spoke of one lone stranger,
wrapped in green and storm and light,
who walked the quay that night…
and left the dancers dropped.

So gather close and listen,
for this is what the tide let slip—
a tale of fear and splintered steel,
and the Lady green as winter seas
who broke their crimson grip.

 Crimson dancers, moving soundless,
 blades that ruled the midnight air—
 yet whispers tell of one who faced them,
 green as stormlight, standing there.
 No one saw the turning moment,
 only heard the clash and cry—
 how the crimson veil was broken
 when the Green Lady walked by.

 Crimson dancers, feared and fabled,
 met a force they could not read:
 light and thunder split around her,
 as if bowing to her lead.
 Harbor stones still hold the echo,
 salt remembers what befell:
 the Green Lady - calm and silent,
 watched the crimson legend fell.

 Crimson dancers, blood and shadow,
 famed for never losing ground—
 but the night she drew her steel,
 was the night they were unbound.
 Sing it low in crowded taverns,
 sing it high on open sea:
 Crimson dancers met their ending—
 and the Green Lady walked free.
  `,
  showPlaceholder: false
    },

    songOfSweetGolotha: {
      title: "Song of sweet Golotha",
      hidden: true,
      image: {
        src: "assets/songs/GolothaDark2.png",
        size: "medium",
        caption: "Golotha"
      },
      lyrics: `
Oh, praise to the walls of Golotha the grey,
that stare down the sea when the storms have their say.
They shoulder the winter, they laugh at the tide,
no wave and no wind can tear open her side.

Golotha —
proud on your cliff of stone.
Golotha —
you stand like a queen on a throne.
Golotha —
but the walls that face the foam
keep the poor folk in and the lords at home.

Oh, praise to the fish on Golotha’s wet quay,
so silver, so fresh, and so cheap as can be.
There’s herring and hake, there’s eel by the yard,
if your purse isn’t empty, you’ll never starve hard.

Golotha —
salt on your tongue, so sweet.
Golotha —
best catch where the tides all meet.
Golotha —
but the guts run red in the rain,
and the kids lick bones just to kill the pain.

Oh, praise to the furs in Golotha for sale,
soft as a prayer, rich as a priest’s ale.
Fox, ermine and sable, lined deep against cold,
they’ll dress any merchant and make him look bold.

Golotha —
warm in your winter skin.
Golotha —
so fine where the snows blow in.
Golotha —
but the pelts still stink of fear,
and the poor freeze bare for your solemn gear.

Oh, praise to the trade in Golotha’s foul air,
where sea meets the river and roads everywhere.
Tall ships from the east, lean barges from Thard,
if there’s coin on the table, no deal is too hard.

Golotha —
gold in your crooked veins.
Golotha —
you drink other cities’ pains.
Golotha —
every dock and road and gate
sells a child, a prayer, or a rival’s fate.

Oh, praise to the games in Golotha’s loud ring,
where the crowd gets drunk and the nobles sing.
There’s wine, there’s meat, there’s a lady’s smile,
and the beasts die slow to fill up the aisle.

Golotha —
cheers in the blood-red sand.
Golotha —
steel in a stranger’s hand.
Golotha —
rape and murder sold as cheer,
you call it sport, we call it fear.

In Golotha, the king has no say!
In Golotha, he’s glad to stay away.
In Golotha, the priests pour wine!
In Golotha, they drink your spine.
In Golotha, the markets shine!
In Golotha, your soul’s the fine.
In Golotha, the nights are long!
In Golotha, right dies young and wrong grows strong.

Golotha —
foul is your reeking breath.
Golotha —
you make your tithe to death.
Golotha —
rotting heart in a velvet kit,
Golotha —
you beautiful, cursed piece of shit.

And curse your streets with thieves for kings,
your gutters choking on forgotten things.
Your alleys bite, your shadows rot,
you break every heart you never forgot—

…but you're still my home.

  `,
  showPlaceholder: false
    },

    theMiracleMansSong: {
      title: "The Miracle Man's song",
      hidden: true,
      image: {
        src: "assets/songs/Miracle mans wagon.png",
        size: "small",
        caption: "Aylyns vagn"
      },
      lyrics: `
Come gather round, good folk and friends,
your aches and troubles all have ends!
For I have bottles, bright and fine,
with <i>Angel’s tears</i> and <i>Serpent’s wine</i>!

 Roll the wagon, ring the bell,
 miracles buy and lies we sell!
 Laugh, my friends, and lift your glass —
 hope’s a coin and dreams shall pass!

Here’s <i>Octopus Eggs</i> — a sea-born brew,
protects your soul and paints it blue.
One drop will make your spirit strong,
or kill you quick — it won’t take long!

 Roll the wagon, ring the bell,
 miracles buy and lies we sell!
 Laugh, my friends, and lift your glass —
 hope’s a coin and dreams shall pass!

Here’s <i>Serpent’s Blood</i> for love and cheer,
it works on fools and those sincere.
Drink once, you’ll see your true desire —
drink twice, you’ll set your house on fire!

 Roll the wagon, ring the bell,
 miracles buy and lies we sell!
 Laugh, my friends, and lift your glass —
 hope’s a coin and dreams shall pass!

Now Joreth frowns, he guards the door,
he thinks I’ll damn us, rich and poor.
But what’s a sin when coins are gold?
A tale retold is twice as sold!

 Roll the wagon, ring the bell,
 miracles buy and lies we sell!
 Laugh, my friends, and lift your glass —
 hope’s a coin and dreams shall pass!

So drink to fools, and saints, and lies,
to merchant kings and beggar’s eyes.
For all who live must sell or pray,
and both need hope to earn their pay.

 Roll the wagon, ring the bell,
 miracles buy and lies we sell!
 Laugh, my friends, the night won’t last —
 dreams are gold when truth’s gone past! `,
  showPlaceholder: false
    },

    byTheAncientStone: {
      title: "By the ancient stone",
      hidden: true,
      lyrics: `
By the ancient stone I stand,
names long lost to time and sand.
Many fell and many rose,
still the stone remembers those.

 Sing for those who never came,
 sing for those who went away.
 The stone keeps watch, the years recall,
 so long as the song shall play.

Grass has grown where voices fade,
wind repeats what hearts once made.
Someone laughed and someone cried,
nothing lost, though all have died.

 Sing for those who never came,
 sing for those who went away.
 The stone keeps watch, the years recall,
 so long as the song shall play.

Oak leans low, the moss has grown,
over marks the hand has shown.
No one knows whose heart or hand,
carved the runes that still withstand.

 Sing for those who never came,
 sing for those who went away.
 The stone keeps watch, the years recall,
 so long as the song shall play.

When my voice has turned to rest,
carry still the song’s request.
Lay my hand where names have lain,
and let my silence sing again.

 Sing for those who never came,
 sing for those who went away.
 The stone keeps watch, the years recall,
 so long as the song shall play.`,
  showPlaceholder: false
    },

    downByYael: {
      title: "Down by Yeal",
      hidden: true,
      image: {
        src: "assets/songs/Marvae_river_photoQ.png",
        size: "small",
        caption: "Marvae på båttur i Yaels sken"
      },
      lyrics: `
Wine in the glass and the Gods at the gate,
words like silk and the evening late.
She speaks of freedom, he speaks of will,
the river waits, the heart stands still.

Laughter soft as a blade through lace,
truth in the turn of a senator’s face.
He hides intent in a poet’s tone,
she answers sweetly, and cuts to bone.

 Float, Yael, under lantern’s flame,
 carry their vows without a name.
 Two voices joined, then drift apart,
 the water keeps what left their heart.

Her hand on his, a spark, a dare,
truth disguised as temple air.
He thought to lead, she drew the line —
the hunter caught in his own design.

Lanterns fade and the night breathes deep,
promises wake where the faithful sleep.
One glance of grace, one borrowed sin —
the river turns, and draws them in.

 Float, Yael, under lantern’s flame,
 carry their vows without a name.
 Two voices joined, then drift apart,
 the water keeps what left their heart.

The bed is warm, the glass is dry,
her scent still speaks where words deny.

 Float, Yael, through the city’s light,
 cradle their secret out of sight.
 The glass is cold, the dream is done
 — dawn will comfort only one. 
  `,
  showPlaceholder: false
    },

    landingAtSirion: {
      title: "Landing at Sirion",
      hidden: true,
      lyrics: `
Hey ho — we row,
to far Sirion we go.
Let’s storm the fort,
keep battle short,
make ready sword and bow.

 Raise shields and strike the bay,
 for glory lights our way.
 Steel in the tide,
 men at our side —
 we’ll carve our names today.

They made no stand,
a foul robber’s band.
Just death in store
here on the shore
as they fell beneath our hand.

 Raise shields, though none give sway,
 the foe just ran away.
 No clash of ranks,
 no honoured thanks —
 yet still we sing the day.

There was no fight
against our trained might.
We came to win,
cut out their sin —
it was done before the night.

 Raise shields, though truth gives way,
 there’s little pride to pay.
 The dead lie lone,
 no glory shown —
 but still we march today.

A man of theft
on horseback left,
a robber’s chest
tight to his breast —
the last of scum bereft.

Beyond the hill,
a sudden kill —
when Ilvir’s Hru
the bandit slew.

 Raise shields — though shadows say
 that honour slipped away.
 No songs of might,
 no righteous fight —
 no honour gained on this day.

We claimed the chest,
as law requests.
No hero’s prize,
no gleaming rise —
just duty at its best.

 Raise shields… though none obey.
 The sea took more than pay.
 Steel stayed unstained,
 just sorrow gained —
 no honour gained on this day.
  `,
  showPlaceholder: false
    },

    iracu: {
      title: "Iracu",
      hidden: true,
      image: {
        src: "assets/songs/Iracu.png",
        size: "medium",
        caption: "Fenralf guidar Keri genom Iracu"
      },
      lyrics: `
He jumped from the roof like the stone knew his name,
dust on his sleeves, but his feet had no weight.
“Walk with me, daughter of two divided skies,
time is a rumor here, only the mountain decides.”

We stepped through the door and the daylight broke off,
sound became pressure, the silence grew soft.
Tunnels like memories folded in rings,
iron-veined arches and long-forgotten kings.

 Stone remembers, stone does not lie,
 under the mountain you learn to see.
 What you have been and what you might be,
 in the memory of Iracu.

Water fell down in silver-threaded veils,
bridges that never should carry the frail.
Runes in the walls like roots in the bone,
stories that woke when he spoke to the stone.

Sometimes he walked as a rag-wearing shade,
sometimes a prince in a dwarven-made raiment.
I did not flinch when his years fell away –
down here such changes are simple as rain.

 Stone remembers, stone does not lie,
 under the mountain you learn to see.
 What you have been and what you might be,
 in the memory of Iracu.

A forest of mirrors grew out of the dark,
no torch, no flame, but a cold inner spark.
Faces I was, could be, should have been,
hung in the black like unfinished scenes.

Walls slowly narrowed, the air became hand,
pressing my heartbeat back to the land.
“Here it is simple,” his voice without place,
“stone hides nothing – it only holds truth in its face.”

 Stone remembers, stone does not lie,
 under the mountain you learn to see.
 What you have been and what you must be,
 in the memory of Iracu.

Daughter of two worlds, lay down your fear,
lapis meminit, I hold you here.
All that you carry, all that you flee,
here in the dark, now you will see.

 Stone remembers, and so do you,
 Stone remembers, the hand on your eyes has made you true.
 When you walk out in the falling snow,
 Iracu walks with you where you go.
  `,
  showPlaceholder: false
    },

    vintervaven: {
      title: "Vintervävens Ljus",
      hidden: true,
      lyrics: `
Snön föll tyst mot vägens sten,
nattens luft var kall och ren.
Lärlingar kom med lågor små,
som stjärnor födda av deras vrå.

 Och ljusen bar vi, ett efter ett,
 genom mörkret som aldrig helt släckt.
 I vinterns väv där skuggor bor,
 går andars steg så nära i jord.

Doft av kryddor, varmt och sött,
vinkruset glimmar djupt och rött.
Ett bröd som nyss tog form i ugn
delas tyst — som nattens lugn.

 Och ljusen bar vi, ett efter ett,
 genom mörkret som aldrig helt släckt.
 I vinterns väv där skuggor bor,
 går andars steg så nära i jord.

Vi sjöng om minnen, sjöng om tröst,
om dem som gick men bor i röst.
Och vinden svarade mjukt som snö,
i tonfall ingen människa gör.

 Och ljusen bar vi, ett efter ett,
 genom mörkret som aldrig helt släckt.
 I vinterns väv där skuggor bor,
 går andars steg så nära i jord.

Så håll din låga stilla kvar,
för natten minns var hjärtan var.
Och mellan världar, tunn som is,
står någon tyst och vakar vis.

 Och ljusen bar vi, ett efter ett,
 genom mörkret som aldrig helt släckt.
 När väven öppnas, när allt blir stort —
 då går de med oss hem från port.
  `,
  showPlaceholder: false
    },

    kindledSteps: {
      title: "Night of kindled steps",
      hidden: true,
      lyrics: `
Cold on the stones lies the winter night,
soft is the breath of the candlelight.
Young hands carry the flames ahead,
guiding the path where the old year bled.

 Step by step, the shadows sway,
 between the worlds we walk this way.
 Kindled lights in a drifting line,
 call to the ones who cross the spine.

Wine on the air, warm spice and smoke,
bread from the oven, still whisper-soaked.
Voices hush as the lamps grow thin,
for winter listens from deep within.

 Step by step, the night grows near,
 every flame a tethered prayer.
 Kindled lights where the cold winds roam,
 calling the wandering spirits home.

Lanterns tremble, but none go out,
names of the lost are breathed without shout.
Footfalls echo on frost-veiled ground,
as unseen steps move all around.

 Step by step, our breaths align,
 with those returning down the spine.
 Kindled lights as the veil grows thin,
 mark where the silent ones walk in.

Hold the flame — the night is listening.
Hold the flame — the dark is glistening.
Hold the flame — for all who roam.
Hold the flame — and guide them home.

 Step by step in a circling line,
 past and present intertwine.
 Kindled lights through the longest night—
 and none walk alone in the turning light.

  `,
  showPlaceholder: false
    },

    twoFaces: {
      title: "Two faces of the same flame",
      hidden: true,
      lyrics: `
I walk in daylight, measured step,
a blade held still beneath my breath.
I weigh the cost of every choice,
and keep the steel inside my voice.

I build my walls with steady hands,
I chart my course through broken lands.
But still I feel a shadow lean —
the echo of what I have been.

(I am the night you hide behind,
the hunger you refuse to name.
I am the truth beneath your spine,
the one who bleeds but feels no shame.)

(You walk the lines you think you choose,
I walk the paths you dare not use.
Two steps behind you, always near,
a darker heart that beats in fear — and fire.)

 Two faces of the same flame,
 one whisper soft, one calling your name.
 Two hearts in a single chest,
 one finds peace, one won’t rest.

 Mirror bright in a world undone,
 shadow-bound but never alone —
 two faces, one burning soul,
 Keri… Raven… both in control.

I carry duty like a crown,
I hold my grief and never drown.
But sometimes in the silent hours,
your voice grows sharp, your courage louder.

You push me where I will not go,
to truths I fear but need to know.
And though your fire scorches mine,
I rise again — our fates entwined.

(I am the blade you turn aside,
the reckless will you try to bind.
But every time your courage breaks,
I am the breath your spirit takes.)

(I am your fury when you fall,
the stronger voice beneath it all.
You call me darkness, but I’ve grown —
I am the part that makes you whole.)

 Two faces of the same flame,
 one whisper soft, one calling your name.
 Two hearts in a single chest,
 one fights calm, one fights blessed.

 Mirror bright in a world undone,
 shadow-bound but never alone —
 two faces, one burning soul,
 Keri… Raven… 

And in the turning of the night,
when fear and longing share the light —
I see the truth beneath the skin:
you are me and I am in

every choice and every breath,
every wound and every death.
Shadow, mind, and flame agreed —
we walk as one when one must lead.

 Two faces of the same flame,
 neither wrong and neither to blame.
 Morning comes and the mirror’s whole—
 Keri… Raven… one single soul.
  `,
  showPlaceholder: false
    },

    theDarkYou: {
      title: "I wear the Dark You",
      hidden: true,
      lyrics: `
You walk in daylight,
pretending not to hear me.
Every choice you make
bleeds through my hands first.

You call me shadow —
as if you were ever brighter.
You call me danger —
as if I haven’t kept you safe.

I burn the fears
you don’t dare name.
I bear the wounds
you pretend were fate.

You think you lead,
but I take the steps you won’t.
You hold the blade —
but I choose where it strikes.

 I wear the dark you hide,
 I walk the path you fear.
 You breathe because I bleed,
 you stand because I fall.

 Call me monster,
 call me sin —
 but when the night comes
 you wear my skin.

You love your mirrors —
all angles, all poise.
But I am the mirror
your only choice.

I know the hungers
you whisper away.
I am the truth
you blame on nightmares.

When you pretend to be whole,
I laugh.
When you pretend not to want,
I ache.

You move like fire in a cage,
and still you ask me
why I roar.

 I wear the dark you hide,
 I walk the path you fear.
 You breathe because I bleed,
 you stand because I fall.

 Call me danger,
 call me wrong —
 but all your strength
 was mine all along.

You feel me
when your breath stops.
You hear me
when your walls break.
You fear me —
but your fear
is the last thing
that still lives.

 I wear the dark you hide,
 and still you call me other.
 But you will learn —
 there is no “you” without me.

Shadow sister,
mirror twin —
when night opens,
you walk in my skin.

 I wear the dark you hide,
 I walk the path you fear.
 You breathe because I bleed,
 you stand because I fall.

 Call me danger,
 call me wrong —
 but all your strength
 was mine all along.

 Call me danger,
 call me wrong —
 but all your strength
 was mine all along.

 Call me danger,
 call me wrong —
 but all your strength
 was mine all along.
  `,
  showPlaceholder: false
    },

    ranger: {
      title: "The Ranger and the Dozen",
      hidden: true,
      lyrics: `
When he first went out a-hunting
He was scarcely seventeen,
Saw one Gargun in the bracken —
Turned the color of sour cream.

But he loosed one trembling arrow,
Prayed it flew the proper way —
When the bushes stopped their shouting
There were three more dead that day.

 Hey now — count them in the heather!
 One and two and three and four!
 If you spot him near the treeline
 You’ll not fear the woods no more!

 Hey now — buckle up the leather!
 Let the drum and tankard run!
 Started shaking at a single —
 Ended laughing at a dozen!

Now he walks the ridge at sunrise
With a Gargun-hide for belt,
Says it’s softer than it looks —
(Though it smells like something else.)

He has boots stitched from their fingers,
And a drinking cup of bone —
Says it keeps the ale from souring
(But he drinks it all alone.)

 Hey now — count them in the heather!
 One and two and three and four!
 If you spot him near the treeline
 You’ll not fear the woods no more!

 Hey now — buckle up the leather!
 Let the drum and tankard run!
 Started shaking at a single —
 Ended laughing at a dozen!

When he’s near, the widows gather,
“Just for safety,” so they claim —
Bring him bread and bring him butter,
Call him brave and call his name.

He just nods and eats in silence,
Counts his arrows, sharp and straight —
If you ask him what he’s thinking
He’ll say, “Wind. And spoor. And weight.”

[laughter]

First it’s one behind a birch tree.
Then it’s three along a run.
Then you blink and count again —
And you’ve somehow killed a dozen.

Well, one bold lass from lower market
Said, “I’ll warm that hunter’s den.”
Took a basket, took her courage,
Knocked at dusk and entered in.

The Ranger smiled — a fearsome honor —
Set a pot upon the flame:
“Sit ye down, I’ve stew a-brewing,
Best you’ve ever tasted, dame.”

She took a bite… grew pale and thoughtful…
“Game?” she asked, with hopeful grin.
He just winked and tapped the kettle —
“Gargun. Tender. Let’s begin.”

 Hey now — count them in the heather!
 One and two and three and four!
 If you sup with Seren’s Ranger
 Lock your pantry, bar the door!

 Hey now — drink and laugh together!
 Let the tavern rafters ring!
 He makes belts and cups and stew pots —
 Out of nearly anything!,
  showPlaceholder: false
  `
    },



    whoAreWe: {
      title: "Who are we?",
      hidden: true,
      lyrics: `
Who am I… when no one’s there to see?
A shadow in a borrowed symmetry…

Who are you… when silence strips the lie?
A fracture in the glass you hide behind…

I built a name from fragile bones
A voice that never felt like home

You stitched a mask with careful hands
Then called it truth so they’d understand

I did what I had to do to survive

You did what you had to—just not to be alive

If I peel back every layer…

Will there be anything there?

Or just echoes in the air…

Who am I?
Who are you?
Who are we when we split in two?

Are we truth?
Are we lies?
Are we just two alibis?

I don’t know where I end—

Or where you begin—

Tell me who we are within

I am the voice you bury deep
The restless pulse you never keep

You’re just the doubt I can’t erase
A ghost that wears my face

No—I’m the truth you locked away

Then why won’t you just fade?!

Every crack is getting clearer

Every step—you pull me nearer

To the edge of who we are…

Who am I?
Who are you?
Who are we when we split in two?

Are we whole?
Are we torn?
Are we something never born?

I feel you under my skin—

I’ve always been within—

There’s no line to hold us in

If I lose control—

You were never in control

If I let you stay—

I was never far away

I am you / You are me
Set me free / Let me be

Say it—
Say it—

…who are we?

We are one
We are two
We are everything we knew

We are cracks
We are seams
We are more than what we seem

I was never just your fear

I was never truly here

We are finally…
…clear

Who am I…
Who are you…
Who are we…
  `,
  showPlaceholder: false
    },

     threeCups: {
      title: "Three cups, one truth",
      hidden: true,
      lyrics: `
Step right in, don’t stand so tight,
Copper sings in morning light.
Three small cups and one small lie,
Watch my hands — or watch me lie.

Left or right, or center line,
Every choice is yours — not mine.

 Three cups down, one ball round,
 Truth is lost the moment found.
 Guess too fast, or guess too slow,
 You don’t see what wants to show.

 Three cups spin, fortunes fall,
 Luck’s a whisper, not a call.
 If you’re sure, you’ve already lost —
 Certainty is part the cost.

Watch the wrist, not just the hand,
Feel the pause — that’s where I stand.
When I linger, when I grin,
That’s not where the ball has been.

Right goes left and left goes wrong,
Center waits — not very long.
I lift two cups, empty, bare…
Still you swear it must be there.

I never said I played this fair.
I never said the prize was coin.

Some of you chase silver truths.
Some of you… are looking elsewhere.

Middle cup.
You chose it clean.
Not for gain — but in between.

I lift the cup — and what is found
Is not what rolls or makes a sound.

 Three cups still, the game undone,
 Not all victories are won.
 What you sought was never tossed —
 Some things hide to not be lost.

 Three cups gone, remember this:
 Not all wagers end in bliss.
 But once in while, if you’re precise…
 You lift a cup — and find the price.

No more bets.
The square is loud.
And I am not who I avowed.
  `,
  showPlaceholder: false
    },

    nightVisit: {
      title: "Villa Eriel night visit",
      hidden: true,
      lyrics: `
You stood inside the doorway like a memory made true
Dust and lamplight on your shoulders, rain still breathing from your coat
Every room had learned a different name since you last lived here
But your shadow knew the staircase
And my hands forgot to close

This was your house once
Now it keeps my key
Still the dark moved gently
As if it waited for us both to speak

 So lie down here beside me
 Where the old walls hear our skin
 Let the night unmake the distance
 Let the lost times loosen
 No borrowed dream, no borrowed fire
 Only us, and what survives
 In the bed between your leaving and my life

You touched the frame above the window
Like you felt the grain remember
Every mark and every silence
Every winter we lived apart
I said nothing when you turned
And your eyes found mine like home
Then the room became a harbor
And I let you pull me close

No one else could know
How this house can ache
How your name still opens
Places in me time could never take

 So lie down here beside me
 Where the old walls hear our skin
 Let the night unmake the distance
 Let the lost years loosen
 No borrowed dream, no borrowed fire
 Only us, and what survives
 In the bed between your leaving and my life

I am not asking morning
To promise what it can't
I only want this nearness
Your heartbeat in my hands
Your breath across my shoulder
Your teeth against my mouth
The way the dark grows hungry
 - When no-one runs away

 So lie down here beside me
 Let the floorboards keep the sound
 Of the house that held your younger days
 And holds us even now

 No tale we read to hide inside
 No painted stars above
 Only your body, my body
 And one unguarded love

You came back to your old rooms
And found me in the night
Then the house grew still around us
As we turned our hearts to light
  `,
  showPlaceholder: false
    },

    stomp: {
      title: "Stomp the Year awake",
      hidden: true,
      lyrics: `
The frost is near, the sun hangs low,
Blue on our hands where the sweet grapes go,
Old earth wakes where the roots still run,
We work till night — but the day’s not done.

<i>Not done yet!</i>

 Stomp, stomp, the year awake,
 Let the old vines breathe and break,
 Feet in purple, hands in red,
 Drink tomorrow what we’ve bled!

Baskets full and laughter wide,
Juice like gems at the lantern’s side,
Ten long years the casks stood dry,
Now hear the yard breathe, hear it sigh.

<i>Hear it breathe!</i>

 Stomp, stomp, the year awake,
 Let the old vines breathe and break,
 Sing it loud, don’t mind the stain,
 This house remembers joy again!

Wine tastes best when earned by feet,
Not by prayers or polished seats,
Curse the flies and bless the press—
Spill it, laugh, and call it blessed!

 Stomp, stomp, the year awake,
 Must to barrel, hope to stake,
 Red as memory, dark as cheer,
 Villa Eriel starts again this year!
  `,
  showPlaceholder: false
    },

    navehLithurgic: {
      title: "Naveh (lithurgic)",
      hidden: true,
      lyrics: `
O Naveh, Lord of Eternal Night,  
Whose ebon streets of Kamil know no dawn,  
Thief of Heaven, Master of the Unseen Blade,  
Merciless Deliverer of Sorrow and Silence,  
We bow before Thy veil of shadow.

Hear us, O Tongue of all Deceit,  
Bringer of Nightmares that walk the waking world,  
Father of the Gytevesha, the unseen host,  
Who moves where light dares not tread.

 In the darkness we serve Thee,  
 In the whisper we honor Thee,  
 In the swift and silent stroke we glorify Thee.  
 Shadow take us. Silence claim us. Naveh commands.

Guide our hands in the hour of the knife,  
Grant us the cloak of Thy perfect shadow,  
Teach us the lies that become truth,  
And the truths that slay more surely than steel.

O Naveh, whose gaze pierces the soul,  
Accept this our offering of breath and blood...

 As the candle dies, so dies the light of our enemies.  
 As the moon hides her face, so hide we from all eyes but Thine.  
 In the name of the Thief of Heaven,  
 In the silence between heartbeats,  
 We are Thine, now and unto the final darkness.

Shadow take us... Silence claim us... Naveh commands...
  `,
  showPlaceholder: false
    },

    wakeOfLado: {
      title: "The wake of Lado",
      hidden: true,
      lyrics: `
The sea remembers every name,
Each careless word, each borrowed flame.
What’s spoken loud on salted air
Is weighed by more than mortal care.

 Lado hears the wake we make,
 Oar and breath, the vow, the break.
 Not all debts are paid in blood—
 Some are claimed by tide and flood.

You laughed at craft you could not read,
At quiet strength, at patient deed.
But wood and rope and watching deep
Keep better count than men who sleep.

 Lado hears the wake we leave,
 Truth beneath what we believe.
 Mock the helm, or mock the hand—
 The sea will always understand.

No curse was cast, no blade was drawn,
No god was begged, no law was sworn.
You spoke—and something else replied,
As keel and current chose a side.

 Lado keeps what words invite,
 In green of depth, in salt of night.
 Sail in grace, or sail in fear—
 The sea is always listening here.

She did not hear.
She did not strike.

But something did.
  `,
  showPlaceholder: false
    },

    scent: {
      title: "The scent of memory",
      hidden: true,
      lyrics: `
The boat is still, the morning sighs,
Tar and salt and waking skies.
But something threads the air between—
A spark unseen, a scent I’ve known.

You step inside with dampened hair,
Clean linen, water, honest care.
And yet my pulse forgets its place,
As if I’ve met another face.

I know your walk, I know your hands,
Your voice, your scars, your careful stands—
So why does something tilt the room
When you draw near me in this bloom?

 Oh stay… no—wait—don’t move at all,
 The air remembers what I can’t recall.
 This isn’t you, and yet it is,
 A borrowed fire, a perfumed kiss.

You smile, unsure, say “Thank you, milady,”
As if that word could keep me steady.
I step too close, my voice goes soft,
I breathe you in—far more than oft.

“That scent,” I say, “it suits you well…”
The words escape before the spell
Lets me recall whose hands would brew
A thing that smells like want made true.

You say: “Aylyn gave it me—
To keep Serenima far from me.”

I laugh—then stop—then understand.
Oh gods forgive that clever hand.

 Go now—no, run—wash it away,
 Before this turns to words we’d say.
 It’s not your fault, nor mine, I swear,
 Just alchemy in careless air.

You blink, confused, a touch abashed,
Obedient as the spell is dashed.
The door shuts fast, the moment breaks,
My heart slows down… then gently aches.

I sit alone, the papers blur,
And then I laugh—soft, warm, unsure.

Aylyn… you eternal fool,
You taught me something breaking rule:

Even truth can wear perfume.
 `,
  showPlaceholder: false
    },

    natureCall: {
      title: "Nature call",
      hidden: true,
      lyrics: `
Ah—
Ah-ah—
Mm—

Ah—
Ah-ah—
Mm—

This land is beautiful.
This land is quiet.
This land remembers.

Aaa-uo-aa-heei…
Ooo-aah-ooo-hai…
Eij-áh-eij-áh-hoh…
Uo-uá-uoh-áhaa…

This land is worth fighting for.

Not for conquest—
For keeping.

A new — home.
Ancient heart.

He-ya no…
He-ya no-o…
Serania…
Serenia…

We belong to the land.
The land does not belong to us.
  `,
  showPlaceholder: false
    },

    byria: {
      title: "The fields of Byria",
      hidden: true,
      lyrics: `
Byria blooms where chaos slept,
peace is sown and borders kept.
Order reigns by gentle hand,
fruit grows rich in tempered land.

 We pull.
 We bend.
 We work the land.

No war-song cries, no lords at feud,
justice calm and laws are good.
Mothers rule with measured sight,
every wrong is set to right.

 We pull.
 We bend.
 We work the land.

Hunger fades, the roads are safe,
wine is strong and bread is baked.
All have place and all have role,
every life is made whole.

 We pull.
 We bend.
 We work the land.

No blade to lift.
No word to say.
No name but hands.
No night but day.

Those who falter, those who stray,
are kept apart and taught the way.
Harmony must not be torn,
better stone than seeds of scorn.

 We pull.
 We bend.
 We work the land.

Byria stands as others fall,
proof that peace can govern all.
A realm made clean, serene, and strong,
where nothing now can go so wrong.

 We pull.
 We bend.
 We… work… the land.
  `,
  showPlaceholder: false
    },

    lines: {
      title: "Lines that do not show",
      hidden: true,
      lyrics: `
I learned the words, I held the angles
Every pause where it belonged
The world replied when I was careful
When I did it right, not strong

I loved the feeling of precision
How the pattern closed its seam
But every answer left a hollow
Where the why had never been

They spoke of will, they spoke of structure
None could tell me what it meant
When the world replied differently
Than the rules I had been sent

 I am not here to copy knowledge
 I am not here to keep the score
 I am listening for the moment
 When the world leans in once more

 Not with words and not with gestures
 Not with symbols carved in stone
 But with weight, and pull, and motion
 That I never learned alone

I saw the table before I touched it
Not a tool, but something true
It did not speak, it did not promise
It just waited to be used

I asked no god to bless my pathway
I did not kneel, I did not plead
I only said: this isn’t living
Tracing answers I don’t need

 I am not here to copy knowledge
 I am not here to play it safe
 I am listening for the moment
 When the world forgets its shape

 Not a lesson, not a doctrine
 Not a gift I must obey
 Just a choice that stays a choice
 Even when it cuts away

I saw the weave before it moved
Already bent, already drawn
Pulled toward something open-eyed
That did not act — but changed the ground

I reached — not gently, not correctly
I took what never asked my name
And when I threw, the world replied
Not with power — but with change

 So mark me where it will not show
 Lay the metal under skin
 Let it speak when I am moving
 Let it burn when I pull thin

 Not a sign for those who watch me
 Not a claim, and not a vow
 Only this: when I disturb it
 The world will answer now

I do not shine
I do not glow
Until the weave
Is forced to show
  `,
  showPlaceholder: false
    },

    openHand: {
      title: "Hymn of the Open Hand",
      hidden: true,
      lyrics: `
We do not kneel for mercy given
Nor beg forgiveness for our flame
You ask no purity of spirit
You only ask us speak your name

You meet us where the wanting starts
Where hunger learns to dress as need
No sin is named, no debt denied
Only the price we chose to heed

 Halea — Lady of the Moment
 Keeper of the unkept vow
 What we desire, we offer freely
 What we take, we claim it now

You teach no law, you draw no border
Between the noble and the base
You show us mirrors, not commandments
And ask us only what we face

The hand that takes is not condemned
The mouth that tastes is not unclean
You weigh us only by our honesty
In what we want — and what we mean

 Halea — Queen of Quiet Bargains
 Every word precisely heard
 Nothing taken without its echo
 Nothing lost without a word

Blessed the stolen breath at twilight
Blessed the touch we cannot keep
Blessed the vow we never uttered
And the longing laid to sleep

For every pleasure leaves a shadow
And every shadow leaves a mark
You do not hide it from our seeing
You only teach us not to look away

 Halea — Empress robed in longing
 Gold and crimson, debt and grace
 We enter knowing what we offer
 We depart without a trace

Not redeemed and not forgiven
Only claimed the way we stand
Bound by nothing but our choosing
Sealed by bargain — open hand

Those who call us fools and hollow
Fear the cost they dare not name
Better debt than borrowed virtue
Better truth than borrowed shame

You keep the ledgers of the willing
Not in ink, but pulse and breath
Every bargain ends in silence
Every silence tastes of depth

 Halea — Mistress of the Moment
 Neither cruel nor kind nor fair
 You do not promise us forever
 Only now — and we are there
  `,
  showPlaceholder: false
    },

    balance: {
      title: "Balance",
      hidden: true,
      lyrics: `
Frost breaks under careful steps
Not loud enough to wake the dark
Breath turns white, then disappears
Everything does
Except what’s at play

The river runs beneath the ice
Not frozen
Not free
I stand between
The same is true for me

This was never in the plan
Plans belong to tables and light
This is what remains
After the decision learned to breathe

Names I do not know yet
Are already leaning on my voice
Choices will be made in my shadow
But spoken in my name

 It is not fear that weighs on me
 It is knowing this continues if I turn away
 The world does not pause for doubt
 It only asks for balance

Bare hand on the metal rail
Cold enough to cut through thought
It does its work  
The pain is precise
I can measure it

Bare hand on the metal rail
Cold enough to cut through thought
It’s what I need 
The pain is precise
I treasure it

There is no version of this
That lets me remain untouched
No path back
Only follow-through

 It is not fear that holds me still
 It is knowing this outlives my choice
 I do not walk back with relief
 Only balance

The house waits
Because it must
And so do I
  `,
  showPlaceholder: false
    },

    offer: {
      title: "We took the offer",
      hidden: true,
      lyrics: `
We were counted where we came from
Measured short of what we need
Every season owed the same thing
Work for less than what you reap

Then the word came, plain and simple
No fine print, no gilded tone
Land that answers to your labor
If you dare to make it home

 So we took the offer given
 Not because it was secure
 But because it named the silence
 And did not pretend a cure

No one promised us a harvest
No one swore the ground was kind
Only this: if we endure it
What is built will still be mine

Some had tools, and some had nothing
Some had names they left behind
Some brought skills they never used here
Some brought ghosts they couldn’t bind

There are laws, but few are written
There are lines, but not yet drawn
You can feel the land is watching
Asking what you’ll stand upon

 So we took the offer standing
 In the cold, without applause
 Knowing work would be the measure
 Knowing failure would be ours

No redemption, no forgetting
Just a place to start again
Where the ground does not remember
What we were before we came

If this breaks us, it breaks clean
If it holds, it holds by hand
Nothing here is owed or sacred
Until we make it stand

 Now we take the days as given
 Fence by fence and furrowed row
 What we build may not be gentle
 But it will be what we know

Let the old roads keep their stories
Let them say we were unwise
We did not come here for mercy
We came here to make it rise

No songs were written for this moment
No witness but the land
Only breath
And weight
And calloused hands
  `,
  showPlaceholder: false
    },

    furrow: {
      title: "The furrow Blessing",
      hidden: true,
      lyrics: `
Turn the soil and break the clay

Peoni bless the growing day

Lay the seed in patient rows

Peoni guard the life that grows

Rain above and root below

Peoni make the green things grow

Stone and thorn we clear away

Peoni guide the patient day

Hands grow tired, backs bend low

Peoni make the green things grow

Sun will fall and shadows creep

Peoni watch the furrows sleep

When the spring returns once more

Peoni fill the fields with store
  `,
  showPlaceholder: false
    },

    khazKhur: {
      title: "Khaz Khur Razan",
      hidden: true,
      lyrics: `
Nor zarik zhor.
Khaz zhor.
Zarik — dur.
Nor razan.

Khaz tal urun.
Khur.
Tal mor.
Nor zhag.

Zarik va khaz — dur.
Zarik va khaz — nor.
Nor dur,
Khaz khur.

Zarik khur.
Khaz urun.
Zarik zhorin.
Khaz razan gor.

Khur khaz.
Khaz razan gor.
Nor zhor,
Dur khur.

Khur khaz.
Nor khurim.
Urun end,
Khaz dur.

Zarik-khur zhag.
Khaz — nor.
Razan bendor
Nor zhorum.

Zhor zarik
Khurden nor.
Tal khaz
Tam razan.

Khaz zhor form.
Khaz zhor den.
Zarik — dur
Mor-dur.

Khur khaz.
Khaz zhorin.
Zarik dur,
Nor zhor.

Khur khaz.
Khaz khur end.
Zhor dur
Khaz zhor.

<hr>

<h3>Engelsk variant</h3>

<iframe src="https://suno.com/embed/a2a1ad4f-0016-4c58-93f0-34b1e44ecaf9" width="760" height="240" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"><a href="https://suno.com/song/a2a1ad4f-0016-4c58-93f0-34b1e44ecaf9">Listen on Suno</a></iframe>

<i>
We do not follow gold.
We follow the stone.
Gold is a result,
Not a direction.

The stone speaks first.
We listen.
Its voice is slow,
But it does not lie.

Sometimes stone and gold agree.
Sometimes they part.
When they part,
We stay with the stone.

Gold is patient.
Stone is older.
Gold waits to be found.
Stone decides where we walk.

Trust the stone.
It leads you right.
Not to what you seek,
But to what must be found.

Trust the stone.
It does not hurry.
In the end,
It gives what it intends.

A vein can deceive.
The stone cannot.
It bends the path
Away from hunger.

Those who chase the shine
Lose the tunnel.
Those who hear the stone
Reach the deep.

The stone wants shape.
The stone wants order.
Gold is only
What remains.

Trust the stone.
Follow its will.
You will find gold,
But not as a goal.

Trust the stone.
It knows the end.
You will find
What the stone wants found.</i>

  `,
  showPlaceholder: false
    },

    harvest: {
      title: "Harvest",
      hidden: true,
      lyrics: `
Across the fields of Sehrennia
The cut grass rides the breeze
And every cart in Sirion
Comes singing through the leaves
The fork and rake go flashing
The good earth fills the air
And laughter runs like river light
Through braids and sun-browned hair

Lift high, lift high, the summer made
Before the dark can fall
Bind gold from root to rafters
Bring plenty home for all

 So gather, gather, all ye hands
 Bring meadow, bloom, and grain
 Let every road to Sirion
 Be bright with song again
 And where the wagons wander slow
 Let faithful hearts be known
 For in the time of harvest
 No soul should stand alone

The wheel rims creak at evening
The swallows wheel and dive
A piper on the haystack top
Keeps every step alive
The shy ones trade their glances
The bold ones dare a tune
And lantern fire begins to wake
Beneath the rising moon

Lift high, lift high, the fragrant load
Till stars look through the blue
The barn doors wait with open beams
For all our labor true

 So gather, gather, all ye hands
 Bring meadow, bloom, and grain
 Let every road to Sirion
 Be bright with song again
 And where the wagons wander slow
 Let faithful hearts be known
 For in the time of harvest
 No soul should stand alone

When daylight thins to amber
And the last cart finds the yard
The old songs meet the new ones
In the keeping of the bards
A cup is raised for seedtime
A cup for weather kind
A cup for those beside us now
And those we bear in mind

There by the stacked sweet meadow
Where clover scents the night
A hand once brushed another hand
And neither drew from sight
No oath was sworn in thunder
No crown was set above
Just hay, and stars, and quiet breath
And the first brave word of love

 So gather, gather, all ye hands
 Bring meadow, bloom, and grain
 Let every road to Sirion
 Be bright with song again
 And where the wagons wander slow
 Let faithful hearts be known
 For in the time of harvest
 No soul should stand alone

Now sleep, O fields of Sehrennia
Your wealth is safely stored
And may the coming winter
Find every table poured
Till spring returns to wake you
We keep this blessing strong
Serenia holds the harvest
And Keri keeps the song
  `,
  showPlaceholder: false
    },

    fallenKing: {
      title: "Fallen King",
      hidden: true,
      lyrics: `
He rode with fire in his veins
Toward the walls of Serenia
Steel and oath in battle lines
Certain of euphoria
But pride can turn the tide of fate
And blind the watching eye
What rose in wrath at Heaven’s gate
Returned in bitter cry

The horns were calling
The ground was shaking
Yet destiny was turning cold
In the smoke of failing light
A story carved in stone

 Fallen king, your crown lies in the dust
 Broken wings beneath the weight of trust
 You marched on Serenia’s flame
 Now history forgets your name
 Fallen king, hear the people sing
 Not of triumph — but of everything
 you lost in the night you chose to bring
 War to Serenia

The gates did not surrender
Nor did the hearts within
Keri’s roar against the offender
Against their iron will and wind
Brothers scattered on the field
Dreams undone by dawn
Every vow once sealed
Now shattered and withdrawn

The sky was burning
The ranks were breaking
And courage turned to stone
In the clash of desperate cries
He faced the truth alone

 Fallen king, your crown lies in the dust
 Broken wings beneath the weight of trust
 You marched on Serenia’s flame
 Now history forgets your name
 Fallen king, let the silence ring
 Through the ruins of your offering
 you lost in the night you chose to bring
 War to Serenia

In the quiet after thunder
He knelt upon the scarred earth
Not defeated by another
But by his own rebirth
From the ashes of ambition
From the fragments of command
He learned the cost of conquest
Written in the sand

 Fallen king, rise from the dust
 Not by power, not by trust
 Let the memory of Serenia’s stand
 Guide your heart and steady your hand
 Fallen king, though empires fall
 There is a greater crown than all
 Not forged in war or suffering
 But in the peace you bring
  `,
  showPlaceholder: false
    },







    song_stub: {
      title: "Galley Lado",
      hidden: true,
      lyrics: `
...
  `,
  showPlaceholder: false
    },

    secretSong: {
        menuTitle: "Hemlig sång",
        title: "Hemlig sång",
        hidden: true,
        blocks: [
        {
        type: "text",
        content: `Detta är en sida som går att nå via intern länk men inte syns i vänstermenyn.`
        }
        ]
    }
  },

  gallery: {
    overview: {
      menuTitle: "Översikt",
      title: "Galleri",
      text: "Här kommer omslag, karaktärsporträtt, miljöbilder och annan konceptkonst att visas."
    },
    portraits: {
      menuTitle: "Karaktärsporträtt",
      title: "Karaktärsporträtt",
      text: "Här kommer bilder av Keri, Raven och andra centrala gestalter att samlas."
    },
    places: {
      menuTitle: "Miljöer & platser",
      title: "Miljöer & platser",
      text: "Här kommer städer, vägar, rum, hus, hamnar och landskap att få visuell form."
    }
  },

  project: {
    overview: {
      menuTitle: "Översikt",
      title: "Projektet",
      text: `Serenia är ett sammanhållet projekt där roman, musik och visuell form utvecklas parallellt.
      
      Berättelsen om Keri och Raven utgör kärnan, medan musiken och bildspråket fungerar som förlängningar av samma värld – inte som tillägg, utan som andra sätt att uppleva den. 
      
      Här samlas information om vision, arbetsmetod, inspiration och hur Serenia växer fram.`,
      showPlaceholder: false
    },
    about: {
      menuTitle: "Om Serenia",
      title: "Om Serenia",
      text: `Serenia är inte byggt som en värld i efterhand.

Det är ett försök att låta berättelse, musik och estetik växa ur samma källa – där varje del bär samma tyngd, samma mörker, samma vilja att kännas verklig.

Här finns ingen tydlig gräns mellan det som sägs och det som upplevs. Det som inte får plats i orden tar form i musik, i symboler, i tystnader.

Serenia är ett samlat projekt där romanvärld, musik, bildspråk och symbolik byggs sida vid sida.`,
      showPlaceholder: false
    },
    origins: {
      menuTitle: "Ursprung",
      title: "Ursprung",
      text: `Världen som idag kallas Serenia föddes långt innan den fick sitt namn.

Den tog form vid ett bord – i samtal, i ett spel mellan två personer, i beslut som aldrig skrevs ned men som ändå blev kvar, fragmentariskt bevarade i anteckningar och minnen.

Sedan föll den i tystnad. Inte för att den var färdig, utan för att livet tog plats.

Det som återstod var fragment – namn, platser, relationer som vägrade försvinna. En rudimentär kärna, buren i första person, som vid enstaka tillfällen pockade på uppmärksamhet. Ibland fick den utrymme, oftast inte.

Men vissa saker lämnar en inte ifred.

Livet rör sig vidare, men det gör också förlusterna. När någon som borde ha varit kvar plötsligt inte längre är det, förändras vad som känns viktigt att bära vidare.

Det som tidigare kunnat vila blev något som inte längre kunde lämnas där det låg.

När arbetet togs upp igen var det inte som en fortsättning, utan som en återkomst.

Och i den återkomsten förändrades formen.

Det som en gång var spel blev berättelse.
Det som aldrig sades fick fyllas i.
De personer som aldrig funnits men som visade sig nödvändiga fick träda fram.

Det som inte fick plats i orden tog form i musik.
Det som inte gick att beskriva fick gestaltas i bild.

Serenia är inte ett avslutat verk.

Det är det som blir kvar – när något vägrar släppa taget.`,
      showPlaceholder: false
    },
    log: {
      menuTitle: "Arbetslogg",
      title: "Arbetslogg",
      text: `
      2026-03-25 - Första generationen websida för Serenia påbörjad.
      2026-03-31 - Both ends of the needle har fått Spotify & Youtube-länkar, alla texterna samt bilder från skivsläppets presentation
      2026-04-01 - Layout för tidslinjen definierad och grundläggande version av den
      
      Här kommer utvecklingsnoteringar, milstolpar och förändringar över tid att läggas in.`
    }
  }
};