## GOF

Design patterns approached on this course:

- Factory Method;
- Abstract Factory;
- Builder;
- Adapter;
- Bridge;
- Chain of Responsibility;


### Factory Method Pattern

The Factory Method is a creational design pattern providing an interface for creating objects in a superclass, allowing subclasses to alter the object type created. Instead of using constructors, object creation is delegated to a factory method. This pattern provides a way to encapsulate a group of individual factories sharing a common theme. It simplifies code, enhances flexibility and scalability, making it easier to add new subclasses without disrupting existing client code. It solves the problem of tightly coupled code by decoupling the client from the concrete classes.


### Abstract Factory

This is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It abstracts the creation process and allows the client to use any product instances without knowing how they were created.


### Builder

Builder separates the construction of a complex object from its representation. It does this by moving the construction logic into separate functions (a builder), enabling the same construction process to create different types and representations of objects.


### Adapter

This is a structural design pattern that allows objects with incompatible interfaces to work together. It wraps an existing class with a new interface so that it becomes compatible with the client's interface. The Adapter acts as a bridge between two incompatible interfaces, translating the interface of one class into something that can be understood and used by another class.

### Bridge

The Bridge is a structural design pattern that divides a monolithic or tightly-coupled class into two separate hierarchies - abstraction and implementation. This allows the two hierarchies to evolve independently of each other. In doing so, it improves code organization, making it easier to comprehend and maintain.

### Chain of Responsibility

This is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain. It decouples the sender and receiver of a request based on the type of request, enhancing code flexibility and allowing for dynamic chain configuration.

Source: https://refactoring.guru/design-patterns
