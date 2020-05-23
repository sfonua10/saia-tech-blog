---
title: Open Graph Protocol
date: 2020-05-19
description: Open Graph Data is Facebook's metadata protocol that allows websites to be shared on Facebook's platform to display a rich experience about a particular website that is be scraped.
---

I started working with the Open Graph protocol before I even fully knew what it was. A QA Engineer came to me one day, and pointed me to the meta tags in the html inside chrome dev tools that looked similar to this:

```
<html prefix="og: http://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="http://test.imdb.com/title/tt0117500/" />
<meta property="og:image" content="" />
...
</head>
...
</html>
```

He pointed to the the meta tag with the og:image and how the content was blank, and this is how he was manually testing it. When he clicked on the Facebook share button, there was no image that showed up. It looked like this:

I then assumed if there was a valid image url path inside the content property, then an image would display when sharing this asset to Facebook. However, this was not the case either.

![alt text](https://github.com/sfonua10/images/blob/master/images/meta-tags-og.png?raw=true "OG Meta Data")

Facebook's Cralwer can't even acces this page: https://test.churchofjesuschrist.org/media/image/alma-the-younger-corianton-3e725dd?lang=eng to scrape the HTML because it's an internal path to our internal network. This was a gotcha for me as a Junior Dev. But when clicking on the Facebook share button for this asset page, how was Facebook still reading the test domain: `TEST.CHURCHOFJESUSCHRIST.ORG` and displaying it as:

![alt text](https://github.com/sfonua10/images/blob/master/images/og-image-fail.png?raw=true "Failed OG Image")

OPEN GRAPH allows web pages too become an object in FB social graph.
