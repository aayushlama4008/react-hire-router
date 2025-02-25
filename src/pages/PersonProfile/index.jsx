import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";

import { useLocation } from "react-router-dom";
function PersonProfile(props) {
  const { setHiredPeople, hiredPeople } = props;
  const [person, setPerson] = useState(null);

  const location = useLocation();
  // console.log('dome',location)
  // console.log('hiiiiii',person)

  useEffect(() => {
    if (location.state) {
      setPerson(location.state);
    }
  }, [location, person]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
