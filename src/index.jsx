
import React from "react";

export function factory(factory_props) {

  return function(instance_props) {
    // In most cases, developers will only need to specify
    // a value.  So, we'll allow for a shorthand notation.
    if (typeof instance_props !== 'object') {
      instance_props = {value: instance_props};
    }

    const creation_props = {};

    // If this radio button's value matches the selectedValue,
    // then render it as 'checked'.
    if(factory_props.hasOwnProperty("selectedValue")) {
      creation_props.checked = (instance_props.value === factory_props.selectedValue);
    }

    return (
      <input
        type="radio"
        {...factory_props}
        {...creation_props}
        {...instance_props} />
    )
  }
}
