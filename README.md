Sveriges Radio Player 📻
Todays assignment is to use the Sveriges Radio API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player!

How to complete this assignment
Part 1
Before you go any further, take a moment to look at an example API response from Sveriges Radio. Here you can find a list of all 55 stations, and a url to each station's live stream: http://api.sr.se/api/v2/channels?format=json&size=100

Your task is to use fetch() to get this JSON from the Sveriges Radio API and render a list of channels with playable streams on your page. You should use at least the station name, image, and colour keys in the JSON to create a layout which looks something like this:

Wireframe

API Key.
The Sveriges Radio API seems to work without any sort of authentication, so that's one less thing to worry about! :)

Audio
Check out the documentation for the <audio> tag. The format for the stream is mp3, so you'll need to use a <source> with the "type" of "audio/mpeg".

Part 2
For FWM - OWASP
Read this article about OWASP

Give answers in swedish to the following questions in a text-file in your repo:

What is OWASP and what is its primary mission as described in the article?

Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

Explain two strategies to prevent Broken Authentication vulnerabilities.

Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

For UXF - WCAG
Do this tutorial

Give answers in swedish to the following questions in a text-file in your repo:

Explain the importance of semantic elements in web development according to accessibility guidelines. Provide examples of at least two semantic HTML elements and clarify how they enhance accessibility for users with disabilities.

Describe the significance of color contrast in web design concerning accessibility. How does adhering to color contrast guidelines benefit users with visual impairments, and what are the recommended contrast ratios as per WCAG standards?

Discuss the role of alternative text (alt text) for images in accordance with accessibility guidelines. Why is it crucial to include descriptive alt text, and how does this contribute to making web content more accessible? Provide examples to illustrate your explanation.

Explain the purpose of landmarks in creating accessible web content. How do landmarks aid in navigation for users of assistive technologies, and can you provide examples of commonly used landmark elements in HTML?

Describe the significance of proper form labeling. Why is it important to label form elements, and what strategies can developers implement to ensure effective labeling for improved accessibility?

GitHub
Create a Github repo.
Upload your files to Github:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Address to your repo>
git push -u origin main
Hand in the assignment
Click the link in canvas and input the link to your repo repo.

📚 Reading List
SR API Docs
Audio HTML Tag
MDN Using Fetch
MDN Promises
🆘 How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
Ask your code buddies in your team.
Ask your fellow students in Slack.
Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.
💥 Success!
After completing this assignment you should be more comfortable using APIs, and have a little more of an idea of what you'd use an API for. You should be comfortable using fetch() to get data from the API into your page.

🏃 Stretch Goals
First stretch goal
Design for zero data. Make your page look nice while the station list is loading by creating a "skeleton loader", like we discussed during the lecture. Consider using the Chrome network throttler to simulate a slow connection and make it easier to test your code.

Second stretch goal
This task has one more stretch goal, but it is a little tough, and you'll need to do some research to complete it.

The task is to implement a search function which calls .filter() on the station list to decide which channels to render. This stretch goal requires you to research how to control form inputs.

You will need use the onChange attribute on an input to invoke a function which will use the input's value in the .filter() call to filter the stations. If you want the search to be more flexible, look into using regular expressions from the input value!