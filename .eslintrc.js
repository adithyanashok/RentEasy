module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-filename-extension': 'off',
      },
}
