import HomePage from '../components/HelloWorld'
import FirstPage from '../components/FirstPage'
import FormPage from '../components/FormValidate'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home' },
    { name: 'first-page', path: '/firstpage', component: FirstPage, display: 'Test Page' },
    { name: 'form-validate', path: '/form', component: FormPage, display: 'Form Validate Example' }
];
