# get-form-data

Retrieve data defined inside a form

## Usage

```js
const el = document.getElementById('<name of your form>');
el.addEventListener('submit', getFormData('<name of your form>', callback));
```

The `getFormData` function will return an `object` with the data defined inside the following HTML tags inside the form:

* Input
* Select
* Textarea
