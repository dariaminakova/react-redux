import React, {Component} from 'react';
import Modal from 'react-responsive-modal'

import FormErrors from './FormErrors'

import './Form.css'

class FormModal extends Component {

    constructor (props) {
        super(props);
        this.state = {
          email: '',
          phone: '',
          firstname:'',
          secondname:'',
          passportnumber:'',
          formErrors: {email: '', phone: '', firstname:'', secondname:'', passportnumber:''},
            emailValid: false,
            phoneValid: false,
            firstnameValid: false,
            secondnameValid: false,
            passportnumberValid: false,
            formValid: false
        }
      }

      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });      
    }

        validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let phoneValid = this.state.phoneValid;
            let firstnameValid = this.state.firstnameValid;
            let secondnameValid = this.state.secondnameValid;
            let passportnumberValid = this.state.passportnumberValid;

          switch(fieldName) {
              case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Введите почту в формате name@mail.com ';
                break;
              case 'phone':
                phoneValid = value.match (/^\d{3}\s\d{3}\s\d{2}\s\d{2}$/);
                fieldValidationErrors.phone = phoneValid ? '': ' Введите номер телефона в формате 0** *** ** **';
                break;
            case 'firstname':
                firstnameValid = value.length >= 2;
                fieldValidationErrors.firstname = firstnameValid ? '': ' Имя должно не менее двух символов';
                break;
            case 'secondname':
                secondnameValid = value.length >= 4;
                fieldValidationErrors.secondname = secondnameValid ? '': ' Фамилия должна не менее четырех символов';
                break;   
            case 'passportnumber':
                passportnumberValid = value.length >= 9;
                fieldValidationErrors.passportnumber = passportnumberValid ? '': ' Введите серия и номер паспорта в формате АА 000000';
                break; 
              default:
                break;
            }
            this.setState({formErrors: fieldValidationErrors,
                            emailValid: emailValid,
                            phoneValid: phoneValid,
                            firstnameValid: firstnameValid,
                            secondnameValid: secondnameValid,
                            passportnumberValid: passportnumberValid
                          }, this.validateForm);
          }
        validateForm() {
            this.setState({formValid: 
                this.state.emailValid 
                && this.state.phoneValid
                && this.state.firstnameValid
                && this.state.secondnameValid
                && this.state.passportnumberValid});
        }
                            
    render(){
        const {open, onCloseModal} = this.props;
        return (
            <div>
                <Modal 
                open={open} 
                onClose={onCloseModal}>

                    <form className='form'>
                    <h2> Оформить заказ </h2>
                    <div className='formGroup'>
                    <label htmlFor='email'> Электронная почта </label>
                    <input 
                        type='email' 
                        className='formControl' 
                        name='email' 
                        value={this.state.email}
                        onChange={this.handleUserInput}/>
                    </div>
                    <div className='formGroup'>
                    <label htmlFor='phone'> Номер телефона </label>
                    <input 
                        type='phone' 
                        className='formControl' 
                        name='phone' 
                        value={this.state.phone}
                        onChange={this.handleUserInput}/>
                    </div>
                    <div className='formGroup'>
                    <label htmlFor='firstname'> Имя </label>
                    <input 
                        type='text' 
                        className='formControl' 
                        name='firstname' 
                        value={this.state.firstname}
                        onChange={this.handleUserInput}/>
                    </div>
                    <div className='formGroup'>
                    <label htmlFor='secondname'> Фамилия </label>
                    <input 
                        type='text' 
                        className='formControl' 
                        name='secondname' 
                        value={this.state.secondname}
                        onChange={this.handleUserInput}/>
                    </div>
                    <div className='formGroup'>
                    <label htmlFor='passportnumber'> Номер паспорта </label>
                    <input 
                        type='text' 
                        className='formControl' 
                        name='passportnumber' 
                        value={this.state.passportnumber}
                        onChange={this.handleUserInput}/>
                    </div>
                    <button 
                        type='submit' 
                        className='btn-submit'
                        disabled={!this.state.formValid}> Оформить заказ </button>
                </form>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                
            </Modal>
        </div>
        );
    }
}

export default FormModal;