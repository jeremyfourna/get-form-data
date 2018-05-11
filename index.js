/* jshint esversion:6 */

// getFormData :: string -> object -> object
function getFormData(formName, callback) {
  // filterRelevantTags :: object -> boolean
  function filterRelevantTags(element) {
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
      return true;
    } else {
      return false;
    }
  }

  // extractData :: (object, object) -> object
  function extractData(accumulator, element) {
    accumulator[getFilledProp(element)] = element.value;
    return accumulator;
  }

  // getFilledProp :: object -> string
  function getFilledProp(element) {
    return (element.name === '') ? element.id : element.name;
  }

  const el = document.forms[formName].elements;

  // submitForm :: object -> object
  return function submitForm(event) {
    event.preventDefault();

    const target = Array.from(el);
    const props = target.filter(filterRelevantTags);
    const data = props.reduce(extractData, {});

    return callback(data);
  };
}
