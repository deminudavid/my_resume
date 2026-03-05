"use client";
import Link from "next/link";
import { useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  message: string;
}

const Contactform = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function showToast(type: "success" | "error", text: string) {
    setToast({ type, text });
    setTimeout(() => setToast(null), 5000);
  }

  function validate() {
    if (!form.firstName.trim() || !form.lastName.trim()) {
      showToast("error", "Please enter your full name");
      return false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      showToast("error", "Please enter a valid email");
      return false;
    }
    if (form.message.trim().length < 10) {
      showToast("error", "Message must be at least 10 characters");
      return false;
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hello, I would like to start a project.

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Country: ${form.country}

Message:
${form.message}
  `;

    const whatsappUrl = `https://wa.me/2348105303724?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="overflow-x-hidden bg-blue-900 dark:bg-white/10 px-2 py-10 md:p-10 ">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0">
          <div
            className="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2 items-center justify-start">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="font-medium text-sm text-white dark:text-white">
                start building
              </span>
            </div>
            <h2 className="sm:text-4xl text-[28px] leading-tight font-bold text-white py-12">
              Get in touch, let&apos;s build your biggest dream!
            </h2>
            <div className="grid grid-cols-6 pb-12 border-b border-dark_border ">
              <div className="col-span-3">
                <span className="text-white/50 text-lg">Phone</span>
                <p className="bg-transparent border-0 text-white text-lg">
                  +234 810 530 3724
                </p>
              </div>
              <div className="col-span-3">
                <span className="text-white/50 text-lg">Email</span>
                <p className="bg-transparent border-0 text-white text-lg">
                  rxtech@gmail.com
                </p>
              </div>
              <div className="col-span-6 pt-8">
                <span className="text-white/50 text-lg">Location</span>
                <p className="bg-transparent border-0 text-white text-lg">
                  Ogba, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="pt-12">
              <p className="text-white pb-4 text-base">Get in touch</p>
              <div className="flex items-center flex-wrap md:gap-14 gap-7">
                <div>
                  <ul className="flex items-center gap-3 mt-7.5">
                    <li className="group">
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="#A3BBD1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:fill-primary"
                        >
                          <g clipPath="url(#clip0_1_343)">
                            <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_343">
                              <rect
                                width="25"
                                height="25"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="#A3BBD1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:fill-primary"
                        >
                          <g clipPath="url(#clip0_1_345)">
                            <path d="M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0V0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_345">
                              <rect
                                width="23"
                                height="23"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        href="https://www.linkedin.com/in/david-ayokanmi-802707398/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="#A3BBD1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:fill-primary"
                        >
                          <g clipPath="url(#clip0_1_347)">
                            <path d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_347">
                              <rect
                                width="22"
                                height="23"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        href="https://wa.me/2348105303724"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="#A3BBD1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:fill-primary dark:group-hover:fill-secondary"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          />
                          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                      </Link>
                    </li>
                    <li className="group">
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="#A3BBD1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:fill-primary dark:group-hover:fill-secondary"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line
                            x1="17.5"
                            x2="17.51"
                            y1="6.5"
                            y2="6.5"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="relative before:content-[''] before:absolute before:bg-[url('/images/contact/form-line.png')] before:bg-no-repeat before:w-52 before:h-24 before:top-5% before:bg-contain before:left-[35%] before:z-1 before:translate-x-full lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/contact/from-round-line.png')] after:bg-no-repeat after:w-25.25 after:h-25.25 after:bg-contain after:top-1/2 after:-left-[25%] after:z-1 after:translate-x-1/2 after:translate-y-1/2 md:after:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13"
          >
            <div className="lg:mt-0 mt-8  bg-white dark:bg-darkmode max-w-200 m-auto pt-8.75 pb-8 px-9.5 rounded-md relative z-10">
              <h2 className="sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-black/80">
                Start the project
              </h2>
              <form
                className="flex w-full m-auto justify-between flex-wrap gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-4">
                  <input
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="text-midnight_text w-1/2 text-base transition-[0.5s] bg-transparent dark:border-black/80 dark:text-black px-3.75 py-[0.830rem] border border-border rounded-lg focus-visible:outline-0"
                    type="text"
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <input
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    type="text"
                    className="text-midnight_text w-1/2 text-base transition-[0.5s] bg-transparent dark:border-black/80 dark:text-black px-3.75 py-[0.830rem] border border-border rounded-lg focus-visible:outline-0"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="w-full">
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    type="email"
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent px-3.75 py-[0.830rem] border border-border rounded-lg focus-visible:outline-0"
                    placeholder="youremail@website.com"
                    aria-label="Email"
                  />
                </div>
                <div className="w-full">
                  <input
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-black/80 dark:text-black px-3.75 py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-black placeholder:text-grey rounded-lg focus-visible:outline-0"
                    type="text"
                    placeholder="Country"
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, country: e.target.value })
                    }
                  />
                </div>
                <div className="w-full">
                  <textarea
                    className="text-midnight_text h-37.5 w-full text-base transition-[0.5s] bg-transparent dark:border-black/80 dark:text-black px-3.75 py-[0.830rem] border! border-border border-solid! focus:border-primary dark:focus:border-black placeholder:text-grey rounded-lg focus-visible:outline-0"
                    placeholder="Let us know about your project"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="flex">{/*  */}</div>
                <div className="w-full">
                  <button
                    disabled={loading}
                    className={`w-full py-3 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-primary hover:bg-blue-700"}`}
                    type="submit"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-md shadow-lg ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
        >
          {toast.text}
        </div>
      )}
    </section>
  );
};

export default Contactform;
