import Avatar from "../avatar.png";
export default function NilaiInput({ mahasiswa }) {
  const nilaiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { nama, key } = mahasiswa;
  return (
    <div className="cell border">
      <div className="items nama">
        <img src={Avatar} alt="avatar" className="avatar" />
        {nama}
      </div>

      <div className="items">
        <select name={`${key}[]`} className="select-input">
          {nilaiArray.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="items">
        <select name={`${key}[]`} className="select-input">
          {nilaiArray.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="items">
        <select name={`${key}[]`} className="select-input">
          {nilaiArray.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="items">
        <select name={`${key}[]`} className="select-input">
          {nilaiArray.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
