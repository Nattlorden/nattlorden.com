---
privat:
---
PC:n för [[CinameGrande]]

Mer strippat bygge.

Samma moderkort som WhiteOne men en enklare, strömsnålare CPU med inbyggd grafik.
Mindre minne, återanvänd mekanisk hårddisk från tidigare NAS och ett kort för trådlöst nät.

ASUS ROG STRIX X570-F GAMING

AMD Ryzen 5 3400G 3.7 GHz 6MB

ASUS PCE-AC68

20 september 2026 hade vi oplanerat strömavbrott så pass allvarligt att det slog ut internetaccess via telefon också. Vid uppstart hade jag en SMART-varning på närstående hårddiskkrasch.

Då det inte gick att finna en billig och nära hämtbar SSD så fick det blir en mekanisk 2TB Toshibadrive jag låg på att installera om på. Slutligen då läge att uppdatera BIOS så den blev godkänd för Windows 11 också.

För referens på arbetsflödet:

Uppdatera BIOS via minnespinne och EZ Flash 3 Utility i BIOS  (BIOS Revision 5043 - finns en nyare att hämta vid tillfälle)

Installera Windows 10 (1607, build 14393.0 – då är stickan från Windows 10 Anniversary Update, 2016)

	Ta bort patitionerna till en enda sammanhängande

Hämta via minnespinne:

AMD:s chipsetdrivrutiner för X570

Drivrutin för AMD:s chipsetdrivrutiner för X570

Logga på det trådlösa

Kör windows update fram till Win 10 20H2. (19042.2965 )  

Ladda ner nu under översta alternativet, **Installationsassistenten för Windows 11**, och kör den.

( Armory Crate har föreslagit sig själv för installation både på Win 10 och 11 - gjorde så. )

Installera:

Webläsare - Chrome, Firefox & Brave

Synology Assistant för att komma på NASar

\ \ Thorbardin    - inloggning

\ \  Serenia  - inloggning

Koppla till microsoft-konto via min hotmail 

KeePass  (från NAS)

Photoscape X  (från Store)

Movemouse (från Store)

Photoshop CS3 - installera utan att boota om.  Lägg Photoshop och serial från subfolder istället för den installerade i programfoldern


winget install --id Git.Git -e

winget install --id OpenJS.NodeJS.LTS -e

winget install --id Python.Python.3.14 -e

winget install --id Microsoft.VisualStudioCode -e


npm install -g @doist/todoist-cli

td auth login
