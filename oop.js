class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(v) {
    var c = this.x + v.x
    var d = this.y + v.y
    return new Vector(c, d)
  }
  minus(v) {
    var c = this.x - v.x
    var d = this.y - v.y
    return new Vector(c, d)
  }
  get length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2))
  }
}

class Complex {
  constructor(real, imag) {
    this._real = real
    this._imag = imag
  }
  get real() {
    return this._real
  }
  get imag() {
    return this._imag
  }
  set real(val) {
    if (Number.isFinite(val)) {
      this._real = val
    }
  }
  plus(c) {
    var preal = this.real + c.real
    var pimag = this.imag + c.imag
    return new Complex(preal, pimag)
  }
  minus(c) {
    var mreal = this.real - c.real
    var mimag = this.imag - c.imag
    return new Complex(mreal, mimag)
  }
  multiply(c) {
    var mureal = this.real * c.real - this.imag * c.imag
    var muimag = this.real * c.imag + this.imag * c.real
    return new Complex(mureal, muimag)
  }
  div(c) {
    var dreal = (this.real * c.real + this.imag * c.imag) / (c.real ** 2 + c.imag ** 2)
    var dimag = (this.imag * c.real - this.real * c.imag) / (c.real ** 2 + c.imag ** 2)
    return new Complex(dreal, dimag)
  }
  // div(c) {
  //   var helper = new Complex(c.real, -c.imag)
  //   var up = this.multiply(helper)
  //   var down = c.multiply(helper)
  //   var real = up.real / down.real
  //   var imag = up.imag / down.real
  //   return new Complex(real, imag)
  // }
  toString() {
    return '(' + this.real + (this.imag >= 0 ? '+' : '') + this.imag + 'i' + ')'
  }
}

class ArrayList {
  constructor(initialCapacity = 8) {
    this._length = 0
    this._capacity = initialCapacity
    this._array = new Array(this._capacity)
  }

  at(idx) {
    if (idx >= this._length || idx < -this._length) {
      return undefined
    }
    if (idx < 0) {
      return this._array[idx + this._length]
    }
    return this._array[idx]
  }

  push(val) {
    if (this._length == this._capacity) {
      this._capacity = this._capacity * 2
      var newArray = new Array(this._capacity)
      for (var i = 0; i < this._length; i++) {
        newArray[i] = this._array[i]
      }
      this._array = newArray
    }
    this._array[this._length] = val
    this._length++
    return this
  }
  pop() {
    if (this._length == 0) {
      return undefined
    }

    var val = this._array[this._length - 1]
    this._length--
    if (this._length <= this._capacity / 4 && this._capacity >= 16) {
      this._capacity = this._capacity / 2
      var newArray = new Array(this._capacity)
      for (var i = 0; i < this._length; i++) {
        newArray[i] = this._array[i]
      }
      this._array = newArray
      return val
    } else {
      this._array[this._length] = undefined
      return val
    }
  }
  get length() {
    return this._length
  }
  set length(l) {
    this._length = l
    this._array.length = l
  }
}

class Queue {
  constructor() {
    this._head = null // out
    this._tail = null // in
    this._size = 0
  }
  add(val) {
    var node = { val: val, next: null }
    this._size++
    if (this._head == null) {
      this._head = this._tail = node
      return this
    }
    this._tail.next = node
    this._tail = node
    return this
  }
  pop() {
    if (this._head == null) {
      return undefined
    }
    this._size--
    if (this._head == this._tail) {
      var val = this._head.val
      this._head = this._tail = null
      return val
    }
    var val = this._head.val
    this._head = this._head.next
    return val
  }
  peek() {
    if (this._head == null) {
      return undefined
    }
    var val = this._head.val
    return val
  }
  get size() {
    return this._size
  }
}

class MySet {
  constructor() {
    this._elements = []
    this._size = 0
  }
  add(val) {
    if (!this.has(val)) {
      this._elements.push(val)
      this._size++
    }
    return this
  }
  has(val) {
    for (var i = 0; i < this._size; i++) {
      if (this._elements[i] === val) {
        return true
      }
    }
    return false
  }
  delete(val) {
    if (this.has(val)) {
      var idx = this._elements.indexOf(val)
      this._elements.splice(idx, 1)
      this._size--
      return this
    }
    return this
  }
  get size() {
    return this._size
  }
  clear() {
    this._elements.length = 0
    this._size = 0
    return this
  }
}

class MyMap {
  constructor() {
    this._keys = []
    this._vals = []
    this._size = 0
  }
  set(key, val) {
    for (var i = 0; i < this._size; i++) {
      if (this._keys[i] === key) {
        this._vals[i] = val
        return this
      }
    }
    this._keys.push(key)
    this._vals.push(val)
    this._size++
    return this
  }

  get(key) {
    for (var i = 0; i < this._size; i++) {
      if (this._keys[i] === key) {
        return this._vals[i]
      }
    }
    return undefined
  }
  has(key) {
    for (var i = 0; i < this._size; i++) {
      if (this._keys[i] === key) {
        return true
      }
    }
    return false
  }
  delete(key) {
    for (var i = 0; i < this._size; i++) {
      if (this._keys[i] === key) {
        this._keys.splice(i, 1)
        this._vals.splice(i, 1)
        this._size--
        return true
      }
    }
    return false
  }
  clear() {
    this._keys.length = 0
    this._vals.length = 0
    this._size = 0
    return this
  }
  get size() {
    return this._size
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  append(val) {
    var node = { val: val, next: null }
    this._size++
    if (!this._head) {
      this._head = this._tail = node
      return this
    }
    this._tail.next = node
    this._tail = node
    return this
  }
  prepend(val) {
    var node = { val: val, next: null }
    this._size++
    if (!this._head) {
      this._head = this._tail = node
      return this
    }
    node.next = this._head
    this._head = node
    return this
  }
  at(idx) {
    if (idx < 0 && idx >= -this._size) {
      idx = idx + this._size
    }
    if (idx < 0 || idx >= this._size || !this._head) {
      return undefined
    }
    var c = 0
    var p = this._head
    while (c !== idx) {
      p = p.next
      c++
    }
    return p.val
  }
  get size() {
    return this._size
  }
}

class Stack {
  constructor() {
    this._stack = []
    this._size = 0
    this._minStack = []
  }
  push(value) {
    this._stack[this._size] = value
    this._size++
    if (this._minStack.length == 0) {
      this._minStack.push(value)
    } else {
      var min = this._minStack[this._minStack.length - 1]
      this._minStack.push(Math.min(value, min))
    }
  }
  pop() {
    var val = this._stack[this._size - 1]
    this._stack.splice(this._size - 1, 1)
    this._size--
    this._minStack.pop()
    return val
  }
  top() {
    return this._stack[this._size - 1]
  }
  getMin() {
    return this._minStack.at(-1)
  }
  get size() {
    return this._size
  }
}
