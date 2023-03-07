import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => (
  <section className="face">
    <div className="face-ok">
      <h3 className="hhh">
        Look like you&apos;re lost
      </h3>
      <p>the page you are looking for not avaible!</p>
      <Link to="/" class="connect">Go to Home</Link>
    </div>

  </section>
);

export default Default;
