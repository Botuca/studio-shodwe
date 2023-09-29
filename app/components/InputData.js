export default function InputData(props) {
  return (
    <div className="flex flex-col w-full">
      <span className="pb-1 pl-4 text-sm">{props.name}</span>
      <input
        type="text"
        className="h-10 focus:outline-none rounded-full bg-[#8D1CFF] bg-opacity-[.37] p-4 hover:bg-opacity-70"
      />
    </div>
  );
}
