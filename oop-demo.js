function Person(name){
	this.name = name;
}

Person.prototype.getName = function(){
	return this.name;
}

var a = new Person('Jacky');
alert(a.getName());

function Programmer(name, sex){
	Person.call(this, name);
	this.sex = sex;
}

Programmer.prototype = new Person();
//子类的原型对象等于超类的实现
Programmer.prototype.constructor = Programmer;
Programmer.prototype.getSex = function(){
	return this.sex;
}

var _m = new Programmer('Enya', 'male');

//自身的方法
//alert(_m.getSex());
//超类的方法
//alert(_m.getName())

var clone = function(obj){
	var _f = function(){};
	_f.prototype = obj;
	return new _f;
}

