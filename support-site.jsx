import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been sent!");
    // This is where you'd send the data to your backend or email service
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to AllDone Co Support</h1>
      <Card className="w-full max-w-lg">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">How can we help you?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <Textarea name="issue" placeholder="Describe your issue" value={formData.issue} onChange={handleChange} required />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-6 text-center">
        <p>Need urgent help? Email us at <a href="oscarbreen05@gmail.com" className="text-blue-500">oscarbreen05@gmail.com</a></p>
      </div>
    </div>
  );
}
