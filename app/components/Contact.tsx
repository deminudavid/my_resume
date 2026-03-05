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

    setLoading(true);

    const text = `Hello, I would like to start a project.

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Country: ${form.country}

Message:
${form.message}
`;

    const whatsappUrl = `https://wa.me/2348105303724?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      message: "",
    });

    showToast("success", "Opening WhatsApp...");
  }

  return (
    <section className="overflow-x-hidden bg-blue-900 dark:bg-white/10 px-2 py-10 md:p-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0">
          {/* LEFT SIDE */}
          <div className="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12">
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="font-medium text-sm text-white">
                start building
              </span>
            </div>

            <h2 className="sm:text-4xl text-[28px] leading-tight font-bold text-white py-12">
              Get in touch, let&apos;s build your biggest dream!
            </h2>

            <div className="grid grid-cols-6 pb-12 border-b border-dark_border">
              <div className="col-span-3">
                <span className="text-white/50 text-lg">Phone</span>
                <p className="text-white text-lg">+234 810 530 3724</p>
              </div>

              <div className="col-span-3">
                <span className="text-white/50 text-lg">Email</span>
                <p className="text-white text-lg">rxtech@gmail.com</p>
              </div>

              <div className="col-span-6 pt-8">
                <span className="text-white/50 text-lg">Location</span>
                <p className="text-white text-lg">Ogba, Lagos, Nigeria</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-12">
              <p className="text-white pb-4 text-base">Get in touch</p>

              <ul className="flex items-center gap-6 mt-7">
                <li>
                  <Link
                    href="https://wa.me/2348105303724"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="#A3BBD1"
                    >
                      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.46 0 .12 5.34.12 11.93c0 2.1.55 4.15 1.6 5.97L0 24l6.27-1.64a11.86 11.86 0 0 0 5.78 1.47h.01c6.59 0 11.93-5.34 11.93-11.93 0-3.19-1.24-6.19-3.47-8.42z" />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.linkedin.com/in/david-ayokanmi-802707398/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-start-8 col-start-1 col-end-13 mt-8 md:mt-0">
            <div className="bg-white max-w-200 m-auto pt-8 pb-8 px-9 rounded-md">
              <h2 className="sm:text-3xl text-lg font-bold mb-3 text-black">
                Start the project
              </h2>

              <form
                className="flex w-full flex-wrap gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-4 w-full">
                  <input
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-1/2 px-3 py-2 border rounded-lg"
                    type="text"
                    placeholder="First name"
                  />

                  <input
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-1/2 px-3 py-2 border rounded-lg"
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="youremail@website.com"
                />

                <input
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Country"
                />

                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full h-32 px-3 py-2 border rounded-lg"
                  placeholder="Let us know about your project"
                />

                <button
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-white ${
                    loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  type="submit"
                >
                  {loading ? "Opening WhatsApp..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-md shadow-lg ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.text}
        </div>
      )}
    </section>
  );
};

export default Contactform;
