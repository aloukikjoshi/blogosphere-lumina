
import { Layout } from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              At Lumina, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your 
              information when you use our website.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              <strong>Personal Information:</strong> When you comment on our articles or subscribe to our newsletter, 
              we collect your name and email address.
            </p>
            <p>
              <strong>Usage Data:</strong> We automatically collect information about how you interact with our website, 
              including the pages you visit, the time and date of your visit, and your browser information.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our website</li>
              <li>Process and manage your comments</li>
              <li>Send you newsletters and updates (if you've subscribed)</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
            
            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, 
              perform website-related services, or assist us in analyzing how our website is used. These third parties have 
              access to your personal information only to perform these tasks on our behalf and are obligated not to disclose 
              or use it for any other purpose.
            </p>
            
            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@luminablog.com.
            </p>
            
            <p className="text-muted-foreground mt-8">Last Updated: June 1, 2024</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
