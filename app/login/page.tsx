import Image from 'next/image';

const Login = () => {
  return (
    <div className="login h-screen overflow-hidden">
      <h2 className="text-3xl font-semibold text-white p-4">PuRat</h2>

      <div className="flex items-center justify-center h-5/6">
        <div className="hidden w-[400px] text-white md:block">
          <h3 className="text-xl font-semibold mb-5">
            All the essential elements for expanding your business on whatsApp
          </h3>

          <ul className="flex list-disc flex-col gap-2 pl-6 mb-4">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet adipisicing.</li>
            <li>Lorem ipsum dolor amet consectetur adipisicing.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">
            Trusted by 6000+ users across 52 countries{' '}
          </h3>

          <ul className="flex gap-5 font-medium">
            <li>Google </li>
            <li>Netflix</li>
            <li>Apple</li>
            <li>Garmin</li>
            <li>OpenAI</li>
          </ul>
        </div>

        <div className="flex flex-col rounded-2xl bg-[#1a1919] bg-opacity-70 px-7 py-6 text-white shadow-2xl">
          <h2 className="text-center text-2xl font-medium">
            Log in to your account
          </h2>
          <h3 className="text-center font-medium">
            Welcome back! Please log in with your credential
          </h3>

          <label className="mt-4 flex flex-col">
            Email Address:
            <input
              type="email"
              placeholder="example@email.com"
              className="mt-2 rounded-lg text-slate-400"
            />
          </label>

          <label className="mt-4 flex flex-col">
            Password:
            <input
              type="password"
              placeholder="********"
              className="mt-2 rounded-lg"
            />
          </label>

          <h4 className=" py-3 text-center font-medium">Or login with:</h4>

          <div className="flex justify-around">
            <a
              href="https://www.google.com/"
              className="flex items-center justify-center gap-2 rounded-3xl bg-white px-3 py-1 text-black"
            >
              <Image src="/education.svg" width={16} height={16} alt="logo" />
              Google
            </a>
            <a
              href="https://www.facebook.com/"
              className="flex items-center justify-center gap-2 rounded-3xl bg-white px-3 py-1 text-black"
            >
              <Image src="/education.svg" width={16} height={16} alt="logo" />
              Facebook
            </a>
            <a
              href="https://www.shopify.com/"
              className="flex items-center justify-center gap-2 rounded-3xl bg-white px-3 py-1 text-black"
            >
              <Image src="/education.svg" width={16} height={16} alt="logo" />
              Shopify
            </a>
          </div>

          <button className="mb-3 mt-5 rounded-3xl bg-[#f81c1c] py-2 font-medium">
            Login
          </button>

          <p className="text-center">
            Dont have an account? <span className=" font-bold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
