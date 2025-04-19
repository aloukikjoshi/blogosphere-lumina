
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center">
            About Lumina
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Lumina is a personal blog dedicated to illuminating thoughts and ideas across various domains of interest. 
              Our mission is to provide thoughtful, well-crafted content that inspires, informs, and sparks curiosity.
            </p>
            
            <h2>Our Philosophy</h2>
            <p>
              We believe in the power of well-written content to expand perspectives and deepen understanding. 
              Each article on Lumina is crafted with care, representing our commitment to quality over quantity. 
              We value depth, nuance, and authenticity in our explorations of technology, lifestyle, travel, food, and design.
            </p>
            
            <h2>The Story Behind Lumina</h2>
            <p>
              Lumina was founded in 2024 as a space for sharing passionate insights about the topics that fascinate us most. 
              The name "Lumina" reflects our goal: to bring light to interesting ideas and perspectives that might otherwise remain in the shadows.
            </p>
            
            <p>
              What began as a small personal project has grown into a platform where multiple voices contribute their expertise and experiences. 
              While we've expanded, we remain committed to the personal touch and authenticity that defined Lumina from the beginning.
            </p>
            
            <h2>Our Categories</h2>
            <p>
              Lumina covers five main categories, each representing an area where we find endless opportunities for discovery and discussion:
            </p>
            
            <ul>
              <li><strong>Technology</strong>: Exploring innovations, digital trends, and the human side of tech</li>
              <li><strong>Lifestyle</strong>: Examining approaches to living well in our complex modern world</li>
              <li><strong>Travel</strong>: Discovering places, cultures, and experiences worth seeking out</li>
              <li><strong>Food</strong>: Celebrating the culinary arts, from technique to cultural significance</li>
              <li><strong>Design</strong>: Appreciating aesthetics and functionality across various disciplines</li>
            </ul>
            
            <h2>Connect With Us</h2>
            <p>
              We value the community that has formed around Lumina and always welcome your thoughts, questions, and suggestions. 
              Feel free to engage through comments on our articles or reach out through our social media channels.
            </p>
            
            <p>
              Thank you for being part of the Lumina journey. We hope our content brings a bit of illumination to your day.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
