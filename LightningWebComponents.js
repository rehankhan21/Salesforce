/*
    The LWC Module

    import { LightningElement } from 'lwc';
    
    LightningElement is the base class for lightning web components, which allows us 
    to use connectedCallback();
    
    The connectedCallback() method is one of our lifecycle hooks. the method is triggered when 
    a compoenent is inserted in the DOM.

    Lifecycle Hooks

    Lightning Web Componenets provides methods that allow you to "hook" your code up to critical
    events in a compoenents lifecycle. These events include when a compoent is:

        -Created
        -Added to the DOM
        -Rendered in the browser
        -Encountering erros
        -Removed from the DOM

    connectedCallBack() is invoked when a component is inserted into the DOM
    (Similar to Reacts Compoenent did mount)

    disconnectedCallback() is invoked when a component is removed from the DOM.

    **Decorators

    Decorators are used in JS to modify the behavior of a property or function.

    To use a decorator, import it from the lwc module and place it before the property
    or fucntion.

    import { LightningElement, api } from 'lwc';
    export default class MyComponent extends LightningElement{
        @api message;
    }

    You can import multiple decorators, but a single property or function can have only one decorator.
    ex. a property cant have @api and @wire decorators.
    
*/