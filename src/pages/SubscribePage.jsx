import { Card, Button, TextInput } from "../components";
import { useNavigate } from "react-router-dom";

const SubscribePage = ({ setEmail }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <Card>
      <div className="md:flex gap-6">
        <img
          src="/assets/images/illustration-sign-up-mobile.svg"
          className="w-full mb-10 md:hidden"
        />
        <div className="flex flex-col flex-1 justify-center px-9">
          <h1 className="font-bold text-5xl mb-6">Stay updated!</h1>

          <p className="mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="mb-8">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>

          <form onSubmit={onSubmit}>
            <TextInput
              label="Email address"
              type="email"
              placeholder="email@company.com"
              className="mb-6"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button fullWidth>Subscribe to monthly newsletter</Button>
          </form>
        </div>

        <div className="hidden md:block">
          <img src="/assets/images/illustration-sign-up-desktop.svg" />
        </div>
      </div>
    </Card>
  );
};

export default SubscribePage;
