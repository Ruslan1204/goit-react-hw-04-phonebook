import PropTypes from 'prop-types';
import { useState } from 'react';
import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setnumber] = useState('');

  const handleChangeForm = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setnumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAdd(name, number);

    setName('')
    setnumber('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            onChange={handleChangeForm}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p>Number</p>
          <input
            onChange={handleChangeForm}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.bloc} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};


ContactForm.propTypes = {
  onAdd: PropTypes.func,
};





//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeForm = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number} = this.state;

//     this.props.onAdd(name, number);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <p>Name</p>
//             <input
//               onChange={this.handleChangeForm}
//               type="text"
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>

//           <label>
//             <p>Number</p>
//             <input
//               onChange={this.handleChangeForm}
//               type="tel"
//               name="number"
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className={css.bloc} type="submit">Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }


