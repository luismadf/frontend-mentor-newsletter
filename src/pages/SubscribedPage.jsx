import { Card, Button } from "../components";

const SubscribedPage = ({ email }) => {
  return (
    <Card>
      <div className="h-full w-[85%] flex flex-col justify-between m-[auto] md:max-w-[380px] md:px-0">
        <div className="mt-[160px] md:mt-6">
          <img
            src="/assets/images/icon-success.svg"
            alt="success icon"
            className="mb-10"
          />
          <h2 className="font-bold text-5xl mb-5 md:mb-6">
            Thanks for subscribing!
          </h2>

          <p className="mb-6 md:mb-10">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>

        <Button fullWidth className="mb-[50px]">
          Dismiss message
        </Button>
      </div>
    </Card>
  );
};

export default SubscribedPage;
