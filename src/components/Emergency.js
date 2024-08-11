import { useState } from "react"

const Emergency = () =>
{

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        contact : "",
        place : ""
    });
    const [contacts, setContacts] = useState([]);

    const handleButtonClick = () =>
    {
        setIsFormVisible(true);
    }

    const handleInputChange = (e) =>
    {
        const {name, value} = e.target;
        setFormData(
            {
                ...formData,
                [name] : value
            }
        );

    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setContacts([...contacts, setFormData]);
        setFormData({
            name: '',
            email: '',
            contact: '',
            place: ''
          });
        setIsFormVisible(false);
    }

    const handleDeleteContact = (index) =>
    {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    }


    return (
        <>
        <div className="emergency-contact-container">
            <h3>Add an Emergency contact</h3>
            <button onClick={handleButtonClick} className="add-contact-button">Add</button>
        </div>

        {isFormVisible && (
            <form className="emergency-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                     <label>Contact:</label>
                        <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                        />
                </div>
                <div className="form-group">
                    <label>Place:</label>
                    <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    required
                    />
                </div>    
                <button type="submit" className="submit-button">Submit</button>

            </form>
        )

        }

            <div className="contacts-list">
                <h2>Emergency Contacts</h2>
                <ul>
                {contacts.map((contact, index) => (
                    <li key={index} className="contact-item">
                    <strong>Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}, 
                    <strong>Contact:</strong> {contact.contact}, <strong>Place:</strong> {contact.place}
                    <button onClick={() => handleDeleteContact(index)} className="delete-button">
                        Delete
                    </button>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Emergency;