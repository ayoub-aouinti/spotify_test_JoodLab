import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },

  },
  {
    name: 'Browse',
  
    iconComponent: { name: 'cil-browser' },
  },
  {
    name: 'Liked songs',
    url: '/base/tables',
    iconComponent: { name: 'cil-heart' },
  },
  {
    title: true,
    name: 'YOUR LIBRARY'
  },

  {
    
    name: 'Made for you',
    

  },
  {
    name: 'Recent Played',
    
    
  },
  {
    name: 'Albums',
   

  },
  {
    name: 'Local files',
  

  },
  {
    name: 'Podcasts',
    
  },
  {
    name: 'Playlists',
    title: true
  },

  {
    name: 'NEW PLAYLIST',
    url: '/',
    iconComponent: { name: 'cil-plus' },
  },
  



  
  


  
 

  

];
