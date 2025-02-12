import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Swal from "sweetalert2"

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [emailReceived, setEmailReceived] = useState(false);
  console.log(emailReceived);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch("https://formsubmit.co/your-email@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          from: formData.email,
        }),
      })

      if (response.ok) {
        setFormStatus("success")
        setFormData({ name: "", email: "", message: "" })
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for your message. We'll get back to you soon.",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      setFormStatus("error")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      })
    }
  }

  useEffect(() => {
    const checkEmail = async () => {
      try {
        // Replace this with your actual API endpoint to check for new emails
        const response = await fetch("https://api.example.com/check-email")
        const data = await response.json()
        setEmailReceived(data.received)

        if (data.received) {
          Swal.fire({
            icon: "info",
            title: "New Email Received!",
            text: "You have a new message in your inbox.",
          })
        }
      } catch (error) {
        console.error("Error checking email:", error)
      }
    }

    // Check for new emails every 5 minutes
    const intervalId = setInterval(checkEmail, 5 * 60 * 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="contact-us" className="text-gray-600 body-font relative py-24 px-5 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
         {/* Small Title Animation */}

      <motion.h2
        className="text-[#1b2a52] text-center text-4xl/[50px] md:text-6xl/[80px] font-bold space pb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Contact Us
      </motion.h2>
      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map and Contact Info */}
        <div className="hidden lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 lg:flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>

          {/* Form Handling */} 
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-300 ease-in-out"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

