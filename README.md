# PageScroll
A jQuery plugin that assists scrolling the full page.

## Demo


* http://javion25.github.io/PageScroll/demo/demo.html

## Quick start

include the files
```html
<link rel="stylesheet" href="css/pagescroll.css">
<script src="jquery.min.js"></script>
<script src="PageScroll.min.js"></script>
```
call the the plugin on a container as your wish
```js
$("#container").PageScroll();
```
All done!

## Options


you can custom the caption by passing options when call the plugin, all available options are listed below.

call the the plugin on a container wish you wish
```js
$("#container").PageScroll({
    option: value,
    option2: value2,
    ...
});
```

| Option          | default       | Description      | 
|-----------------|---------------|------------------|
| selectors       | { <br/>sections:".sections",<br/>section : ".section",<br/>page : ".pages",<br/>active : ".active" <br/>,<br/>insection : ".insection" <br/>,<br/>control-prev : ".control-prev" <br/>,<br/>control-next : ".control-next" <br/> }  | A selector for the sections.                           | 
| index           | `0`           | Define the start section. | 
| easing          | `'ease'`      | Define the easing method. | 
| duration        | `500`         | Speed in milliseconds for the scrolling transitions.  | 
| loop            | `false`       | A boolean to define whether support loop.    | 
| pagination      | `true`        | A boolean to define whether support pagination.   | 
| keyboard        | `true`        | A boolean to define whether support keyboard.     | 
| direction       | `'vertical'`  | Define the scrolling direction.    | 
| callback        | `function(){}`          | A callback that is called after a new section is scrolled to. Arguments include the index of the section and an array of all section elements.        | 





## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 7+ ✔ | Chrome ✔ | Firefox ✔ | Opera ✔ | Safari ✔ |


## License

Licensed under the MIT License