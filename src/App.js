import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/Resident%20Evil%204", 
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1468_IGDB-188x250.jpg",    
    alt: "Image Resident Evil 4",
  },  
   
  { 
    url: "https://www.twitch.tv/directory/game/F1%20Manager%202022", 
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/489490035_IGDB-188x250.jpg",  
    alt: "Image F1 Manager 2022",
  }, 

  {
    url: "https://www.twitch.tv/directory/game/NBA%202K23", 
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/772421245_IGDB-188x250.jpg",  
    alt: "Image NBA 2K23",
  },
]

const channelListData = [
  {  
    url: "https://www.youtube.com/c/CursoemV%C3%ADdeo",
    imageUrl:"https://yt3.ggpht.com/ytc/AMLnZu9SFJaGUnZnhHBfmnrSQ_5IZObGBhia1VSMVdpTEg=s176-c-k-c0x00ffffff-no-rj-mo",    
    alt: "Profile image Curso em Vídeo",
  },  
  
  {
    url: "https://www.twitch.tv/rocketseat_oficial", 
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/32092d00-2638-422d-8a24-c609354e8a9d-profile_image-150x150.png",    
    alt: "Profile image Rocketseat",
  },  

  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-70x70.png",    
    alt: "Profile image Mayk Brito",
  },  

  {  
    url: "https://www.twitch.tv/rafaballerinii", 
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/5d664b85-b516-4d64-b3e2-914e58a9d247-profile_image-70x70.png",    
    alt: "Profile image Rafa Ballerinii",
  },  

  {  
    url: "https://www.twitch.tv/thaissacandella", 
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/bac32862-63bf-4479-b9e7-4db2613e57e2-profile_image-150x150.png",    
    alt: "Profile image Thaissa Candella",
  },  

  {  
    url: "https://www.twitch.tv/jakeliny", 
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/caaa9067-d25b-4efb-b7c7-93badfd041a9-profile_image-150x150.png",    
    alt: "Profile image Jakeliny Gracielly",
  },

]

const socialListData = [
  /* {
    url: "https://www.instagram.com/renatomalb/", 
    imageUrl:"/assets/instagram.svg",    
    alt: "Instagram do Renato Albuquerque",
  },

  {
    url: "https://www.facebook.com/renato.albuquerque.501/", 
    imageUrl:"/assets/facebook.svg",    
    alt: "Facebook do Renato Albuquerque",
  },

  {
    url: "https://github.com/renato-albuquerque/", 
    imageUrl:"/assets/github.svg",    
    alt: "Github do Renato Albuquerque",
  }, */

  {
    url: "https://www.linkedin.com/in/renato-malbuquerque/", 
    imageUrl: "/assets/linkedin.svg",    
    alt: "Linkedin do Renato Albuquerque",
  },
]

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section 
          title="My Games"
          subtitle="The games I most enjoy playing!"
          className="games-list"
        >  

        {
          gameListData.map(function(item) {
            return (
              <ListItem 
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
        </Section>

        <Section
          title="Channels and Streamers"
          subtitle="List of channels and broadcasts I don't miss!"
          className="channel-list"
        >  
        
        {
          channelListData.map(function(item) {
            return (
              <ListItem 
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
        </Section>
        
        <Section
          title="My Links"
          subtitle="Connect with me right now!"
          className="social-list"
        >  

        {
          socialListData.map(function(item) {
            return (
              <ListItem 
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
        </Section>
      
      </main>  
      
    </div>
  );
}

export default App;
