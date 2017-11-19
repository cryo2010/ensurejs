# OVERVIEW
ensurejs is an assertion utility package for nodejs.

# CODE EXAMPLE
```javascript
const ensure = require('ensurejs');

function register(username, password) {
  ensure(username.length).isGreaterThan(6);
  ensure(password).isNotEqualTo('password');
  ...
}

```

# INSTALLATION
```shell 
npm install ensurejs
```

# API Reference
```javascript

  // Throws if "x" is not truthy
  ensure(x).isTrue();

  // Throws if "x" is truthy
  ensure(x).isFalse();

  // Throws if "x" is not null or undefined
  ensure(x).isNull();

  // Throws if "x" is null or undefined
  ensure(x).isNotNull();

  // Throws if "x" and "y" are not equal
  ensure(x).isEqualTo(y);

  // Throws if "x" and "y" are equal
  ensure(x).isNotEqualTo(y);

  // Throws if "x" is less than or equal to "y"
  ensure(x).isGreaterThan(y);

  // Throws if "x" is less than "y"
  ensure(x).isGreaterEqualTo(y);

  // Throws if "x" is greater than or equal to "y"
  ensure(x).isLessThan(y);

  // Throws if "x" is greater than "y"
  ensure(x).isLesserEqualTo(y);

  // Throws if "x" is not of type "y"
  ensure(x).isTypeOf(y);

  // Throws if "x" does not contain "y"
  ensure(x).contains(y);
```

# TESTS
Run the unit tests using the below command.
```shell
npm test
```

# LICENSE
ISC License
