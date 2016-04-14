# Madlibs

1. Fork this repository and create a new workspace in cloud9
2. Create a story with ten parts of speech
3. Lost? Google your problem first and then raise your hand if you still need help. Also check out `example.html`

In the following files...

### `index.html` 
* new input for each word you want to ask for with an ID for each one 
```html
<input type="text" class="form-control input-lg" id="newIDHere" placeholder="your prompt here">
```

### `app.js`
* Add new words you want the user to fill in to the variable `story`
* for each input you have
```js
inputValue = $('#newIDHere').val();
story = story.replace("PLURAL_NOUN", inputValue);
```
* Two of the parts of speech are already there for you. You will need to add 8 more. Get creative!
* __bonus__: bold the words that the user added

### bonus: style.css
Style your madlibs! 
