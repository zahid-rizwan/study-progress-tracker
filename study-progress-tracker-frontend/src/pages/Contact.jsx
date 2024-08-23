import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState,useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f5qzwlh",
        "template_39zsk9s",
        form.current,
        "XF1coyPkWMNI9nhmg"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Email sent successfully!");
          // Clear the form fields by resetting formData state
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          // You can also clear the form directly if using useRef
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email.");
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.3750524448826!2d78.36354283054744!3d17.42377620656281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93343550e08d%3A0xe2a90755c698d2dc!2sSchool%20of%20Technology!5e0!3m2!1sen!2sin!4v1713763660340!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-4 lg:max-w-sm border p-5 rounded">
          
            <div className="flex gap-4">
             
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="user_name"
                  className="focus:border-t-gray-900"
                  onChange={handleInputChange}
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="user_email"
                className="focus:border-t-gray-900"
                onChange={handleInputChange}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                subject
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder=""
                name="subject:"
                className="focus:border-t-gray-900"
                onChange={handleInputChange}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                onChange={handleInputChange}
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button type="submit" className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
