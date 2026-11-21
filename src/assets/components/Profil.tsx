import React from "react";

type ProfilProps = {
  nama: string;
  peran: string;
  hobi: string[];
};

const Profil = ({ nama, peran, hobi }: ProfilProps) => {
  return (
    <article>
      <h2>{nama}</h2>
      <p>{peran}</p>
      <ul>
        {hobi.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default Profil;
