---
title: TypeScript How to Create Class Constants
date: '2022-01-18'
---
# Introduction
TypeScript is a JavaScript-based library that implements the enforcement of certain programming rules. TypeScript is capable of everything that JavaScript can do, plus it adds features.

TypeScript is well known for offering static type checking. But in addition, it also offers other things like classes, interfaces, and type checking. Which are not available in JavaScript. JavaScript is a loosely typed language. And does not enforce data type checking.

# Syntax: 
Here is a class with private, public, protected, and read-only property. The read-only property can be declared but it can not be changed later in the code or it would cause an error.

### Javascript

    class Employee {
        public firstName: string;
        private lastName: string;
        readonly hello: string = "Hello World";
        
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        getFullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }

# Basic Examples and Explanations: 
TypeScript adds syntax to JavaScript that wasn't previously available. 

Classes are a big part of the added features from TypeScript. Classes are made with the class keyword. Inside the class structure there are properties and methods instead of variables and functions. 

Inside of a class the keywords var, let, and const are not used. Instead there are properties and methods. 

The equivalent of creating variable is to use class properties. Properties can have keywords the describe the properties. Descriptors such as public, private, protected, readonly, and static are used to add meaning to the properties and methods.

Because of this, the word const can not be used to describe a property of a class.

Instead, for a value to be immutable the same way as a constant is immutable the keyword readonly is used.

In TypeScript, classes can inherit properties and methods from another class by using the 'implements' keyword. When a new class is created and implements a parent class it inherits properties and methods from the parent class.

TypeScript uses descriptors such as private, public, and protected to indicate the scope of access. This determines where the properties and methods can be accessed. 

Public is the default and indicates that the property or method can be accessed anywhere. Private indicates that the property or method can not be accessed outside the class definition. Protected indicates that the property or method can be accessed by any subclass.

When an object is created from the class, the object has access to any public properties and methods. An object made from a class does not have access to any of the protected or private properties or methods. Both protected and private methods make the data private and unavailable to all objects created from the class.

The difference between the private and protected status is that the private properties and methods remain private to any class that inherits from the class. They are truly private. Protected properties and methods allow access to the data from any subclass.

The static keyword enables the property or method to be used without creating an object from the class. The static properties and methods are accessible from the class itself. 

To create the effect of a property being a constant the keyword 'readonly' is used. Once the readonly modifier the data can not be changed from the initial value.

# Output:

To convert the TypeScript into JavaScript, run the command tsc in the folder with the filename of the target. For example to convert the file Employee.ts into js, run the command 'tsc ./Employee.ts'. The output file called Employee.js will be the following:

### Javascript

    var Employee = /** @class */ (function () {
        function Employee(firstName, lastName) {
            this.hello = "Hello World";
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Employee.prototype.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };
        return Employee;
    }());