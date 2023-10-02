import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuCard extends LitElement {

  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--psu-card-background-color);
    }





   
  

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    #cDescription {
    color: white;
    font-family: "Lucida Console";
  }

  #toggleDescription {
    display: flex;
    background-color: white;
    color: black;
    width: 50%;
    align-items: center; 
    border-radius:20px;
    justify-content: center;
    margin-left: 70px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: "Lucida Console"; }

    .app-footer a {
      margin-left: 5px;
    }
    .App {
  text-align: center;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;

  
}

.card-container {
  background-color: #001e44;
  width: 50%;
  height: 50%;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}



.card-content {
  text-align: center;
  color: white;
  display: block;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  
}


.card-content> img{
  width: 200px;
  max-width:80%;
  border-radius: 10px;
}


.card-content button{
  margin-top:40px;
  text-decoration: none;
  background-color: #ffff;
  color:#001e44 ;
  padding: 8px 12px;
  border-radius: 5px;
}

.card-content button:hover{ 
  background-color: #001e44;
  color: white;

}

.card-content button a{
   text-decoration: none;
}



@media (max-width: 800px) {
 .details-button {
    display: none;
  }
}


@media (max-width: 500px) {
  .card {
    max-width: 300px;
  }
}

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated() {
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const cloneButton = this.shadowRoot.querySelector("#cloneButton");
    const colorButton = this.shadowRoot.querySelector("#colorButton");
    const deleteButton = this.shadowRoot.querySelector("#deleteButton");
    const titleButton = this.shadowRoot.querySelector("#titleButton");



  
    // Store an array to keep track of the cloned card elements
    const clonedCards = [];
  
    // Event listener for cloning a card
    cloneButton.addEventListener("click", () => {
      console.log("yo")
      const cardToClone = this.shadowRoot.querySelector(".card-container");
      const clonedCard = cardToClone.cloneNode(true);
  
      // Store the cloned card in the array
      clonedCards.push(clonedCard);
  
      this.shadowRoot.querySelector(".cards").appendChild(clonedCard);
  
      // Get references to elements in the cloned card
      const clonedDetailsButton = clonedCard.querySelector(".details-button");
      const description = clonedCard.querySelector(".description-hidden");
      const cardTitle = clonedCard.querySelector(".cardTitle");
  
      clonedCard.addEventListener("mouseover", () => {
        clonedCard.style.backgroundColor = this.getRandomColor();
      });
  
      clonedCard.addEventListener("mouseout", () => {
        clonedCard.style.backgroundColor = "";
      });
  
      clonedDetailsButton.addEventListener("click", () => {
        if (description.style.display === "none" || description.style.display === "") {
          description.style.display = "block";
        } else {
          description.style.display = "none";
        }
      });
  
    
      
  
      // Generate a unique random color for each cloned card
      const randomColor = this.getRandomColor();
      clonedCard.style.backgroundColor = randomColor;
    });

    titleButton.addEventListener("click", () => {
      const originalCardTitle = this.shadowRoot.querySelector("#cardTitle");
      
      // Change the title of the original card
      if (originalCardTitle.textContent === "PSU Blue and White") {
        originalCardTitle.textContent = "PSU";
      } else {
        originalCardTitle.textContent = "PSU Blue and White";
      }
    
      // Change the title of cloned cards
      clonedCards.forEach((clonedCard) => {
        const clonedCardTitle = clonedCard.querySelector("#cardTitle");
        if (clonedCardTitle.textContent === "PSU Blue and White") {
          clonedCardTitle.textContent = "PSU";
        } else {
          clonedCardTitle.textContent = "PSU Blue and White";
        }
      });

    
  
 
    })
  
  
    // Event listener for changing card color
    colorButton.addEventListener("click", () => {
      const cardToClone = this.shadowRoot.querySelector(".card-container");
      cardToClone.style.backgroundColor = getRandomColor();
      clonedCards.forEach((clonedCard) => {
        const randomColor = getRandomColor();
        clonedCard.style.backgroundColor = randomColor;
      });
    });
  
    // Event listener for deleting the last card
    deleteButton.addEventListener("click", () => {
      if (clonedCards.length > 0) {
        const lastCard = clonedCards.pop();
        lastCard.remove();
      }
    });
  
    // ...
  

    // Function to generate a random color


}

  render() {
    return html`

<button id="cloneButton" @click="${this.cloneButton}">Clone Card</button>
<button id="colorButton" @click="${this.colorButton}">Change Card Color</button>
<button id="titleButton" @click="${this.titleButton}">Change Title</button>
<button id="deleteButton">Delete Last Card</button>

     
    
    <div class="cards">
   
    
      <div class="card-container">
       
        <div class="card-content">
         
          <h2 id="cardTitle">PSU Blue and White</h2>
     
          <p> Blue and White is a Penn State Football Game day where the team is split into two teams blue and white" : "Blue and White game day</p>
         
          <img src="https://nittanylionswire.usatoday.com/wp-content/uploads/sites/100/2023/04/USATSI_20469545.jpg?w=1000" alt="Card Image" />
          <div>
            <details>
              <summary id = "toggleDescription" > Toggle description </summary>
              
                <p> Blue and White is a Penn State Football Game day where the team is split into two teams blue and white</p>
              

            
            </details>
           

          </div>
         

        </div>
      </div>
    </div>
  </div>
  

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('psu-card', PsuCard);