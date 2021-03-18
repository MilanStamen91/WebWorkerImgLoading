# WebWorkerImgLoading
Loading Images with Web Workers

What's the point of this? Doesn't the browsers already decode the images in a separate thread?

Browsers decode the image separately, yes, but they don't load the images separately. 
While images are being downloaded they're blocking the UI thread and preventing anything else from being rendered until the image is done downloading. 
The upside of this approach is that if you have some massive 10k image to load, 
the rest of your UI can be rendered while the web worker handles the heavy lift of downloading the image.
It's the same reason that you move <script> tags to the bottom of the <body> or mark as async. The download of those scripts will block your UI rendering, 
so you want to delay them as long as possible, or mark them for async download.

So why not just use some lazy loading technique?

Well, this is essentially lazy loading. The difference between this and traditional lazy loading techniques is that it takes work off of the UI thread 
and loads the images in parallel, whereas traditionally you would wait until the UI has loaded, 
then set the src attribute on the img tags so they use the typical browser loading methods. 
It's the difference between loading your UI and images at the same time, versus loading your UI first, then your images after.
