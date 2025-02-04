import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

export default function TermsAndConditions() {
    const terms = `The Prakriti International School in Kushinagar, under the auspices of
          Ma Dayavati Devi Shiksha and Seva Trust, is responsible for designing,
          developing, and maintaining this website (India, U.P (Kushinagar)).
          <br /><br />
          The information on this site has been updated and checked for
          accuracy, but it should not be utilised in a court of law or for any
          other judicial purpose. Any questions or concerns should be addressed
          by double-checking with the Prakriti International School, and another
          source (s) and consulting with a qualified professional. The Prakriti
          International School shall not be liable for any cost or damage,
          including but not limited to direct or indirect losses or damages, or
          any cost or damage, including but not limited to those resulting from
          lost profits, lost savings, business interruption, or lost information
          arising out of or in connection with the use of this website. The laws
          of India, U.P (Kushinagar) will apply to the interpretation and
          enforcement of these terms and conditions. The courts of India, U.P
          (Kushinagar) will have exclusive jurisdiction over any legal action or
          proceeding arising out of or related to this Agreement. 
          <br /><br />
          Hypertext
          links or pointers within this website may lead to resources on other
          sites that the Prakriti International School does not operate.
          Prakriti International School provides these resources for your
          personal use and research. Selecting an external link will take you
          away from the Prakriti International School website, and you will be
          subject to the privacy and security rules of the new site's owners and
          advertisers. However, Prakriti International School does not guarantee
          the availability of externally linked pages. Prakriti International
          School disapproves of using any copyrighted materials found on linked
          websites. Users are encouraged to approach the linked website's owner
          to obtain such permission. Prakriti International School does not
          ensure that any linked website complies with Indian Government Web
          Guidelines.`
  return (
    <>
      <NavBar className="bg-maroon" />
      <div className="flex justify-center items-center flex-col">
        <h1 className="headings self-start mt-6 !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl justify-self-center w-fit  !bg-maroon-text ">
          Terms & Conditions
        </h1>
        <p className="w-10/12 my-6 mb-12 text-md sm:text-lg text-justify" dangerouslySetInnerHTML={{ __html: terms }}>
        </p>
      </div>
      <Footer />
    </>
  );
}
