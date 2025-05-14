// src/components/Commitment.tsx
const Commitment: React.FC = () => {
    return (
      <section>
        <h3 className="text-3xl font-bold text-center mb-8">Commitment</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-medium">Product Quality</h4>
            <p>We guarantee the highest quality for every product we make, ensuring the best results for you.</p>
          </li>
          <li>
            <h4 className="text-xl font-medium">Quick Response</h4>
            <p>We ensure rapid and professional responses to all customer queries and requests for support.</p>
          </li>
          <li>
            <h4 className="text-xl font-medium">Commitment to Clients</h4>
            <p>We are dedicated to building strong, long-term relationships with our clients, ensuring their goals and needs are met.</p>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Commitment;
  