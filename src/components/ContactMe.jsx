import ContactMeSection from "./ContactMeSection";
import { useData } from "../context/DataProviderContext";

function ContactMe() {
  const { contactDetail, codingData, location } = useData();
  return (
    <div>
      <ContactMeSection heading="Contact Me" data={contactDetail} />
      <ContactMeSection
        heading="Explore My Coding Profiles"
        data={codingData}
      />
      <ContactMeSection heading="Location" data={location} />
    </div>
  );
}

export default ContactMe;
