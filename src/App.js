import logo from './logo.svg';
import './App.css';
import Basic from './Basic';
import { parseFormMeta } from './formUtil';
import data from './form-meta/sample-form';

function App() {
  (async () => {
    const doc = await parseFormMeta(data);
    console.log(doc);
  })()

  return (
    <div className="App">
      <Basic 
        formTitle="Anywhere in your app!"
        initData={{ email: 'rbotla@gmail.com', password: '' }}
        validateForm={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmitForm={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      />
    </div>
  );
}

export default App;
