import { LitElement, html, css } from 'lit';

class PsuCard extends LitElement {
  static get properties (){
    return {
    image: { type: String },
    alt: { type: String },
    title: { type: String },
    description: { type: String },
    link: { type: String },
    dark: { type: Boolean,
    reflect: true,
   }
    
    }
  };
  static styles = css`
.buttonContainer{
  display: flex;
  justify-content: space-around;
  margin: 20px;
  position: fixed;
}



  .cards {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
  }
  .card-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 400px;
    text-align: center;
  }

  :host([dark]) .card-container {
      background-color: #151c23;
    }

  .card-container:hover { 
    background-color: #41426f;
  }



  .card-content {
    color: #333;
    padding: 20px 0;
  }

  .card-content img {
    max-width: 100%;
    border-radius: 10px;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  button {
    padding: 10px 20px;
    background-color: #001e44;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

 
`;


  constructor() {
    super();
    this.image= "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier";
    this.alt= "Card Image";
    this.title= "PSU Card";
    this.description= "Toggle Description";
    this.link= "https://www.psu.edu/";
    this.dark= false;
  }

  // firstUpdated() {
    // Your JavaScript functionality here
  //   const clonedCards = [];
  //   const getRandomColor = () => {
  //     const letters = '0123456789ABCDEF';
  //     let color = '#';
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   };


  //   const titleButton = this.shadowRoot.querySelector('#titleButton');
  //   titleButton.addEventListener('click', () => { 
  //     const cardTitle = this.shadowRoot.querySelector('.cardTitle');
  //     if( cardTitle.textContent === 'PSU Blue and White') { 
  //       cardTitle.textContent = 'PSU';
  //     } else {
  //       cardTitle.textContent = 'PSU Blue and White';
  //     }
     
  //     console.log('title changed');
  
  // });

  //   this.shadowRoot.querySelector('#cloneButton').addEventListener('click', () => {
  //     const cardToClone = this.shadowRoot.querySelector('.card-container');
  //     const clonedCard = cardToClone.cloneNode(true);
  //     clonedCards.push(clonedCard);
  //     this.shadowRoot.querySelector('.cards').appendChild(clonedCard);

  //     const clonedDetailsButton = clonedCard.querySelector('.details-button');
  //     const description = clonedCard.querySelector('.description-hidden');
  //     const cardTitle = clonedCard.querySelector('.cardTitle');

  //     clonedCard.addEventListener('mouseover', () => {
  //       clonedCard.style.backgroundColor = getRandomColor();
  //     });

  //     clonedCard.addEventListener('mouseout', () => {
  //       clonedCard.style.backgroundColor = '';
  //     });
         
  //     // do the title change for the cloned card aswell
  //     titleButton.addEventListener('click', () => { 
  //       if( cardTitle.textContent === 'PSU Blue and White') { 
  //         cardTitle.textContent = 'PSU';
  //       } else {
  //         cardTitle.textContent = 'PSU Blue and White';
  //       }
  //     });


      
      

  //     const randomColor = getRandomColor();
  //     clonedCard.style.backgroundColor = randomColor;
  //   });

  //   this.shadowRoot.querySelector('#colorButton').addEventListener('click', () => {
  //     const cardToClone = this.shadowRoot.querySelector('.card-container');
  //     cardToClone.style.backgroundColor = getRandomColor();
  //     clonedCards.forEach((clonedCard) => {
  //       const randomColor = getRandomColor();
  //       clonedCard.style.backgroundColor = randomColor;
  //     });
  //   });

  //   this.shadowRoot.querySelector('#deleteButton').addEventListener('click', () => {
  //     if (clonedCards.length > 0) {
  //       const lastCard = clonedCards.pop();
  //       lastCard.remove();
  //     }
  //   });
  // }

  render() {
    return html`
      <!-- <div class="buttonContainer">
        <button id="cloneButton">Clone Card</button>
        <button id="colorButton">Change Card Color</button>
        <button id="titleButton" @click="${this.titleButton}">Change Title</button>
        <button id="deleteButton">Delete Last Card</button>
      </div> -->
      <div class="cards">
        <div class="card-container">
          <div class="card-content">
            <h2 class="cardTitle"> ${this.title}</h2>
           
            <img
              src="${this.image}"
              alt="Card Image"
            />
            <div>
              <details>
                <summary id="toggleDescription">${this.description}</summary>
                <slot></slot>
              </details>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('psu-card', PsuCard);