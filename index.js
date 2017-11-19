class CheckedValue {
  constructor(value) {
    this.value = value;
  }

  isTrue() {
    if (!this.value) {
      throw new Error('Value "' + this.value + '" is not true');
    }
  }

  isFalse() {
    if (this.value) {
      throw new Error('Value "' + this.value + '" is not false');
    }
  }

  isNull() {
    if (this.value) {
      throw new Error('Value "' + this.value + '" is not null');
    }
  }

  isNotNull() {
    if (!this.value) {
       throw new Error('Value is null');
    }
  }

  isEqualTo(rhs) {
    if (this.value !== rhs) {
      throw new Error('Value "' + this.value + '" is not equal to "' + rhs + '"');
    }
  }

  isNotEqualTo(rhs) {
    if (this.value === rhs) {
      throw new Error('Value "' + this.value + '" is equal to "' + rhs + '"');
    }
  }

  isGreaterThan(rhs) {
    if (this.value <= rhs) {
      throw new Error('Value "' + this.value + '" is not greater than "' + rhs + '"');
    }
  }

  isGreaterEqualTo(rhs) {
    if (this.value < rhs) {
      throw new Error('Value "' + this.value + '" is not greater or equal to "' + rhs + '"');
    }
  }

  isLessThan(rhs) {
    if (this.value >= rhs) {
      throw new Error('Value "' + this.value + '" is not less than "' + rhs + '"');
    }
  }

  isLesserEqualTo(rhs) {
    if (this.value > rhs) {
      throw new Error('Value "' + this.value + '" is greater than "' + rhs + '"');
    }
  }

  isTypeOf(type) {
    if (!(typeof this.value == type)) {
      throw new Error('Value "' + this.value + '" is not of type "' + type + '"');
    }
  }  

  contains(rhs) {
    if (this.value.indexOf(rhs) === -1) {
      throw new Error('Array does not contain value "' + rhs + '"');
    }
  }
}

function ensure(value) {
  return new CheckedValue(value);
}

module.exports = ensure;
