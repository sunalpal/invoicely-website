import  { useState } from 'react';

const LanguageDropdown = () => {
  const [language, setLanguage] = useState('en');

  const handleChange = (e) => {
    setLanguage(e.target.value);
    console.log('Selected Language:', e.target.value);
   
  };

  return (
    <select value={language} onChange={handleChange} style={styles.select}>
      <option value="en"> English</option>
      <option value="hi">हिन्दी</option>
      <option value="bn">বাংলা</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  );
};

const styles = {
  select: {
    padding: '8px 12px',
    fontSize: '16px',
    fontWeight:'540',
    borderRadius: '4px',
    border: '0.5px solid #ccc',
    cursor: 'pointer',
    backgroundColor: '#fff'
  }
};

export default LanguageDropdown;
