AOS library is using to animate elements on your page as you scroll.[Demo](http://michalsnik.github.io/aos/)


************************************************************************************************************
### How to Use ###
First copy and paste aos folder under your main folder.

Step:1 Copy-paste the stylesheet <link> into your <head> to load the CSS.

 <link rel="stylesheet" href="aos/aos.css" />


Step:2 Copy-paste the following <script> before the closing </body> tag

<script src="aos/aos.js"></script>

Step:3 Copy-paste the init function before the closing </body> tag, to enable it.

  <script>
    AOS.init({duration: 1000, once: true});
  </script>


**********************************************************************************************************




### Basic usage

  All you have to do is to add `data-aos` attribute to html element, like so:

```html
  <div data-aos="animation_name">
```

  Script will trigger "animation_name" animation on this element, if you scroll to it.

  [Down below](https://github.com/michalsnik/aos#-animations) is a list of all available animations for now :)

### 🔥 Advanced settings

These settings can be set both on certain elements, or as default while initializing script (in options object without `data-` part).

| Attribute | Description | Example value | Default value |
|---------------------------|-------------|---------------|---------|
| *`data-aos-offset`* | Change offset to trigger animations sooner or later (px) | 200 | 120 |
| *`data-aos-duration`* | *Duration of animation (ms) | 600 | 400 |
| *`data-aos-easing`* | Choose timing function to ease elements in different ways | ease-in-sine | ease |
| *`data-aos-delay`* | Delay animation (ms) | 300 | 0 |
| *`data-aos-anchor`* | Anchor element, whose offset will be counted to trigger animation instead of actual elements offset | #selector | null |
| *`data-aos-anchor-placement`* | Anchor placement - which one position of element on the screen should trigger animation | top-center | top-bottom |
| *`data-aos-once`* | Choose wheter animation should fire once, or every time you scroll up/down to element | true | false |

*Duration accept values from 50 to 3000, with step 50ms, it's because duration of animation is handled by css, and to not make css longer than it is already I created implementations only in this range. I think this should be good for almost all cases.

If not, you may write simple CSS on your page that will add another duration option value available, for example:

```css
  body[data-aos-duration='4000'] [data-aos], [data-aos][data-aos][data-aos-duration='4000']{
    transition-duration: 4000ms;
  }
```

This code will add 4000ms duration available for you to set on AOS elements, or to set as global duration while initializing AOS script.

Notice that double `[data-aos][data-aos]` - it's not a mistake, it is a trick, to make individual settings more important than global, without need to write ugly "!important" there :)

`data-aos-anchor-placement` - You can set different placement option on each element, the principle is pretty simple, each anchor-placement option contains two words i.e. `top-center`. This means that animation will be triggered when `top` of element will reach `center` of the window.
`bottom-top` means that animation will be triggered when `bottom` of an element reach `top` of the window, and so on.
Down below you can find list of all anchor-placement options.

#### Examples:

```html
  <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
```
```html
  <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector">
```
```html
  <div data-aos="fade-up" data-aos-anchor-placement="top-center">
```


#### API

AOS object is exposed as a global variable, for now there are three methods available:

  * `init` - initialize AOS
  * `refresh` - recalculate all offsets and positions of elements (called on window resize)
  * `refreshHard` - reinit array with AOS elements and trigger `refresh` (called on DOM changes that are related to `aos` elements)

Example execution:
```javascript
  AOS.refresh();
```

By default AOS is watching for DOM changes and if there are any new elements loaded asynchronously or when something is removed from DOM it calls `refreshHard` automatically. In browsers that don't support `MutationObserver` like IE you might need to call `AOS.refreshHard()` by yourself.

`refresh` method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.

### Global settings

If you don't want to change setting for each element separately, you can change it globally.

To do this, pass options object to `init()` function, like so:

```javascript
  <script>
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  </script>
```

#### Additional configuration

These settings can be set only in options object while initializing AOS.

| Setting | Description | Example value | Default value |
|---------------------------|-------------|---------------|---------|
| *`disable`* | Condition when AOS should be disabled | mobile | false |
| *`startEvent`* | Name of event, on which AOS should be initialized | exampleEvent | DOMContentLoaded |

##### Disabling AOS

If you want to disable AOS on certain device or under any statement you can set `disable` option. Like so:

```javascript
  <script>
    AOS.init({
      disable: 'mobile'
    });
  </script>
```

There are several options that you can use to fit AOS perfectly into your project, you can pass one of three device types:
`mobile` (phones and tablets), `phone` or `tablet`. This will disable AOS on those certains devices. But if you want make your own condition, simple type your statement instead of device type name:

```javascript
  disable: window.innerWidth < 1024
```

There is also posibility to pass a `function`, which should at the end return `true` or `false`:

```javascript
  disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  }
```

##### Start event

If you don't want to initialize AOS on `DOMContentLoaded` event, you can pass your own event name and trigger it whenever you want. AOS is listening for this event on `document` element.

```javascript
  <script>
    AOS.init({
      startEvent: 'someCoolEvent'
    });
  </script>
```

**Important note:** If you set `startEvent: 'load'` it will add event listener on `window` instead of `document`.


### 👻 Animations

There are serveral predefined animations you can use already:

  * Fade animations:
    * fade
    * fade-up
    * fade-down
    * fade-left
    * fade-right
    * fade-up-right
    * fade-up-left
    * fade-down-right
    * fade-down-left

  * Flip animations:
    * flip-up
    * flip-down
    * flip-left
    * flip-right

  * Slide animations:
    * slide-up
    * slide-down
    * slide-left
    * slide-right

  * Zoom animations:
    * zoom-in
    * zoom-in-up
    * zoom-in-down
    * zoom-in-left
    * zoom-in-right
    * zoom-out
    * zoom-out-up
    * zoom-out-down
    * zoom-out-left
    * zoom-out-right

### Anchor placement:

  * top-bottom
  * top-center
  * top-top
  * center-bottom
  * center-center
  * center-top
  * bottom-bottom
  * bottom-center
  * bottom-top


### Easing functions:

You can choose one of these timing function to animate elements nicely:

  * linear
  * ease
  * ease-in
  * ease-out
  * ease-in-out
  * ease-in-back
  * ease-out-back
  * ease-in-out-back
  * ease-in-sine
  * ease-out-sine
  * ease-in-out-sine
  * ease-in-quad
  * ease-out-quad
  * ease-in-out-quad
  * ease-in-cubic
  * ease-out-cubic
  * ease-in-out-cubic
  * ease-in-quart
  * ease-out-quart
  * ease-in-out-quart

## ✌️ [Contributing](CONTRIBUTING.md)

## 📝 [Changelog](CHANGELOG.md)

## ❔Questions

If you have any questions, ideas or whatsoever, please check [AOS contribution guide](CONTRIBUTING.md) and don't hesitate to create new issues.
