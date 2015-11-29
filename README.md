# PicCarousel
A jQuery plugin that achieve to effect of Photo Carousel.

## Demo

* http://javion25.github.io/PicCarousel/demo/demo.html

## Quick start

include the files
```html
<link rel="stylesheet" href="css/style.css">
<script src="jquery.min.js"></script>
<script src="PicCarousel.min.js"></script>
```
call the the plugin on a container as your wish
```html
<script>
$("#TagName").PicCarousel();
</script>
```
All done!

## Options

you can custom the caption by passing options when call the plugin, all available options are listed below.

call the the plugin on a container wish you wish.

```js
$("#TagName").PicCarousel({
    option: value,
    option2: value2,
    ...
});
```
| Option          | default       | Description      | 
|-----------------|---------------|------------------|
| width           | `1000`        | Define the width of container.  |
| height          | `300`         | Define the height of container. | 
| posterWidth     | `520`         | Define the width of the first Photo . Maintain height and width of source image.| 
| posterHeight    | `300`         | Define the height of the first Photo. Maintain height and width of source image.| 
| scale           | `0.9`         | Define the show scale.    | 
| speed           | `300`         | Define the speed of the photo carousel.   | 
| autoPlay        | `'false'`     | A boolean to define whether support automatic play.     | 
| delay           | `500`         | Define the delay of automatic play.    | 
| verticalAlign   | `'middle'`    | Define position of photo.       | 


## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 7+ ✔ | Chrome ✔ | Firefox ✔ | Opera ✔ | Safari ✔ |


## License

Licensed under the MIT License