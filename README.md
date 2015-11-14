# react-radioactive #

DRY radio buttons for React

## Installation ##

```shell
npm install react-radioactive
```

## The Problem ##

Unlike other HTML inputs, radio buttons always operate as a group.  Consequently, we end up specifying the same attributes over and over again:

```jsx
<input type="radio" name="language" onChange={ this.onChange } value="ruby"       /> Ruby
<input type="radio" name="language" onChange={ this.onChange } value="python"     /> Python
<input type="radio" name="language" onChange={ this.onChange } value="javascript" /> Javascript
```

To make matters worse, the only way to indicate the radio group's value is by setting the ```checked``` attribute to ```true``` on the appropriate radio button.  This effectively means that we need to define a custom ```checked``` attribute for each individual radio button.

## The Solution ##

```react-radioactive``` solves these problems through the use of factory functions.  First, we define the behavior of the group:

```jsx
var rf = require('react-radioactive').factory;
var r = rf({
  name:          "language",
  onChange:      this.onChange,
  selectedValue: this.state.value
});
```

Then, in our JSX template, we can invoke the ```r(...)``` function to quickly build radio buttons that belong to this group:

```jsx
<div>
  { r('ruby')       } Ruby
  { r('python')     } Python
  { r('javascript') } Javascript
</div>
```


## Example ##

Here's a more complete example:

```jsx
var rf = require('react-radioactive').factory;

var MyComponent = React.createClass({
  render: function() {
    // We use the radioactive factory to define the behaviors
    // of the radio button group:
    var r = rf({
      name:          "language",
      onChange:      this.onChange,
      selectedValue: this.state.value
    });


    // Now, we can easily create radio buttons that belong to
    // this group by invoking the r(...) function:
    return (
      <div >
        What's your favorite language?
        <ul>
          <li>{ r('ruby')       } Ruby        </li>
          <li>{ r('python')     } Python      </li>
          <li>{ r('javascript') } Javascript  </li>
          <li>{ r('java')       } Java        </li>
        </ul>
      </div>
    )
  },

  getInitialState: function() {
    return {
      value: "javascript"
    };
  },

  onChange: function(e) {
    this.setState({
      value: e.currentTarget.value
    });
  }
});
```

This will produce HTML output such as the following:

```html
<div data-reactid=".0">
  <span data-reactid=".0.0">
    What's your favorite language?
  </span>
  <ul data-reactid=".0.1">
    <li data-reactid=".0.1.0">
      <input name="language" value="ruby" data-reactid=".0.1.0.0" type="radio">
      <span data-reactid=".0.1.0.1">
        Ruby
      </span>
    </li>
    <li data-reactid=".0.1.1">
      <input name="language" value="python" data-reactid=".0.1.1.0" type="radio">
      <span data-reactid=".0.1.1.1">
        Python
      </span>
    </li>
    <li data-reactid=".0.1.2">
      <input name="language" checked="" value="javascript" data-reactid=".0.1.2.0" type="radio">
      <span data-reactid=".0.1.2.1">
        Javascript
      </span>
    </li>
    <li data-reactid=".0.1.3">
      <input name="language" value="java" data-reactid=".0.1.3.0" type="radio">
      <span data-reactid=".0.1.3.1">
        Java
      </span>
    </li>
  </ul>
</div>
```

Notice that the input for Javascript specifies ```checked=""```.  This is because its ```value``` attribute matches the radio group's ```selectedValue```.

## TODO ##

* Provide ```factory``` as a default export.
