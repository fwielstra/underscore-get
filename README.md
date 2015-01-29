# underscore-get
An underscore mixin that allows you to retrieve a value from an object, without having to check if it exists first. Provides the ability to pass a default value to return if it does not exist on the object.

So you can do this
````javascript

    var value = _.get(myObj, 'a_property');
    console.log(value); // NULL

    var value = _.get(myObj, 'a_property', 'Not set');
    console.log(value); // 'Not set'

    var myObj = {another_property:foo};
    var value = _.get(myObj, 'a_property', 'Not set');
    console.log(value); // 'Not set'    

    myObj.a_property = 'bar';
    var value = _.get(myObj, 'a_property', 'Not set');
    console.log(value); // 'bar'    
````

Rather than this
````javascript
    var value = myObj && myObj.a_property ? myObj.a_property : 'Not set';
