import  { useState } from "react";

const Button = () => {
  const [aktif, setAktif] = useState<boolean>(false);

  return (
    <button
      onClick={() => setAktif(true)}
      className={aktif ? "tombol aktif" : "tombol"}
      disabled={!aktif}
      style={{ padding: 12, borderRadius: 8 }}
    >
      {aktif ? "Aktif" : "Nonaktif"}
    </button>
  );
};

export default Button;
