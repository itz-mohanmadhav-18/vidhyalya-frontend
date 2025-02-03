import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
export default function Privacy() {
    const privacyStatement = `
    <h2>Privacy Policy</h2>
    <p>We appreciate you taking the time to read our policy and visiting the website of Prakriti International School. We don't collect any personally identifiable information about you when you visit our website. We will use this information solely to respond to your inquiry if you give it to us. We collect some technical data to ensure a smooth experience during your visit. Below, we detail how we handle and gather technical data from visitors to our website.</p>
    
    <h3>Gathered and Stored Information</h3>
    <p>Automatic information is collected and stored when you view pages, read content, or download files from this website. You may rest assured that none of this data can be used to track you down. Below is a list of the data we collect and store about your visit:</p>
    <ul>
      <li>Your IP address and the Internet domain of your service provider.</li>
      <li>Information about the user's computer, including the browser and operating system used to view our site (e.g., Firefox, Netscape Navigator, Chrome, Windows, Linux).</li>
      <li>When you accessed our site (in date and time format).</li>
      <li>Web addresses (URLs) you've been to.</li>
      <li>The URL of the website from which you were sent to this one.</li>
    </ul>
    <p>In short, we only use this data to make the site more helpful to you in the future. We can see how many people visit our site and what devices they use by analyzing this information. Individuals and their visits are never recorded or tracked in any way.</p>
    
    <h3>Cookies</h3>
    <p>Sites you visit may install "cookies," which are little bits of software, on your computer or other browsing devices. Some cookies are used to remember your preferences or identify your computer. Per-session cookies are the only type of cookie we utilize. Technically speaking, session cookies help you get around this site quickly and easily. Cookies used on our site do not gather any personally identifiable information and are removed from your computer after you leave. Cookies do not save the information or save any files on your hard drive. The cookies are only accessible while the browser is open and running. Similarly, the cookie will be deleted when the browser is closed.</p>
    
    <h3>If You Submit Sensitive Data</h3>
    <p>The only reason we collect your information is to reply to you (for example, to respond to your questions or provide your chosen subscriptions). With your personal information (for example, by filling out a Contact Us form, including your email address or mailing address, and submitting it to us via the website). We will use that information to react to your message and help you obtain the requested information. Any information you provide will only be shared with another government agency if your inquiry pertains explicitly to that agency or as otherwise required by law. Neither personal information nor user profiles are gathered or created for advertising on this site. We require an email address so that we may respond to any questions or comments you send us in a timely fashion, but other than that, we ask that you not include any identifying information.</p>
    
    <h3>The Importance of Site Security</h3>
    <p>This computer system uses commercial software programs to keep the site secure and to identify any unauthorized attempts to upload or change information or to cause any other type of damage to keep this service vice available at all times. The raw data logs are not used for anything else and are deleted routinely. All efforts to upload or modify information without permission are banned and may be prosecuted under the Indian Information Technology Act.</p>
  `;
  
  return (
    <>
      <NavBar className="bg-maroon" />
      <div className="flex justify-center items-center flex-col">
        <h1 className="headings self-start mt-6 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit  !bg-maroon-text ">
          Terms & Conditions
        </h1>
        <p
          className="w-10/12 my-6 mb-12 text-md sm:text-lg text-justify"
          dangerouslySetInnerHTML={{ __html: privacyStatement }}
        ></p>
      </div>
      <Footer />
    </>
  );
}
