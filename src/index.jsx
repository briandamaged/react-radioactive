
import React from "react";

export default function factory(factory_kwargs) {
  const factory_props = {
    name: factory_kwargs.name
  };

  if(factory_kwargs.hasOwnProperty("onChange")) {
    factory_props.onChange = factory_kwargs.onChange;
  }

  return function(instance_props) {
    const creation_props = {};

    // If this radio button's value matches the selectedValue,
    // then render it as 'checked'.
    if(factory_kwargs.hasOwnProperty("selectedValue")) {
      creation_props.checked = (instance_props.value === factory_kwargs.selectedValue);
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
