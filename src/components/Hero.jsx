const Hero = () => {
  const openFacebook = () => {
    window.open("https://www.facebook.com/deepa.bhandari.165", "_blank", "noreferrer");
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-pink-100 to-rose-50 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          We&apos;re currently under maintenance
        </h1>
        <p className="mt-4 text-gray-600">
          This section is being updated right now. Please connect with me on Facebook in the meantime.
        </p>

        {/* Facebook button */}
        <button
          type="button"
          onClick={openFacebook}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#165fd1] hover:shadow-lg"
        >
          {/* Optional: simple F icon instead of importing an icon library */}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1877F2]">
            f
          </span>
          Connect on Facebook
        </button>
      </div>
    </section>
  );
};

export default Hero;
