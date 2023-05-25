import { useRef } from "react";
import NilaiInput from "./NilaiInput";

const mahasiswaList = [
  {
    key: "mahasiswa_1",
    nama: "Mahasiswa 1",
  },
  {
    key: "mahasiswa_2",
    nama: "Mahasiswa 2",
  },
  {
    key: "mahasiswa_3",
    nama: "Mahasiswa 3",
  },
  {
    key: "mahasiswa_4",
    nama: "Mahasiswa 4",
  },
  {
    key: "mahasiswa_5",
    nama: "Mahasiswa 5",
  },
  {
    key: "mahasiswa_6",
    nama: "Mahasiswa 6",
  },
  {
    key: "mahasiswa_7",
    nama: "Mahasiswa 7",
  },
  {
    key: "mahasiswa_8",
    nama: "Mahasiswa 8",
  },
  {
    key: "mahasiswa_9",
    nama: "Mahasiswa 9",
  },
  {
    key: "mahasiswa_10",
    nama: "Mahasiswa 10",
  },
];

export default function List() {
  const result = {
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  };

  const formRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    mahasiswaList.forEach((mahasiswa) => {
      const data = formData.getAll(`${mahasiswa.key}[]`);
      result["aspek_penilaian_1"][mahasiswa.key] = data[0];
      result["aspek_penilaian_2"][mahasiswa.key] = data[1];
      result["aspek_penilaian_3"][mahasiswa.key] = data[2];
      result["aspek_penilaian_4"][mahasiswa.key] = data[3];
    });

    exportJSON(result);
    console.log(result);
  };

  const exportJSON = (data) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "output.json";

    link.click();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="form">
      <div className="container">
        <div className="cell">
          <div className="items"></div>
          <div className="items">
            <p className="input-title">
              Aspek <br />
              Penilaian 1
            </p>
          </div>
          <div className="items">
            <p className="input-title">
              Aspek <br />
              Penilaian 2
            </p>
          </div>
          <div className="items">
            <p className="input-title">
              Aspek <br />
              Penilaian 3
            </p>
          </div>
          <div className="items">
            <p className="input-title">
              Aspek <br />
              Penilaian 4
            </p>
          </div>
        </div>

        {mahasiswaList.map((mahasiswa) => (
          <NilaiInput key={mahasiswa.key} mahasiswa={mahasiswa} />
        ))}
      </div>
      <button type="submit" className="button">
        Simpan
      </button>
    </form>
  );
}
