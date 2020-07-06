# HandRight
### A link to our youtube demo - https://www.youtube.com/watch?v=vhN4BqN2lqU&t=4s

## Inspiration
We were inspired to create HandRight after witnessing the struggles of parents trying to teach their their kids how to handwrite words at home firsthand. COVID-19 has especially exacerbated these difficulties as teachers and educators are unable to meet with and teach young students due to the quarantine restrictions. And with parents working full-time, students find it hard to stay motivated and are not able to practice their handwriting skills. They are left alone and with no one to guide them first hand, they are sacrificing their learning. We wanted to help struggling students deal with global education crisis.

## What it does
HandRight is a fun and captivating game that uses computer vision to help students practice their handwriting without the presence of parents or other mentors. Furthermore, HandRight offers 3 core features:
1. Allows students to write with real writing implements such as pens and pencils
2. Allows students to get instant feedback (the kind they can't get from their teachers during COVID-19)
3. Gamifies the process of handwriting by assigning scores and points, and a leaderboard, motivating students to practice

## How We built it
We used:
<ol>
<li>Flask for the backend and for handling the serving of the documents.</li>
<li>HTML, CSS, Javascript for building an aesthetically-pleasing frontend.</li>
<li>Python as the primary language for the functionalities and backend.</li>
<li>OpenCV for Computer Vision and reading the video.</li>
<li>EAST deep learning text detector to locate text in the video.</li>
<li>Google Cloud Vision Text Recognition for reading the words on the paper.</li>
</ol>

## Challenges We ran into
We struggled to find or create a good handwriting detection library. We went through many options, including pyteresseract and a TF1-based model till we settled on Google Cloud, which working incredibly well.<br>
In addition, as shown in [our issue](https://github.com/mihirKachroo/learnIt/issues/1), VSC's in-built terminal on a Mac doesn't ask for video permission, which causes it to abort. Lastly, time was definitely one of our largest problems. Due to the sheer amount of work that we had to do in this short time period, we had to organize ourselves really well and work non-stop.

## Accomplishments that I'm proud of
We're proud that we were able to finally find a working handwriting-identification library. In addition, we were able to resolve the Abort Error issue, so our app was functional for all our team members. Finally, we're proud that we got the application functional and ready for potential use! Making a complex game with ml vision, a right/wrong functionality and a realtime leader board was very tough, but we persevered through it and are extremely proud of our final results.

## What We learned
We learned about different OCR platforms, having experimented with many options. We also gained a lot more experience with Flask, learning how to link videos inside of Flask and have them operate at the same time as the app itself without causing problems. Not only did we learn a lot about programming, we also learned how to work together really well in a high pressured environment. Since this was a virtual hackathon, we had a lot of difficulty at the start keeping track of each other and what we were supposed to do. But then, we started assigning roles, keeping track of our project through discord and Range.cc (tools that none of us had experience with) and regularly talking with each other on discord. After that, our project began flowing much more smoothly and by the end, we were able to complete it!

## What's next for HandRight
Next, we hope to clean the game up a little bit, then push it out to the public. In addition, we hope to insert an audio feature to have a student learn spelling as well. Finally, we hope to make the website more kid-friendly, inserting characters and music to make the website compelling to children. 

## Team
* **Veer Gadodia** - Veer#7244
* **Shreya Chaudhary** - GenericPerson#6928
* **Mihir Kachroo** - Mihir#7285
* **Dhir Kachroo** -dhir2907#7695
