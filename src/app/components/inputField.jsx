export default function InputField({ placeholder }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="h-[5vh] rounded-lg p-[0.5vw] text-black"
        style={{
          outline: 'none',
          placeholder: {
            color: 'gray',
          },
        }}
      />
    </>
  );
}
