import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'spreveen123@gmail.com',
      href: 'mailto:spreveen123@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9488960369',
      href: 'tel:+919488960369',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathakinaru, Madurai, Tamil Nadu, India',
      href: 'https://maps.app.goo.gl/jQWYVVj4smXEk9go7',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Preveen369',
      color: 'hover:text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/preveen-s',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'X',
      href: 'https://x.com/preveenxp327207',
      color: 'hover:text-sky-400',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/',
      color: 'hover:text-blue-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/_preveen_s/',
      color: 'hover:text-pink-400',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="min-h-screen pt-20 pb-16 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-400 mb-6">
                Feel free to reach out through any of the following channels. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <a
                      href={item.href}
                      className="flex items-center gap-4"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 ${social.color} hover:border-blue-500/50 transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-slate-800/40 border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-slate-900/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-blue-500/20 transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-12 border-t border-slate-800">
          <p className="text-slate-400">
            Designed & Built by <span className="text-blue-400 font-semibold">Preveen S</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
