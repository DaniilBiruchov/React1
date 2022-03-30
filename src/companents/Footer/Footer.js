import React from 'react';
import './Footer.css'

function Footer () {
  return (
    <div className="container">
      <footer className="footer">
        <h3 className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cumque
          quas aperiam neque. Sit voluptatibus eligendi et rem quibusdam quod!
        </h3>
        <div class="phone">
            <p><span>Телефон</span> +375 33 888-44-22</p>
            <div class="number">
                <p>+375 29 963-85-21</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer