import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const GatewayForm = () => {
  const [formData, setFormData] = useState({
    gatewayName: '',
    gatewayNo: '',
    documentUrl: '',
    jiraticketUrl: '',
    socialMediaUrls: [''],
    devNotes: '',
    dateTime: new Date(),
    allCodeUrls: [''],
    status: 'live',
    gatewayStatus: '',
    currency: '',
    blocklistedCountry: '',
    cardAccepted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSocialMediaChange = (index, value) => {
    const newSocialMediaUrls = [...formData.socialMediaUrls];
    newSocialMediaUrls[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      socialMediaUrls: newSocialMediaUrls
    }));
  };

  const handleAllCodeUrlChange = (index, value) => {
    const newAllCodeUrls = [...formData.allCodeUrls];
    newAllCodeUrls[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      allCodeUrls: newAllCodeUrls
    }));
  };

  const handleAddSocialMediaUrl = () => {
    setFormData((prevData) => ({
      ...prevData,
      socialMediaUrls: [...prevData.socialMediaUrls, '']
    }));
  };

  const handleAddAllCodeUrl = () => {
    setFormData((prevData) => ({
      ...prevData,
      allCodeUrls: [...prevData.allCodeUrls, '']
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <form className="gateway-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Gateway Configuration Form</h2>

      <div className="form-row">
        <label className="form-label">
          Gateway Name:
          <input
            type="text"
            name="gatewayName"
            value={formData.gatewayName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Gateway No:
          <input
            type="text"
            name="gatewayNo"
            value={formData.gatewayNo}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Document URL:
          <input
            type="url"
            name="documentUrl"
            value={formData.documentUrl}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Jira Ticket URL:
          <input
            type="url"
            name="jiraticketUrl"
            value={formData.jiraticketUrl}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">Social Media URLs:</label>
        {formData.socialMediaUrls.map((url, index) => (
          <div key={index} className="form-row">
            <input
              type="url"
              value={url}
              onChange={(e) => handleSocialMediaChange(index, e.target.value)}
              className="form-input"
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={handleAddSocialMediaUrl}>
          Add Social Media URL
        </button>
      </div>

      <div className="form-row">
        <label className="form-label">
          Developer Notes (Imp. Note URL):
          <input
            type="url"
            name="devNotes"
            value={formData.devNotes}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Date & Time:
          <DatePicker
            selected={formData.dateTime}
            onChange={(date) => setFormData((prevData) => ({ ...prevData, dateTime: date }))}
            showTimeSelect
            dateFormat="Pp"
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">All Code URLs:</label>
        {formData.allCodeUrls.map((url, index) => (
          <div key={index} className="form-row">
            <input
              type="url"
              value={url}
              onChange={(e) => handleAllCodeUrlChange(index, e.target.value)}
              className="form-input"
            />
          </div>
        ))}
        <button type="button" className="add-button" onClick={handleAddAllCodeUrl}>
          Add All Code URL
        </button>
      </div>

      <div className="form-row">
        <label className="form-label">Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-select"
        >
          <option value="live">Live</option>
          <option value="sandbox">Sandbox</option>
        </select>
      </div>

      <div className="form-row">
        <label className="form-label">
          Gateway Status:
          <input
            type="text"
            name="gatewayStatus"
            value={formData.gatewayStatus}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Currency:
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Blocklisted Countries:
          <input
            type="text"
            name="blocklistedCountry"
            value={formData.blocklistedCountry}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Card Accepted:
          <input
            type="checkbox"
            name="cardAccepted"
            checked={formData.cardAccepted}
            onChange={(e) => setFormData((prevData) => ({ ...prevData, cardAccepted: e.target.checked }))}
            className="form-checkbox"
          />
        </label>
      </div>

      <div className="form-submit">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default GatewayForm;
