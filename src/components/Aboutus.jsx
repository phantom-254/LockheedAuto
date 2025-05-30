import React from 'react';

const AboutUs = () => {
  return (
    <div className='col-md-center p-4'>
      <h1><b><i>About SuggestionBridge</i></b></h1>
      
      <p>
        <strong>SuggestionBridge</strong> is a modern digital platform that empowers both clients and employees to voice their ideas, concerns, and suggestions in a constructive and anonymous manner. Whether you're interacting with a government department or a service company, your feedback can help improve service delivery and workplace culture.
      </p>
      <br />
      <p>
        The platform is designed to bridge the communication gap by providing two clearly defined portals — one for employees, and one for clients. Suggestions are securely stored and easily manageable by authorized administrators within the organization.
      </p>

      <p>
        To explore how it works, click <a href="/Getproducts">here</a> {/* This should ideally link to a demo or documentation page instead */}.
      </p>

      <p>
        SuggestionBridge was founded by a team passionate about transparency, efficiency, and inclusive feedback. We believe that great ideas can come from anyone, and every voice matters.
      </p>
    </div>
  );
};

export default AboutUs;
