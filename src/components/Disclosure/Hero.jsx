import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";

const DisclosurePage = () => {
  const generalInfo = [
    { label: 'Name of the School', value: 'Prakriti International School' },
    { label: 'Affiliation No', value: 'Not Provided' },
    { label: 'School Code', value: 'Not Provided' },
    { label: 'Complete Address with Pin Code', value: 'Churman Chak Turkdiha, Pipraich-Hata Road, Khotta Chaoraha, Uttar Pradesh, Pin code - 274149' },
    { label: 'Principal Name & Qualification', value: 'Mr. Ravi Kant Patel & M.A. (Eco.), B.Ed.' },
    { label: 'School Email ID', value: 'manager@prakritiinternationalschool.in' },
    { label: 'Contact Details', value: '+91-7275883007, +91-7275886007' }
  ];

  const documentsInfo = [
    { label: 'Affiliation Upgradation Letter', viewLink: '#', downloadLink: '#' },
    { label: 'Societies/Trust/Company Registration Certificate', viewLink: '#', downloadLink: '#' },
    { label: 'No Objection Certificate (NOC)', viewLink: '#', downloadLink: '#' },
    { label: 'Recognition Certificate under RTE Act. 2009', viewLink: '#', downloadLink: '#' },
    { label: 'Building Safety Certificate', viewLink: '#', downloadLink: '#' },
    { label: 'Fire Safety Certificate', viewLink: '#', downloadLink: '#' },
    { label: 'DEO Certificate for Affiliation', viewLink: '#', downloadLink: '#' },
    { label: 'Water, Health, and Sanitation Certificates', viewLink: '#', downloadLink: '#' }
  ];

  const resultAndAcademics = [
    { label: 'Fee Structure of the School', link: 'Click Here' },
    { label: 'Annual Academic Calendar', link: 'Click Here' },
    { label: 'List of School Management Committee (SMC)', link: 'Click Here' },
    { label: 'List of Parents Teachers Association (PTA) Members', link: 'Click Here' },
    { label: 'Last Three Year Result of the Board Examination', link: 'N/A' }
  ];

  const staffInfo = [
    { label: 'Principal', value: '1' },
    { label: 'Total No. of Teachers', value: '20' },
    { label: 'Teacher Student Ratio', value: '1:16' },
    { label: 'Details of Special Educator', value: 'Mr. Vinay Kumar Tripathi' },
    { label: 'Details of Counsellor and Wellness Teacher', value: 'Mrs. Ankita Raj' }
  ];

  const infrastructureInfo = [
    { label: 'Total Campus Area of the School (in Square Mtr)', value: '9720' },
    { label: 'No. and Size of the Class Rooms (in Square Mtr)', value: '16 & 48' },
    { label: 'No. and Size of Laboratories Including Computer Labs (in Square Mtr)', value: 'Composite Lab- 93, Mathematics Lab- 48, Computer Lab-56' },
    { label: 'No. and Size of Library (in Square Mtr)', value: '1 & 112' },
    { label: 'Internet Facility (Y/N)', value: 'Y' },
    { label: 'No. of Girls Toilets', value: '12' },
    { label: 'No. of Boys Toilets', value: '12' },
    { label: 'Link of YouTube Video of the Inspection of School Covering the Infrastructure of the School', value: 'Watch Video' }
  ];

  const bankAndStaffDetails = [
    { label: 'Bank Statement', viewLink: '#', downloadLink: '#' },
    { label: 'EPFO Challan', viewLink: '#', downloadLink: '#' },
    { label: 'Staff Detail', viewLink: '#', downloadLink: '#' }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    title: {
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '3rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    section: {
      marginBottom: '40px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
    },
    sectionTitle: {
      color: '#800000',
      borderBottom: '2px solid #800000',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontSize: '1.5rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '15px',
    },
    th: {
      backgroundColor: '#800000',
      color: '#fff',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e0e0e0',
    },
    link: {
      color: '#800000',
      textDecoration: 'none',
      transition: 'color 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      '&:hover': {
        color: '#b22222',
        textDecoration: 'underline',
      },
    },
    icon: {
      fontSize: '1.2rem',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: '#b22222',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mandatory Public Disclosure</h2>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>A. GENERAL INFORMATION</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Information</th>
              <th style={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {generalInfo.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>B. DOCUMENTS AND INFORMATION</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Documents/Information</th>
              <th style={styles.th}>View</th>
              <th style={styles.th}>Download</th>
            </tr>
          </thead>
          <tbody>
            {documentsInfo.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>
                  <a href={item.viewLink} style={styles.link}>
                    <FaEye style={styles.icon} />
                  </a>
                </td>
                <td style={styles.td}>
                  <a href={item.downloadLink} style={styles.link}>
                    <FaDownload style={styles.icon} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>C. RESULT AND ACADEMICS</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Information</th>
              <th style={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {resultAndAcademics.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>
                  <a href="#" style={styles.link}>
                    <FaEye style={styles.icon} /> {item.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>D. STAFF (TEACHING)</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Information</th>
              <th style={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {staffInfo.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>E. SCHOOL INFRASTRUCTURE</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Information</th>
              <th style={styles.th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {infrastructureInfo.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>F. BANK AND STAFF DETAILS</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Information</th>
              <th style={styles.th}>View</th>
              <th style={styles.th}>Download</th>
            </tr>
          </thead>
          <tbody>
            {bankAndStaffDetails.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{item.label}</strong></td>
                <td style={styles.td}>
                  <a href={item.viewLink} style={styles.link}>
                    <FaEye style={styles.icon} />
                  </a>
                </td>
                <td style={styles.td}>
                  <a href={item.downloadLink} style={styles.link}>
                    <FaDownload style={styles.icon} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DisclosurePage;
