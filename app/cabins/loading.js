import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-2000">Loading cabin data...</p>
    </div>
  );
}
export default Loading;
