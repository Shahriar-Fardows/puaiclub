import { useState } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { motion } from "framer-motion"

const JoinForm = () => {
  const { register, handleSubmit, watch, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const paymentMethod = watch("paymentMethod")

  const onSubmit = async (data) => {
    if (data.paymentMethod === "bKash" && !data.transactionId) {
      Swal.fire("Error", "Please enter your Transaction ID", "error")
      return
    }

    setIsSubmitting(true)

    // Store data to Google Sheet
    fetch("https://sheetdb.io/api/v1/ojdl05sbsp66c", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          fullName: data.fullName,
          studentId: data.studentId,
          email: data.email,
          contactNumber: data.contactNumber,
          department: data.department,
          bloodGroup: data.bloodGroup,
          paymentMethod: data.paymentMethod,
          transactionId: data.transactionId || "",
        },
      }),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success", "Registration successful!", "success")
        reset()
      })
      .catch(() => Swal.fire("Error", "Something went wrong!", "error"))
      .finally(() => setIsSubmitting(false))
  }

  const handlePayNow = () => {
    Swal.fire({
      title: "bKash Payment",
      html:
        "<p>Send 50TK to this number: <strong>017XXXXXXXX</strong></p>" +
        '<input id="swal-input1" class="swal2-input" placeholder="Transaction ID">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Confirm Registration",
      preConfirm: () => {
        const transactionId = document.getElementById("swal-input1").value
        if (!transactionId) {
          Swal.showValidationMessage("Please enter the Transaction ID")
        }
        return { transactionId: transactionId }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit({
          ...watch(),
          transactionId: result.value.transactionId,
        })
      }
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 md:py-36"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Join Us Today</h2>
          <p className="mt-4 text-xl text-gray-600">Shape Your Future with Just 50TK Registration Fee!</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white shadow-2xl rounded-lg overflow-hidden"
        >
          <div className="px-4 py-8 sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {[
                  { name: "fullName", placeholder: "Full Name", type: "text" },
                  { name: "studentId", placeholder: "Student ID", type: "text" },
                  { name: "email", placeholder: "Email", type: "email" },
                  { name: "contactNumber", placeholder: "Contact Number", type: "text" },
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                      {field.placeholder}
                    </label>
                    <input
                      {...register(field.name, { required: true })}
                      type={field.type}
                      id={field.name}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
              >
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <select
                    {...register("department", { required: true })}
                    id="department"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="EEE">EEE</option>
                    <option value="BBA">BBA</option>
                    <option value="ME">ME</option>
                    <option value="CE">CE</option>
                    <option value="TE">TE</option>
                    <option value="IPE">IPE</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                    Blood Group
                  </label>
                  <select
                    {...register("bloodGroup", { required: true })}
                    id="bloodGroup"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <select
                  {...register("paymentMethod", { required: true })}
                  id="paymentMethod"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                >
                  <option value="">Select Payment Method</option>
                  <option value="bKash">bKash</option>
                  <option value="Cash">Cash</option>
                </select>
              </motion.div>

              {paymentMethod === "bKash" && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  type="button"
                  onClick={handlePayNow}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Pay Now
                </motion.button>
              )}

              {paymentMethod && paymentMethod !== "bKash" && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Registering...
                    </span>
                  ) : (
                    "Register"
                  )}
                </motion.button>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JoinForm

