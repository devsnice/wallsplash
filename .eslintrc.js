module.exports = {
  extends: "airbnb",
  rules: {
    // overriding airbnb rules
    "jsx-a11y/anchor-is-valid": 0,
    "import/prefer-default-export": 0,
    "no-nested-ternary": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: true
      }
    ],
    "prefer-destructuring": [
      2,
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/no-unused-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0,
    "spaced-comment": 0,
    // leave it to prettier
    "array-bracket-spacing": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "comma-dangle": 0,
    "comma-spacing": 0,
    curly: 0,
    "function-paren-newline": 0,
    "func-call-spacing": 0,
    indent: 0,
    "max-len": 0,
    "no-confusing-arrow": 0,
    "no-mixed-operators": 0,
    "no-multiple-empty-lines": 0,
    "no-multi-spaces": 0,
    "no-spaced-func": 0,
    "no-trailing-spaces": 0,
    "no-whitespace-before-property": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": 0,
    "padded-blocks": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-wrap-multilines": 0,
    "react/self-closing-comp": 0,
    semi: 0,
    "semi-spacing": 0,
    "space-before-function-paren": 0,
    "space-infix-ops": 0,
    "space-in-parens": 0
  }
};
