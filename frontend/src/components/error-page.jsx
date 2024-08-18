import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
      <div id="error-page" className="flex justify-center items-center flex-col h-screen space-y-4">
          <h1 className="text-9xl font-extrabold"> { error.status}</h1>
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}