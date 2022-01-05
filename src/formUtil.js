const yaml = require('js-yaml');
var jp = require('jsonpath');

//const data = require('./form-meta/sample-form.js');

export async function parseFormMeta(datayaml) {
  try {
    const doc = yaml.load(datayaml);
    await parseSchema(doc);
    // const data = await import(`./form-meta/${metaFile}`);
  } catch (e) {
    console.log(e);
  }
}

async function parseSchema (doc) {
  const parsedModel = {};
  let model = jp.query(doc, '$.app.model');
  if (!model || !isArray(model)) {
    console.log("Don't find model app.model.");
    return parsedModel;
  }
  model = model[0];
  const objects = Object.keys(model);
  console.log(objects)
}


const isArray = (x) => Array.isArray(x);
const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

