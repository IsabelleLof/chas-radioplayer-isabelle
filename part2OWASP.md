For FWM - OWASP
Read this article about OWASP

Give answers in swedish to the following questions in a text-file in your repo:

## What is OWASP and what is its primary mission as described in the article?

OWASP står för Open Web Application Security Project och är en internationell och ideell organisation som jobbar för webbapplikationssäkerhet. Organisationen strävar mot - och erbjuder material om hur du kan få en bättre webbsäkerhet och hur du ska skydda dig mot säkerhetsrisker. Dem har en regelbundet uppdaterad rapport som heter OWASP Top 10 som beskriver de mest kritiska riskerna med en bristande säkerhet och hur du kan förebygga eller mildra potensiella risker.

## Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

En injektionsattack inträffar när opålitlig data skickas till en kodtolk genom ett formulärinmatning eller en inloggning med användarnamn/lösenord som användraren kan interagera med på websidan eller i app:en. Ett exempel på en injektionsattack är en SQL injektion attack. Hackar:en kan då skriva in ett SQL kommando istället för användarens t.ex. lösenord. För att motverka detta så kan data adminstratören validera och/eller sanera användarinskickade data och ställa in kontroller för att minimera den information en injektionsattack kan exponera.

## Explain two strategies to prevent Broken Authentication vulnerabilities.

Tvåfaktorsautentisering (2FA) och begränsa eller fördröja upprepade inloggningsförsök med hjälp av hastighetsbegränsning.

- Tvåfaktorsautentisering (2FA) är en säkerhetsmetod som kräver två olika typer av verifiering för att ge åtkomst till ett konto eller en tjänst. Det kan inkludera något användaren vet (t.ex. lösenord) och något användaren har (t.ex. mobiltelefon eller säkerhetsnyckel). 2FA ökar säkerheten genom att kräva två oberoende autentiseringsfaktorer för att bekräfta användarens identitet.

- Begränsning av inloggningsförsök, även kallad "Rate Limiting", är en säkerhetsåtgärd som sätter en gräns för hur många inloggningsförsök en användare kan göra inom en viss tidsram. Syftet är att förhindra eller minska risken för attacker där angripare försöker gissa lösenord genom att begränsa antalet tillåtna försök.

## Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

Osäker deserialisering refererar till en potentiell säkerhetsrisk i programvaruutveckling där data, som tidigare har omvandlats till en sekvens av bytes (serialiserats), återskapas (deserialiseras) av en applikation. Det blir "osäkert" när denna process inte hanteras noggrant och tillåter potentiellt skadlig kod att köras eller att data manipuleras på ett oönskat sätt.

Vid osäker deserialisering kan angriparen eller hackaren utnyttja sårbarheter i deserialiseringsmekanismen för att injicera och köra skadlig kod. Det kan leda till olika säkerhetsproblem, inklusive fjärrkörning av slumpad kod, manipulation av data, och andra former av attacker.

Utvecklare kan vara med och förhindra såna attacker genom att undvika deserialisering av data från icke-tillförlitliga källor, övervaka deserialiseringsprocesser och implementera säkerhetsåtgärder som typkontroller.

## Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

Cross-Site Scripting (XSS) är en typ av sårbarhet i webbapplikationer där angripare kan injicera och 'köra' skadlig kod, vanligtvis i form av JavaScript, på webbsidor som andra användare besöker. Detta sker när en applikation tillåter användare att infoga egna skript eller kod i webbsidor, och den infekterade koden körs då sedan i användarens webbläsare.

I artikeln nämns två förbyggande/förmildrande åtgärder:

- Att säkra HTTP-begäranden - Genom att vidta säkerhetsåtgärder i HTTP-begäranden som används i webbapplikationer kan användarinformation hanteras på ett säkert sätt.

- Att validera och/eller sanera användargenererat innehåll - Genom att rengöra användardata på detta sätt förhindras möjligheten för en angripare att infoga skadlig kod, särskilt JavaScript, i användargenererat innehåll. Om en användare försöker infoga skadlig kod, kommer escape-tecknen att förhindra dess exekvering i webbläsaren och därmed skydda mot XSS-attacker.
