// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

//const channelsEl = document.getElementById("channels");

const apiData = "https://api.sr.se/api/v2/channels?format=json&size=100";
console.log("API URL:", apiData);

// async function getChannels() {
//   const channelsResponse = await fetch(
//     "https://api.sr.se/api/v2/channels/?format=json"
//   );
//   let data = await channelsResponse.json();
//   console.log(data);

function getChannels() {
  fetch(apiData)
    .then((response) => response.json())
    .then((data) => {
      const channels = data.channels;
      console.log(channels);

      // Select the channels div to append stations
      const channelsEl = document.getElementById("channels");

      // Clear existing channels
      //channelsEl.innerHTML = "";

      // Check if there are channels
      if (channels && channels.length > 0) {
        channels.forEach((channel) => {
          // Rest of your code to create and append elements
          //skapa channelDiv
          const channelDiv = document.createElement("div");
          channelDiv.classList.add("channel");
          channelDiv.style.backgroundColor = `#${channel.color}` || "#FFFFFF";

          //skapa channelImageDiv

          const channelImageDiv = document.createElement("div");
          //console.log(channelImageDiv);
          //skapa ny class med classList
          channelImageDiv.classList.add("channelimg");
          const channelImage = document.createElement("img");
          //console.log(channelImage);
          channelImage.classList.add("channelimg");

          channelImage.src = channel.image;
          //console.log(channelImage); //visar channelImage för varje station som ett html element

          //Skapa content boxes över stationerna

          const contentBoxDiv = document.createElement("div");
          //console.log(contentBoxDiv);
          contentBoxDiv.classList.add("contentbox");

          const channelName = document.createElement("h2");
          channelName.textContent = channel.name;

          const channelType = document.createElement("h4");
          //console.log(channelType);
          channelType.textContent = channel.channeltype;

          const channelTag = document.createElement("p");
          channelTag.textContent = channel.tagline;
          //console.log(channelTag);

          const audioElement = document.createElement("audio");
          console.log(audioElement);
          audioElement.controls = true; // Lägg till controls till audio elementet
          console.log(audioElement.controls);
          const sourceElement = document.createElement("source");
          sourceElement.src = channel.liveaudio.url;
          console.log(sourceElement.src); //funkar när jag console loggar
          sourceElement.type = "audio/mpeg";

          //Ett annat exempel för att få play-knappen att synas:

          //audioElement.innerHTML = `
          //<audio controls>
          //  <source src=${channel.liveaudio.url}
          //  type="audio/mpeg"/>
          //</audio>`;

          console.log(sourceElement.type);

          // audioElement.appendChild(sourceElement);
          // audioElement.textContent =
          //   "Your browser does not support the audio tag.";
          // channelElement.appendChild(audioElement);

          // audioElement.src = channel.liveaudio.url; // Ställ in ljudkällan
          // audioElement.type = "audio/mpeg";
          // console.log(audioElement.src);

          // Lägga till på sidan med appendChild till channel div elementet

          channelDiv.appendChild(channelImageDiv);
          channelImageDiv.appendChild(channelImage);

          channelDiv.appendChild(contentBoxDiv);
          contentBoxDiv.appendChild(channelName);
          contentBoxDiv.appendChild(channelType);
          contentBoxDiv.appendChild(channelTag);
          contentBoxDiv.appendChild(sourceElement);
          contentBoxDiv.appendChild(audioElement);

          // Lägga till channel div till channels div

          channelsEl.appendChild(channelDiv);
        });
      } else {
        console.log("No channels found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getChannels();
