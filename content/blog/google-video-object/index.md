---
title: Google's Video Object
date: 2020-05-21
description: Implementing Google's Video Object in a Nextjs Application
---

bugfix/CSMEDIA-460-add-explicit-video-data-for-seo-new
demo on this branch ^^

```
      {data?.asset?.type === "video" && (
        <Helmet>
          <script type="application/ld+json">
            {`
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "${data?.asset?.title}",
              "description": ${
                data ? ("tabs" in data ? `"${data.tabs[0].content}"` : "") : ""
              },
              "thumbnailUrl": "${data?.asset?.thumbnailUrl}",
              "uploadDate": "${data?.asset?.publishedAt}",
              "contentUrl": ${
                data?.asset
                  ? "html" in data.asset
                    ? `"${data?.asset.html[0]?.src}"`
                    : ""
                  : ""
              }
        `}
          </script>
        </Helmet>
      )}
```

React Helment manages changes to the document head
https://developers.google.com/search/docs/data-types/video
Explicitly providing video information in a videoObject.
