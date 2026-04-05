const contentSV = {
  garden: {
    about: {
      menuTitle: "Översikt",
      title: "Trädgården",
      text: `Det här är platsen där trädgården får existera både som helhet och i sina delar.

Inte bara som färdiga rabatter och lyckade säsonger, utan också som struktur, försök, omtag och sådant som tog längre tid än väntat. Här kan det få finnas både växter, idéer, materialval, missräkningar och sådant som till sist faktiskt fungerade.

Tanken är inte att låtsas att allt är färdigt. Tanken är att samla det som växer, det som planeras och det som gör platsen till något mer än bara mark runt ett hus.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Allmänna noteringar",
      text: `Här kan övergripande tankar om trädgårdens riktning samlas.

Exempelvis:
- vad som fungerar bäst på platsen
- vad som kräver för mycket arbete
- vilka färgskalor eller uttryck som känns rätt
- vad som skall vara prydnad, nytta eller bådadera
- vad som behöver flyttas, glesas ur eller få mer utrymme`,
      showPlaceholder: true
    }
  },

  rhododendron: {
    about: {
      menuTitle: "Om",
      title: "Rhododendron",
      text: `Rhododendron är inte växter för den vårdslöse.

De kräver sin jord, sin fuktbalans och sin placering, men när de väl trivs ger de något som få andra buskar riktigt kan ersätta: volym, bladverk, blomning och en märklig blandning av tyngd och elegans. De hör till sådant i trädgården som känns mer byggt än planterat.

Här kan både sorter, placeringar, jordförbättring och egna erfarenheter samlas.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om rhododendron",
      text: `Här kan det senare läggas in:
- sorter
- blomfärg
- blomningstid
- växtläge
- jordtyp och surjordsåtgärder
- hur de klarat vinter, torka eller flytt`,
      showPlaceholder: true
    },
    cunninghamsWhite: {
  menuTitle: "Cunningham's White",
  title: "NOT. EXEMPEL ENBART: Rhododendron 'Cunningham's White'",

  blocks: [
    {
      type: "facts",
      items: [
        ["Typ", "Rhododendron"],
        ["Färg", "Vit"],
        ["Planterad", "2022"],
        ["Läge", "Halvskugga"],
        ["Jord", "Surjord"],
        ["Status", "Etablerad"]
      ]
    },

    {
      type: "text",
      content: `En av de mer klassiska vita rhododendron-sorterna, och ett rimligt val som grundväxt där man vill bygga volym utan att färgen tar över.

Den har inte det mest spektakulära uttrycket, men den är stabil, pålitlig och fungerar som en lugn bas i planteringen.`
    },

    {
      type: "image",
      src: "images/rhododendron/cunningham-2022.jpg",
      caption: "Nyplanterad, fortfarande tydligt i etableringsfas."
    },

    {
      type: "image",
      src: "images/rhododendron/cunningham-2024.jpg",
      caption: "Börjar ta form och fylla ut sin plats."
    },

    {
      type: "text",
      content: `Har klarat etableringen bättre än förväntat, men reagerar tydligt på torrare perioder. Behöver hållas jämnt fuktig snarare än blöt.

Blomningen är ren och tydlig, men det är framför allt bladmassan och strukturen som gör den användbar.`
    }
  ],
  showPlaceholder: false
}
  },

  rosor: {
    about: {
      menuTitle: "Om",
      title: "Rosor",
      text: `Rosor hör till trädgårdens mer kompromisslösa invånare.

De kan vara magnifika, men sällan helt gratis. Beskärning, stöd, sjukdomar, blomningstid och placering spelar större roll än man först vill tro. Ändå finns det få växter som så tydligt bär upp känslan av klassisk trädgård.

Här kan rosorna få finnas både som skönhet och som arbetsmaterial.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om rosor",
      text: `Här kan man senare lägga in:
- sortnamn
- färg och doft
- remonterande eller engångsblommande
- sjukdomskänslighet
- vintertålighet
- egna kommentarer om växtsätt och pålitlighet`,
      showPlaceholder: true
    }
  },

  buskar: {
    about: {
      menuTitle: "Om",
      title: "Buskar & Träd",
      text: `Det här är stommen.

Buskar och träd gör det som perenner och säsongsblommor sällan kan göra själva: de skapar höjd, rum, riktning och tyngd. De avgör ofta om trädgården känns utspridd eller sammanhållen. Fel placerade blir de ett problem. Rätt placerade gör de allt annat enklare.

Här ryms både prydnadsbuskar, mindre träd och sådant som mer handlar om struktur än blomprakt.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om buskar och träd",
      text: `Här kan det senare läggas in:
- art och sort
- höjd och bredd
- beskärningsbehov
- skuggning
- blomning eller höstfärg
- om växten fungerar som stomme, fond eller solitär`,
      showPlaceholder: true
    }
  },

  frukt: {
    about: {
      menuTitle: "Om",
      title: "Frukt & Bär",
      text: `Det ätbara har en särskild sorts värdighet i trädgården.

Här mäts inte allt i blomning utan också i skörd, tålamod och vad som faktiskt går att använda. Frukt och bär kräver ofta mer långsiktighet än man tror, men de ger något tillbaka som är konkret på ett annat sätt än prydnadsväxterna.

Här kan både buskar, träd, spaljéer och skördeerfarenheter samlas.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om frukt och bär",
      text: `Här kan man senare samla:
- sorter
- pollineringsbehov
- mognadstid
- skördeutfall
- beskärning
- fågelskador, frostproblem eller andra praktiska erfarenheter`,
      showPlaceholder: true
    }
  },

  krydd: {
    about: {
      menuTitle: "Om",
      title: "Kryddlandet",
      text: `Kryddlandet är ofta mindre högtidligt än resten av trädgården, men inte mindre viktigt.

Här får doft, smak och nytta ta större plats. En del kryddor uppför sig exemplariskt, andra breder ut sig som om de fått erövringsplaner. Det är också en del av charmen. Kryddlandet är den del av trädgården som gärna får vara både praktisk och vacker samtidigt.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om kryddlandet",
      text: `Här kan det senare läggas in:
- flerårigt eller ettårigt
- sol/skugga
- smakstyrka
- vinteröverlevnad
- hur aggressivt något sprider sig
- vad som faktiskt används, och inte bara ser trevligt ut`,
      showPlaceholder: true
    }
  },

  odling: {
    about: {
      menuTitle: "Om",
      title: "Odlingslådor",
      text: `Odlingslådor är ordning framtvingad ur verkligheten.

De gör det lättare att avgränsa jord, hålla viss kontroll på ogräs, förbättra växtläge och ge det odlade en tydlig plats. Samtidigt är de också en formfråga: hur höga de är, vad de byggs av och hur de ligger i förhållande till resten av trädgården spelar större roll än man först tror.

Här kan både konstruktion och innehåll få plats.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om odlingslådor",
      text: `Här kan man senare lägga in:
- mått
- material
- jordblandning
- vad som odlats var
- bevattning
- vad som fungerade bättre eller sämre än väntat`,
      showPlaceholder: true
    }
  },

  belysning: {
    about: {
      menuTitle: "Om",
      title: "Belysning",
      text: `Trädgårdsbelysning handlar sällan bara om att se.

Den styr blick, stämning och upplevelsen av platsen efter mörkrets inbrott. Rätt ljus kan ge lugn, djup och riktning. Fel ljus gör allt platt, hårt eller smått absurt. Här finns alltså både teknik och estetik i samma fråga.

Här kan både armaturer, placeringar och stämningsmässiga val samlas.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om belysning",
      text: `Här kan det senare samlas:
- var ljuspunkter behövs
- vilka armaturer som används
- varm eller kall ton
- effekt och riktning
- stämningsljus kontra funktionsljus
- vilka delar av trädgården som vinner på att lyftas kvällstid`,
      showPlaceholder: true
    }
  },

  japanskt: {
    about: {
      menuTitle: "Om",
      title: "Japanskt",
      text: `Det japanskt inspirerade hör till det mest lätt förstörda.

Det kräver återhållsamhet, rytm, mellanrum och en vilja att låta mindre tala starkare. När det fungerar uppstår stillhet och riktning. När det inte fungerar blir det mest en samling lösryckta markörer utan inre sammanhang.

Här kan idéer, material, former och mer lågmälda kompositioner få en egen plats.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om japanska inslag",
      text: `Här kan det senare läggas in:
- stenar
- former och linjer
- växtval
- vatten, grus eller mossa
- lanternor, trädetaljer eller avgränsningar
- hur stillhet och återhållsamhet faktiskt kan hållas kvar i utförandet`,
      showPlaceholder: true
    }
  },

  terrass: {
    about: {
      menuTitle: "Om",
      title: "Terrass",
      text: `Terrassen är inte bara en yta att ställa möbler på.

Den är övergångszonen mellan hus och trädgård, mellan det byggda och det växande. Just därför blir den ofta avgörande för hur hela platsen känns. En bra terrass binder samman. En dålig terrass ligger bara där och kräver ursäkter.

Här kan både form, material, krukor, sittplatser och anslutningen till resten av trädgården få plats.`,
      showPlaceholder: false
    },

    notes: {
      menuTitle: "Noteringar",
      title: "Noteringar om terrassen",
      text: `Här kan man senare samla:
- material och uttryck
- möblering
- krukor och planteringar
- övergång mot grönska
- belysning
- vilka delar som känns mest använda, och vilka som behöver lösas bättre`,
      showPlaceholder: true
    }
  }
};