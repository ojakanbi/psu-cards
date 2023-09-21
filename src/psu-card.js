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

  render() {
    return html`
     
    
    <div class="cards">
   
    
      <div class="card-container">
       
        <div class="card-content">
         
          <h2 class="cardTitle">PSU Blue and White</h2>
     
          <p> "Blue and White is a Penn State Football Game day where the team is split into two teams blue and white" : "Blue and White game day"</p>
         
          <img src="https://nittanylionswire.usatoday.com/wp-content/uploads/sites/100/2023/04/USATSI_20469545.jpg?w=1000" alt="Card Image" />
          <div>
           
            <button class="details-button">Toggle Description</button>
          </div>
         
         <p class="description-hidden">Blue and White is a Penn State Football Game day where the team is split into two teams blue and white</p>
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